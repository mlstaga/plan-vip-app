import { useState } from "react";

export default function Home() {
  const tables = [
    { id: "VIP 1", x: 150, y: 120 },
    { id: "VIP 2", x: 150, y: 380 },
    { id: "VIP 3", x: 150, y: 850 },
    { id: "ULTRA VIP", x: 60, y: 370 },

    { id: "Table 1", x: 300, y: 930 },
    { id: "Table 2", x: 300, y: 740 },
    { id: "Table 3", x: 300, y: 520 },

    { id: "Table 4", x: 650, y: 930 },
    { id: "Table 5", x: 520, y: 650 },
    { id: "Table 6", x: 650, y: 200 },
    { id: "Table 7", x: 780, y: 930 },
    { id: "Table 8", x: 780, y: 650 },
    { id: "Table 9", x: 420, y: 200 },
    { id: "Table 10", x: 780, y: 200 },
    { id: "Table 11", x: 920, y: 200 },
    { id: "Table 12", x: 1100, y: 450 },
    { id: "Table 13", x: 1100, y: 800 },
  ];

  const [status, setStatus] = useState({});

  const toggleTable = (id) => {
    const cur = status[id];
    if (!cur || !cur.reserved) {
      const name = prompt("Nom du client ?");
      if (name === null) return;
      const people = prompt("Nombre de personnes ?");
      if (people === null) return;
      setStatus((s) => ({ ...s, [id]: { reserved: true, name, people } }));
    } else {
      setStatus((s) => ({ ...s, [id]: { reserved: false, name: "", people: "" } }));
    }
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>Plan VIP — Réservations</h1>
      <div style={{ display: "flex", gap: 20, marginBottom: 10 }}>
        <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ width: 14, height: 14, borderRadius: "50%", background: "#4ade80", border: "1px solid #333" }} />
          Dispo
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ width: 14, height: 14, borderRadius: "50%", background: "#f87171", border: "1px solid #333" }} />
          Réservé
        </span>
      </div>

      <div style={{ position: "relative", width: 1284, height: 1035, border: "1px solid #ccc" }}>
        <img
          src="/plan-salle.jpg"
          alt="Plan de salle"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }}
        />
        {tables.map((t) => (
          <div
            key={t.id}
            onClick={() => toggleTable(t.id)}
            style={{
              position: "absolute",
              top: t.y,
              left: t.x,
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: status[t.id]?.reserved ? "#f87171" : "#4ade80",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 9,
              fontWeight: "bold",
              cursor: "pointer",
              border: "1px solid #333",
              transform: "translate(-50%, -50%)", // centre sur les coords
            }}
          >
            {t.id}
          </div>
        ))}
      </div>

      <p style={{ fontSize: 12, color: "#666", marginTop: 10 }}>
        Astuce : reclique sur une table pour la remettre en « Dispo ».
      </p>
    </div>
  );
}
