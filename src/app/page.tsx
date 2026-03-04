"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import mapboxgl from "mapbox-gl";

interface Tree {
  _id: string;
  name?: string;
  species?: string;
  lat: number;
  lng: number;
  height?: number | null;
  circumference?: number | null;
  description?: string;
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export default function Home() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<Map<string, mapboxgl.Marker>>(new Map());
  const previewMarkerRef = useRef<mapboxgl.Marker | null>(null);
  const [adding, setAdding] = useState(false);
  const [clickLngLat, setClickLngLat] = useState<[number, number] | null>(
    null
  );
  const [manualLat, setManualLat] = useState("");
  const [manualLng, setManualLng] = useState("");
  const [form, setForm] = useState({
    name: "",
    species: "",
    description: "",
  });
  const [detailsOpen, setDetailsOpen] = useState(false);

  const addMarker = useCallback((tree: Tree) => {
    if (!map.current) return;

    const displayName = tree.name || "Unnamed Tree";
    const displaySpecies = tree.species || "Unknown species";
    const stats: string[] = [];
    if (tree.height) stats.push(`${tree.height}m tall`);
    if (tree.circumference) stats.push(`${tree.circumference}m circumference`);

    // Parse structured info out of description
    const desc = tree.description || "";
    let family = "";
    let location = "";
    let cleanDesc = desc;

    // Extract "Family: ..." segment
    const familyMatch = cleanDesc.match(/Family:\s*([^.]+)\./);
    if (familyMatch) {
      family = familyMatch[1].trim();
      cleanDesc = cleanDesc.replace(familyMatch[0], "");
    }

    // Extract "Location: ..." segment
    const locationMatch = cleanDesc.match(/Location:\s*([^.]+)\./);
    if (locationMatch) {
      location = locationMatch[1].trim();
      cleanDesc = cleanDesc.replace(locationMatch[0], "");
    }

    // Remove "Trunk diameter: ..." and "Height: ..." from description (shown in stats)
    cleanDesc = cleanDesc.replace(/Trunk diameter:\s*[^.]+\./g, "");
    cleanDesc = cleanDesc.replace(/Height:\s*[^.]+\./g, "");
    cleanDesc = cleanDesc.replace(/\s{2,}/g, " ").trim();

    const mapsUrl = `https://www.google.com/maps?q=${tree.lat},${tree.lng}`;

    const infoLines: string[] = [];
    if (family) infoLines.push(`<div>Family: ${family}</div>`);
    if (location) infoLines.push(`<div>Location: ${location}</div>`);

    const shareId = `share-btn-${tree._id}`;

    const popup = new mapboxgl.Popup({ offset: 25, maxWidth: "300px", className: "tree-popup" }).setHTML(
      `<div style="font-family:system-ui,sans-serif;">
        <div style="font-weight:700;font-size:15px;color:#1a1a1a;margin-bottom:4px;">${displayName}</div>
        <div style="font-size:13px;color:#888;margin-bottom:6px;">${displaySpecies}</div>
        ${stats.length ? `<div style="font-size:12px;color:#aaa;margin-bottom:6px;border-top:1px solid #eee;padding-top:6px;display:flex;flex-direction:column;gap:2px;">${stats.map(s => `<span>${s}</span>`).join("")}</div>` : ""}
        ${infoLines.length ? `<div style="font-size:12px;color:#666;margin-bottom:6px;display:flex;flex-direction:column;gap:2px;">${infoLines.join("")}</div>` : ""}
        ${cleanDesc ? `<div style="font-size:13px;color:#444;line-height:1.5;margin-bottom:8px;">${cleanDesc}</div>` : ""}
        <div style="display:flex;gap:8px;">
          <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer"
             style="display:inline-flex;align-items:center;gap:4px;font-size:13px;font-weight:600;color:#fff;background:#27ae60;padding:8px 14px;border-radius:6px;text-decoration:none;flex:1;justify-content:center;box-sizing:border-box;">
            <svg style="width:14px;height:14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            Maps
          </a>
          <button id="${shareId}"
             style="display:inline-flex;align-items:center;gap:4px;font-size:13px;font-weight:600;color:#fff;background:#3498db;padding:8px 14px;border-radius:6px;border:none;cursor:pointer;flex:1;justify-content:center;box-sizing:border-box;">
            <svg style="width:14px;height:14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
            </svg>
            Share
          </button>
        </div>
      </div>`
    );

    popup.on("open", () => {
      const btn = document.getElementById(shareId);
      if (btn) {
        btn.onclick = () => {
          const url = `${window.location.origin}${window.location.pathname}?tree=${tree._id}`;
          navigator.clipboard.writeText(url).then(() => {
            btn.innerHTML = `<svg style="width:14px;height:14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Copied!`;
            btn.style.background = "#27ae60";
            setTimeout(() => {
              btn.innerHTML = `<svg style="width:14px;height:14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg> Share`;
              btn.style.background = "#3498db";
            }, 2000);
          });
        };
      }
    });

    const el = document.createElement("div");
    el.style.cssText =
      "width:28px;height:28px;font-size:24px;cursor:pointer;line-height:1;text-align:center";
    el.textContent = "\u{1F333}";

    const marker = new mapboxgl.Marker(el)
      .setLngLat([tree.lng, tree.lat])
      .setPopup(popup)
      .addTo(map.current);

    markersRef.current.set(tree._id, marker);
    return marker;
  }, []);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [-10, 30],
      zoom: 1.8,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-left");

    map.current.on("load", async () => {
      const res = await fetch("/api/trees");
      const trees: Tree[] = await res.json();
      trees.forEach(addMarker);

      // Deep link: ?tree=ID flies to that tree and opens its popup
      const params = new URLSearchParams(window.location.search);
      const treeId = params.get("tree");
      if (treeId) {
        const marker = markersRef.current.get(treeId);
        if (marker) {
          const lngLat = marker.getLngLat();
          map.current?.flyTo({ center: lngLat, zoom: 14, duration: 1500 });
          setTimeout(() => marker.togglePopup(), 1600);
        }
      }
    });
  }, [addMarker]);

  useEffect(() => {
    if (!map.current) return;

    const handleClick = (e: mapboxgl.MapMouseEvent) => {
      if (adding) {
        // Remove previous preview marker
        if (previewMarkerRef.current) {
          previewMarkerRef.current.remove();
          previewMarkerRef.current = null;
        }

        // Place a preview tree emoji at the clicked location
        const el = document.createElement("div");
        el.style.cssText =
          "width:28px;height:28px;font-size:24px;cursor:pointer;line-height:1;text-align:center;animation:dropIn 0.3s ease-out;";
        el.textContent = "\u{1F333}";

        const marker = new mapboxgl.Marker(el)
          .setLngLat([e.lngLat.lng, e.lngLat.lat])
          .addTo(map.current!);

        previewMarkerRef.current = marker;
        setClickLngLat([e.lngLat.lng, e.lngLat.lat]);
        setManualLat(e.lngLat.lat.toFixed(6));
        setManualLng(e.lngLat.lng.toFixed(6));
      }
    };

    map.current.on("click", handleClick);
    map.current.getCanvas().style.cursor = adding ? "crosshair" : "";

    return () => {
      map.current?.off("click", handleClick);
      if (map.current) map.current.getCanvas().style.cursor = "";
    };
  }, [adding]);

  const parseCoord = (s: string): number | null => {
    const trimmed = s.trim();
    if (!trimmed) return null;
    const n = Number(trimmed);
    return Number.isFinite(n) ? n : null;
  };

  const parsedLat = parseCoord(manualLat);
  const parsedLng = parseCoord(manualLng);
  const hasValidCoords =
    parsedLat !== null &&
    parsedLng !== null &&
    parsedLat >= -90 &&
    parsedLat <= 90 &&
    parsedLng >= -180 &&
    parsedLng <= 180;

  const handleSubmit = async () => {
    if (!hasValidCoords) return;

    const body: Record<string, unknown> = {
      lat: parsedLat,
      lng: parsedLng,
    };
    if (form.name.trim()) body.name = form.name.trim();
    if (form.species.trim()) body.species = form.species.trim();
    if (form.description.trim()) body.description = form.description.trim();

    const res = await fetch("/api/trees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      const tree = await res.json();
      // Remove the preview marker since addMarker will place a permanent one
      if (previewMarkerRef.current) {
        previewMarkerRef.current.remove();
        previewMarkerRef.current = null;
      }
      addMarker(tree);
      setAdding(false);
      setClickLngLat(null);
      setManualLat("");
      setManualLng("");
      setForm({ name: "", species: "", description: "" });
      setDetailsOpen(false);
    }
  };

  const placePreviewFromManual = () => {
    if (!hasValidCoords) return;

    // Remove previous preview marker
    if (previewMarkerRef.current) {
      previewMarkerRef.current.remove();
      previewMarkerRef.current = null;
    }

    // Place preview marker
    const el = document.createElement("div");
    el.style.cssText =
      "width:28px;height:28px;font-size:24px;cursor:pointer;line-height:1;text-align:center;animation:dropIn 0.3s ease-out;";
    el.textContent = "\u{1F333}";
    const marker = new mapboxgl.Marker(el)
      .setLngLat([parsedLng!, parsedLat!])
      .addTo(map.current!);
    previewMarkerRef.current = marker;

    // Fly to location
    map.current?.flyTo({ center: [parsedLng!, parsedLat!], zoom: Math.max(map.current.getZoom(), 10) });

    setClickLngLat([parsedLng!, parsedLat!]);
  };

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />

      {/* Top-right buttons */}
      <div style={{ position: "absolute", top: 10, right: 10, display: "flex", gap: 8, zIndex: 1 }}>
        <a
          href="https://www.s33d.life/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "8px 16px",
            background: "rgba(255,255,255,0.9)",
            color: "#444",
            border: "none",
            borderRadius: 6,
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,.25)",
            fontFamily: "system-ui",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Inspired by S33D.life
        </a>
        <button
          onClick={() => {
            if (previewMarkerRef.current) {
              previewMarkerRef.current.remove();
              previewMarkerRef.current = null;
            }
            setAdding(!adding);
            setClickLngLat(null);
            setManualLat("");
            setManualLng("");
            setForm({ name: "", species: "", description: "" });
            setDetailsOpen(false);
          }}
          style={{
            padding: "8px 16px",
            background: adding ? "#e74c3c" : "#27ae60",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,.25)",
            fontFamily: "system-ui",
          }}
        >
          {adding ? "Cancel" : "+ Add Tree"}
        </button>
      </div>

      {/* Add-tree form */}
      {adding && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#fff",
            borderRadius: "10px 10px 0 0",
            padding: "16px 16px 20px",
            boxShadow: "0 4px 20px rgba(0,0,0,.3)",
            zIndex: 2,
            fontFamily: "system-ui",
            width: "100%",
            maxWidth: 360,
            maxHeight: "70vh",
            overflowY: "auto",
            boxSizing: "border-box",
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: 10, fontSize: 15 }}>
            {clickLngLat
              ? `📍 New tree at ${parsedLat?.toFixed(4)}, ${parsedLng?.toFixed(4)}`
              : "📍 Place a new tree"}
          </div>

          <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <input
              type="text"
              inputMode="decimal"
              placeholder="Latitude (e.g. -33.8688)"
              value={manualLat}
              onChange={(e) => setManualLat(e.target.value)}
              style={{ ...inputStyle, marginBottom: 0, flex: 1 }}
            />
            <input
              type="text"
              inputMode="decimal"
              placeholder="Longitude (e.g. 151.2093)"
              value={manualLng}
              onChange={(e) => setManualLng(e.target.value)}
              style={{ ...inputStyle, marginBottom: 0, flex: 1 }}
            />
          </div>
          {manualLat && manualLng && !hasValidCoords && (
            <div style={{ color: "#e74c3c", fontSize: 12, marginBottom: 6 }}>
              Enter valid coordinates (lat: -90 to 90, lng: -180 to 180)
            </div>
          )}

          {/* Show "Set Location" button when coords typed manually but not yet placed */}
          {hasValidCoords && !clickLngLat && (
            <button
              onClick={placePreviewFromManual}
              style={{
                width: "100%",
                padding: 10,
                background: "#3498db",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
                marginBottom: 8,
              }}
            >
              📍 Set Location
            </button>
          )}

          {/* Also allow tapping the map */}
          {!clickLngLat && !hasValidCoords && (
            <div style={{ fontSize: 13, color: "#888", textAlign: "center", marginBottom: 8 }}>
              or tap the map to place a tree
            </div>
          )}

          {clickLngLat && (
            <>
              <button
                type="button"
                onClick={() => setDetailsOpen(!detailsOpen)}
                style={{
                  width: "100%",
                  padding: "8px 0",
                  background: "none",
                  border: "none",
                  borderTop: "1px solid #eee",
                  borderBottom: detailsOpen ? "1px solid #eee" : "none",
                  fontSize: 13,
                  color: "#666",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontFamily: "system-ui",
                  marginBottom: detailsOpen ? 8 : 12,
                }}
              >
                <span>Details (optional)</span>
                <span style={{ transform: detailsOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>▾</span>
              </button>

              {detailsOpen && (
                <div>
                  <input
                    placeholder="Name (e.g. General Sherman)"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                  />
                  <input
                    placeholder="Species (e.g. Giant Sequoia)"
                    value={form.species}
                    onChange={(e) => setForm({ ...form, species: e.target.value })}
                    style={inputStyle}
                  />
                  <input
                    placeholder="Short description"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    style={inputStyle}
                  />
                </div>
              )}

              <button
                onClick={handleSubmit}
                style={{
                  width: "100%",
                  padding: 10,
                  background: "#27ae60",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                🌳 Save Tree
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: 8,
  marginBottom: 8,
  border: "1px solid #ddd",
  borderRadius: 6,
  fontSize: 16,
  fontFamily: "system-ui",
  boxSizing: "border-box",
};
