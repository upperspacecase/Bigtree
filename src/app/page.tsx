"use client";

import { useEffect, useRef, useState } from "react";
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

/** Extract lat/lng from various Google Maps URL formats */
function parseMapsUrl(url: string): { lat: number; lng: number } | null {
  try {
    // Match @lat,lng or ?q=lat,lng or /lat,lng patterns
    const patterns = [
      /@(-?\d+\.?\d*),(-?\d+\.?\d*)/,           // @lat,lng
      /[?&]q=(-?\d+\.?\d*),(-?\d+\.?\d*)/,       // ?q=lat,lng
      /\/(-?\d+\.?\d*),(-?\d+\.?\d*)/,            // /lat,lng in path
    ];
    for (const re of patterns) {
      const m = url.match(re);
      if (m) {
        const lat = parseFloat(m[1]);
        const lng = parseFloat(m[2]);
        if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
          return { lat, lng };
        }
      }
    }
  } catch {
    // ignore
  }
  return null;
}

function buildPopupHTML(tree: Tree): string {
  const displayName = tree.name || "Unnamed Tree";
  const displaySpecies = tree.species || "Unknown species";
  const stats: string[] = [];
  if (tree.height) stats.push(`${tree.height}m tall`);
  if (tree.circumference) stats.push(`${tree.circumference}m circumference`);

  const desc = tree.description || "";
  let family = "";
  let location = "";
  let cleanDesc = desc;

  const familyMatch = cleanDesc.match(/Family:\s*([^.]+)\./);
  if (familyMatch) {
    family = familyMatch[1].trim();
    cleanDesc = cleanDesc.replace(familyMatch[0], "");
  }
  // Location contains decimal coords, so match until the sentence-ending ". " or end of string
  const locationMatch = cleanDesc.match(/Location:\s*(.+?)(?:\.\s*$|\.$|\.\s)/);
  if (locationMatch) {
    location = locationMatch[1].trim();
    cleanDesc = cleanDesc.replace(locationMatch[0], "");
  }
  // Remove "Recorded in the Tallo global tree database." and similar
  cleanDesc = cleanDesc.replace(/Recorded in the Tallo global tree database\./gi, "");
  cleanDesc = cleanDesc.replace(/Trunk diameter:\s*[^.]+\./g, "");
  cleanDesc = cleanDesc.replace(/Height:\s*[^.]+\./g, "");
  cleanDesc = cleanDesc.replace(/\s{2,}/g, " ").trim();

  const mapsUrl = `https://www.google.com/maps?q=${tree.lat},${tree.lng}`;
  const infoLines: string[] = [];
  if (family) infoLines.push(`<div>Family: ${family}</div>`);
  if (location) infoLines.push(`<div>Location: ${location}</div>`);

  const shareId = `share-btn-${tree._id}`;

  return `<div style="font-family:system-ui,sans-serif;">
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
         style="display:inline-flex;align-items:center;gap:4px;font-size:13px;font-weight:600;color:#fff;background:#3498db;padding:8px 14px;border-radius:6px;border:none;cursor:pointer;flex:1;justify-content:center;box-sizing:border-box;"
         onclick="(function(btn){var url=window.location.origin+window.location.pathname+'?tree=${tree._id}';navigator.clipboard.writeText(url).then(function(){btn.innerHTML='<svg style=\\'width:14px;height:14px;\\' fill=\\'none\\' stroke=\\'currentColor\\' viewBox=\\'0 0 24 24\\'><path stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'2\\' d=\\'M5 13l4 4L19 7\\'/></svg> Copied!';btn.style.background='#27ae60';setTimeout(function(){btn.innerHTML='<svg style=\\'width:14px;height:14px;\\' fill=\\'none\\' stroke=\\'currentColor\\' viewBox=\\'0 0 24 24\\'><path stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'2\\' d=\\'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z\\'/></svg> Share tree';btn.style.background='#3498db';},2000);});})(this)">
        <svg style="width:14px;height:14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
        </svg>
        Share tree
      </button>
    </div>
  </div>`;
}

function treesToGeoJSON(trees: Tree[]): GeoJSON.FeatureCollection {
  return {
    type: "FeatureCollection",
    features: trees.map((t) => ({
      type: "Feature" as const,
      geometry: { type: "Point" as const, coordinates: [t.lng, t.lat] },
      properties: {
        _id: t._id,
        name: t.name || "",
        species: t.species || "",
        height: t.height ?? null,
        circumference: t.circumference ?? null,
        description: t.description || "",
        lat: t.lat,
        lng: t.lng,
      },
    })),
  };
}

export default function Home() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const treesRef = useRef<Tree[]>([]);
  const popupRef = useRef<mapboxgl.Popup | null>(null);
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
  const [linkLoading, setLinkLoading] = useState(false);
  const [linkError, setLinkError] = useState("");

  const showPopupForTree = (tree: Tree) => {
    if (!map.current) return;
    if (popupRef.current) popupRef.current.remove();

    const popup = new mapboxgl.Popup({ offset: 25, maxWidth: "300px", className: "tree-popup" })
      .setLngLat([tree.lng, tree.lat])
      .setHTML(buildPopupHTML(tree))
      .addTo(map.current);

    popupRef.current = popup;
  };

  const addTreeToSource = (tree: Tree) => {
    treesRef.current.push(tree);
    const source = map.current?.getSource("trees") as mapboxgl.GeoJSONSource | undefined;
    if (source) {
      source.setData(treesToGeoJSON(treesRef.current));
    }
  };

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
      const m = map.current!;

      // Create a canvas-based tree icon for the symbol layer
      const size = 40;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d")!;
      ctx.font = `${size - 4}px serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("\u{1F333}", size / 2, size / 2);
      const imageData = ctx.getImageData(0, 0, size, size);
      m.addImage("tree-icon", imageData);

      // Fetch trees and add as GeoJSON source
      const res = await fetch("/api/trees");
      const trees: Tree[] = await res.json();
      treesRef.current = trees;

      m.addSource("trees", {
        type: "geojson",
        data: treesToGeoJSON(trees),
      });

      m.addLayer({
        id: "trees-layer",
        type: "symbol",
        source: "trees",
        layout: {
          "icon-image": "tree-icon",
          "icon-size": 0.7,
          "icon-allow-overlap": true,
        },
      });

      // Click on a tree feature -> show popup
      m.on("click", "trees-layer", (e) => {
        if (!e.features?.length) return;
        const props = e.features[0].properties!;
        const tree: Tree = {
          _id: props._id,
          name: props.name || undefined,
          species: props.species || undefined,
          lat: props.lat,
          lng: props.lng,
          height: props.height,
          circumference: props.circumference,
          description: props.description || undefined,
        };
        showPopupForTree(tree);
      });

      // Pointer cursor on hover
      m.on("mouseenter", "trees-layer", () => {
        m.getCanvas().style.cursor = "pointer";
      });
      m.on("mouseleave", "trees-layer", () => {
        m.getCanvas().style.cursor = "";
      });

      // Deep link: ?tree=ID
      const params = new URLSearchParams(window.location.search);
      const treeId = params.get("tree");
      if (treeId) {
        const target = trees.find((t) => t._id === treeId);
        if (target) {
          m.flyTo({ center: [target.lng, target.lat], zoom: 14, duration: 1500 });
          setTimeout(() => showPopupForTree(target), 1600);
        }
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!map.current) return;

    const handleClick = (e: mapboxgl.MapMouseEvent) => {
      if (adding) {
        // Don't place a preview if they clicked on an existing tree
        const features = map.current!.queryRenderedFeatures(e.point, { layers: ["trees-layer"] });
        if (features.length) return;

        if (previewMarkerRef.current) {
          previewMarkerRef.current.remove();
          previewMarkerRef.current = null;
        }

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
      if (previewMarkerRef.current) {
        previewMarkerRef.current.remove();
        previewMarkerRef.current = null;
      }
      addTreeToSource(tree);
      setAdding(false);
      setClickLngLat(null);
      setManualLat("");
      setManualLng("");
      setForm({ name: "", species: "", description: "" });
      setDetailsOpen(false);
    }
  };

  const placePreviewAt = (lat: number, lng: number) => {
    if (!map.current) return;

    if (previewMarkerRef.current) {
      previewMarkerRef.current.remove();
      previewMarkerRef.current = null;
    }

    const el = document.createElement("div");
    el.style.cssText =
      "width:28px;height:28px;font-size:24px;cursor:pointer;line-height:1;text-align:center;animation:dropIn 0.3s ease-out;";
    el.textContent = "\u{1F333}";
    const marker = new mapboxgl.Marker(el)
      .setLngLat([lng, lat])
      .addTo(map.current);
    previewMarkerRef.current = marker;

    map.current.flyTo({ center: [lng, lat], zoom: Math.max(map.current.getZoom(), 10) });
    setClickLngLat([lng, lat]);
  };

  const placePreviewFromManual = () => {
    if (!hasValidCoords) return;
    placePreviewAt(parsedLat!, parsedLng!);
  };

  const applyCoords = (lat: number, lng: number) => {
    setManualLat(lat.toString());
    setManualLng(lng.toString());
    setLinkError("");
    placePreviewAt(lat, lng);
  };

  const handleMapsLink = async (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    setLinkError("");

    // Try parsing coords directly from the URL first
    const direct = parseMapsUrl(trimmed);
    if (direct) {
      applyCoords(direct.lat, direct.lng);
      return;
    }

    // If it looks like a short/share link, resolve it server-side
    if (trimmed.includes("goo.gl/") || trimmed.includes("maps.app") || trimmed.includes("google.com/maps")) {
      setLinkLoading(true);
      try {
        const res = await fetch("/api/resolve-url", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: trimmed }),
        });
        if (res.ok) {
          const { resolved } = await res.json();
          const result = parseMapsUrl(resolved);
          if (result) {
            applyCoords(result.lat, result.lng);
          } else {
            setLinkError("Could not extract coordinates from this link");
          }
        } else {
          setLinkError("Could not resolve this link");
        }
      } catch {
        setLinkError("Could not resolve this link");
      } finally {
        setLinkLoading(false);
      }
    }
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

          <input
            type="text"
            placeholder={linkLoading ? "Resolving link..." : "Paste Google Maps link"}
            disabled={linkLoading}
            onPaste={(e) => {
              const pasted = e.clipboardData.getData("text");
              if (pasted) {
                e.preventDefault();
                (e.target as HTMLInputElement).value = "";
                handleMapsLink(pasted);
              }
            }}
            onChange={(e) => {
              const val = e.target.value;
              if (val) {
                handleMapsLink(val);
                e.target.value = "";
              }
            }}
            style={{ ...inputStyle, marginBottom: 8, opacity: linkLoading ? 0.6 : 1 }}
          />
          {linkError && (
            <div style={{ color: "#e74c3c", fontSize: 12, marginBottom: 6, marginTop: -4 }}>
              {linkError}
            </div>
          )}

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

          {!clickLngLat && !hasValidCoords && (
            <div style={{ fontSize: 13, color: "#888", textAlign: "center", marginBottom: 8 }}>
              or tap the map to place a tree
            </div>
          )}
          {!clickLngLat && hasValidCoords && !manualLat && !manualLng && (
            <div style={{ fontSize: 13, color: "#888", textAlign: "center", marginBottom: 8 }}>
              or enter coordinates manually
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
