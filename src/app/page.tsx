"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import mapboxgl from "mapbox-gl";

interface Tree {
  _id: string;
  name: string;
  species: string;
  lat: number;
  lng: number;
  height?: number | null;
  circumference?: number | null;
  description: string;
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export default function Home() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [adding, setAdding] = useState(false);
  const [clickLngLat, setClickLngLat] = useState<[number, number] | null>(
    null
  );
  const [form, setForm] = useState({
    name: "",
    species: "",
    description: "",
  });

  const addMarker = useCallback((tree: Tree) => {
    if (!map.current) return;

    const stats: string[] = [];
    if (tree.height) stats.push(`${tree.height}m tall`);
    if (tree.circumference) stats.push(`${tree.circumference}m circumference`);

    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<div style="font-family:system-ui;max-width:220px">
        <strong style="font-size:14px">${tree.name}</strong>
        <div style="color:#666;font-size:12px;margin:2px 0">${tree.species}</div>
        ${stats.length ? `<div style="font-size:12px;color:#888">${stats.join(" · ")}</div>` : ""}
        <div style="font-size:13px;margin-top:4px">${tree.description}</div>
      </div>`
    );

    const el = document.createElement("div");
    el.style.cssText =
      "width:28px;height:28px;font-size:24px;cursor:pointer;line-height:1;text-align:center";
    el.textContent = "\u{1F333}";

    const marker = new mapboxgl.Marker(el)
      .setLngLat([tree.lng, tree.lat])
      .setPopup(popup)
      .addTo(map.current);

    markersRef.current.push(marker);
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
    });
  }, [addMarker]);

  useEffect(() => {
    if (!map.current) return;

    const handleClick = (e: mapboxgl.MapMouseEvent) => {
      if (adding) {
        setClickLngLat([e.lngLat.lng, e.lngLat.lat]);
      }
    };

    map.current.on("click", handleClick);
    map.current.getCanvas().style.cursor = adding ? "crosshair" : "";

    return () => {
      map.current?.off("click", handleClick);
      if (map.current) map.current.getCanvas().style.cursor = "";
    };
  }, [adding]);

  const handleSubmit = async () => {
    if (!clickLngLat || !form.name || !form.species || !form.description)
      return;

    const body = {
      name: form.name,
      species: form.species,
      lat: clickLngLat[1],
      lng: clickLngLat[0],
      description: form.description,
    };

    const res = await fetch("/api/trees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      const tree = await res.json();
      addMarker(tree);
      setAdding(false);
      setClickLngLat(null);
      setForm({ name: "", species: "", description: "" });
    }
  };

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />

      {/* Add tree button */}
      <button
        onClick={() => {
          setAdding(!adding);
          setClickLngLat(null);
          setForm({ name: "", species: "", description: "" });
        }}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
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
          zIndex: 1,
        }}
      >
        {adding ? "Cancel" : "+ Add Tree"}
      </button>

      {/* Add-tree form after clicking map */}
      {adding && clickLngLat && (
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#fff",
            borderRadius: 10,
            padding: 20,
            boxShadow: "0 4px 20px rgba(0,0,0,.3)",
            zIndex: 2,
            fontFamily: "system-ui",
            width: 320,
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: 12, fontSize: 15 }}>
            New tree at {clickLngLat[1].toFixed(4)},{" "}
            {clickLngLat[0].toFixed(4)}
          </div>
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
          <button
            onClick={handleSubmit}
            disabled={!form.name || !form.species || !form.description}
            style={{
              width: "100%",
              padding: 10,
              background:
                form.name && form.species && form.description
                  ? "#27ae60"
                  : "#ccc",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              fontSize: 14,
              fontWeight: 600,
              cursor:
                form.name && form.species && form.description
                  ? "pointer"
                  : "default",
            }}
          >
            Save Tree
          </button>
        </div>
      )}

      {/* Instruction banner when adding */}
      {adding && !clickLngLat && (
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0,0,0,.75)",
            color: "#fff",
            padding: "10px 24px",
            borderRadius: 8,
            fontSize: 14,
            fontFamily: "system-ui",
            zIndex: 2,
          }}
        >
          Click on the map to place a tree
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
  fontSize: 14,
  fontFamily: "system-ui",
  boxSizing: "border-box",
};
