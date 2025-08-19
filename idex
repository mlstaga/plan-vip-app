
import { useState } from "react";

export default function Home() {
  const tables = [
    { id: "VIP 1", x: 50, y: 100 },
    { id: "VIP 2", x: 150, y: 100 },
    { id: "VIP 3", x: 250, y: 100 },
    { id: "ULTRA VIP", x: 350, y: 100 },
    { id: "Table 1", x: 50, y: 200 },
    { id: "Table 2", x: 150, y: 200 },
    { id: "Table 3", x: 250, y: 200 },
    { id: "Table 4", x: 350, y: 200 },
    { id: "Table 5", x: 50, y: 300 },
    { id: "Table 6", x: 150, y: 300 },
    { id: "Table 7", x: 250, y: 300 },
    { id: "Table 8", x: 350, y: 300 },
    { id: "Table 9", x: 50, y: 400 },
    { id: "Table 10", x: 150, y: 400 },
    { id: "Table 11", x: 250, y: 400 },
    { id: "Table 12", x: 350, y: 400 },
    { id: "Table 13", x: 450, y: 400 },
  ];

  const [status, setStatus] = useState({}); // {id: {reserved: bool, name: string, people: string}}

  const toggleTable = (id) => {
    const cur = status[id];
    if (!cur || !cur.reserved) {
      const name = prompt("Nom du client ?");
      if (name === null) return;
      const people = prompt("Nombre de personnes ?");
      if (people === null) return;
      setStatus((s) => ({ ...s, [id]: { reserved: true, name, people } }));
    } else {
      // Unreserve
      setStatus((s) => ({ ...s, [id]: { reserved: false, name: "", people: "" } }));
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Plan VIP — Réservations</h1>
      <div style={styles.legend}>
        <span style={{...styles.badge, background: "#4ade80"}} /> Dispo
        <span style={{width: 16}} />
        <span style={{...styles.badge, background: "#f87171"}} /> Réservé
      </div>
      <div style={styles.stage}>
        <img src="/plan-salle.jpg" alt="Plan de salle" style={styles.plan} />
        {tables.map((t) => (
          <div
            key={t.id}
            onClick={() => toggleTable(t.id)}
            title={t.id}
            style={{
              ...styles.table,
              top: t.y,
              left: t.x,
              background: status[t.id]?.reserved ? "#f87171" : "#4ade80",
            }}
          >
            <div style={styles.tableLabel}>{t.id}</div>
            {status[t.id]?.reserved && (
              <div style={styles.tooltip}>
                {status[t.id].name} ({status[t.id].people})
              </div>
            )}
          </div>
        ))}
      </div>
      <p style={styles.hint}>Astuce : reclique sur une table pour la remettre en « Dispo ».</p>
    </div>
  );
}

const styles = {
  page: { fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial", padding: 20 },
  title: { margin: "0 0 10px 0" },
  legend: { display: "flex", alignItems: "center", gap: 6, marginBottom: 10 },
  badge: { display: "inline-block", width: 16, height: 16, borderRadius: 9999, border: "1px solid #00000022" },
  stage: { position: "relative", width: 700, height: 500, border: "1px solid #ddd", borderRadius: 8, overflow: "hidden", background: "#f6f6f6" },
  plan: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.95 },
  table: {
    position: "absolute",
    width: 70,
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    fontWeight: 700,
    cursor: "pointer",
    borderRadius: 9999,
    border: "1px solid #00000033",
    userSelect: "none",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
  },
  tableLabel: { padding: 6, textAlign: "center" },
  tooltip: {
    position: "absolute",
    top: 76,
    left: -4,
    background: "white",
    border: "1px solid #e5e7eb",
    borderRadius: 6,
    padding: "4px 6px",
    fontSize: 11,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    whiteSpace: "nowrap",
  },
  hint: { fontSize: 12, color: "#666", marginTop: 10 }
};
