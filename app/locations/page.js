import { COLORS, LOCATIONS } from "../_data";

const card = {
  border: `1px solid ${COLORS.line}`,
  borderRadius: 18,
  padding: 16,
  background: "white",
  boxShadow: "0 10px 30px rgba(0,0,0,0.06)"
};

const pill = (text, bg, color) => ({
  display: "inline-flex",
  alignItems: "center",
  borderRadius: 999,
  padding: "6px 10px",
  fontSize: 12,
  fontWeight: 950,
  background: bg,
  color
});

const btn = (bg) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 999,
  padding: "10px 14px",
  fontWeight: 950,
  textDecoration: "none",
  color: "white",
  background: bg
});

export default function LocationsPage() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 16px" }}>
      <h1 style={{ margin: 0, fontSize: 34, letterSpacing: -0.7 }}>Locations</h1>
      <p style={{ marginTop: 8, color: "rgba(0,0,0,0.65)", fontWeight: 650 }}>
        Each store keeps its original name for local recognition: El Mercado Laundry, Plaza Speed Wash, Super Wash &amp; Dry, and Walnut Plaza Launderland.
      </p>

      <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
        {LOCATIONS.map((l) => {
          const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${l.addressLine1}, ${l.cityStateZip}`)}`;
          const closed = l.hours.toLowerCase().includes("closed");

          return (
            <div key={l.slug} style={card}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 950 }}>{l.city}</div>
                  <div style={{ fontSize: 13, fontWeight: 900, color: "rgba(0,0,0,0.6)" }}>{l.store}</div>
                </div>
                <div style={pill(closed ? "TEMP CLOSED" : "OPEN HOURS", closed ? "rgba(245,130,32,0.14)" : "rgba(108,192,74,0.14)", closed ? COLORS.orange : COLORS.green)}>
                  {closed ? "TEMP CLOSED" : "OPEN HOURS"}
                </div>
              </div>

              <div style={{ marginTop: 10, fontSize: 14, fontWeight: 700, color: "rgba(0,0,0,0.75)" }}>
                {l.addressLine1}<br />{l.cityStateZip}
              </div>

              <div style={{ marginTop: 6, fontSize: 13, fontWeight: 800, color: "rgba(0,0,0,0.6)" }}>{l.hours}</div>

              {l.note ? (
                <div style={{ marginTop: 10, borderRadius: 12, padding: 10, background: "rgba(245,130,32,0.10)", fontWeight: 800 }}>
                  {l.note}
                </div>
              ) : null}

              <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 8 }}>
                <a href={`/locations/${l.slug}`} style={{ ...btn(COLORS.dark), background: "white", color: COLORS.dark, border: `1px solid ${COLORS.line}` }}>Details</a>
                <a href={maps} target="_blank" rel="noreferrer" style={btn(COLORS.green)}>Directions</a>
              </div>

              {l.wdf ? (
                <div style={{ marginTop: 12, fontWeight: 900, color: COLORS.dark }}>
                  Wash &amp; Fold available here → <a href="/wash-fold" style={{ color: COLORS.dark }}>View hours</a>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
