import { COLORS, WDF, LOCATIONS, BRAND } from "../_data";

const box = {
  border: `1px solid ${COLORS.line}`,
  borderRadius: 18,
  padding: 18,
  background: "white",
  boxShadow: "0 10px 30px rgba(0,0,0,0.06)"
};

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

export default function WashFoldPage() {
  const union = LOCATIONS.find((l) => l.slug === "union-city");
  const maps = union
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${union.addressLine1}, ${union.cityStateZip}`)}`
    : "#";

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 16px" }}>
      <h1 style={{ margin: 0, fontSize: 34, letterSpacing: -0.7 }}>Wash, Dry &amp; Fold</h1>
      <p style={{ marginTop: 8, color: "rgba(0,0,0,0.65)", fontWeight: 650 }}>{WDF.note}</p>

      <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
        <div style={box}>
          <div style={{ fontSize: 13, fontWeight: 950, color: "rgba(0,0,0,0.6)" }}>PRICING</div>
          <div style={{ marginTop: 8, fontSize: 28, fontWeight: 950 }}>
            <span style={{ color: COLORS.green }}>{WDF.price}</span>{" "}
            <span style={{ fontSize: 14, fontWeight: 900, color: "rgba(0,0,0,0.55)" }}>• {WDF.minimum}</span>
          </div>

          <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 8 }}>
            <a href={`tel:${BRAND.phoneTel}`} style={btn(COLORS.orange)}>Call</a>
            <a href={maps} target="_blank" rel="noreferrer" style={btn(COLORS.green)}>Union City Directions</a>
          </div>

          {union ? (
            <div style={{ marginTop: 12, fontWeight: 900, color: "rgba(0,0,0,0.7)" }}>
              <div>{union.store}</div>
              <div>{union.addressLine1}</div>
              <div>{union.cityStateZip}</div>
              <div style={{ marginTop: 6, color: "rgba(0,0,0,0.55)" }}>{union.hours}</div>
            </div>
          ) : null}
        </div>

        <div style={box}>
          <div style={{ fontSize: 13, fontWeight: 950, color: "rgba(0,0,0,0.6)" }}>WEEKLY HOURS</div>
          <div style={{ marginTop: 10, overflow: "hidden", borderRadius: 14, border: `1px solid ${COLORS.line}` }}>
            {WDF.schedule.map((row) => (
              <div key={row.day} style={{ display: "flex", justifyContent: "space-between", padding: "10px 12px", borderBottom: `1px solid ${COLORS.line}`, fontWeight: 900 }}>
                <span>{row.day}</span>
                <span style={{ color: "rgba(0,0,0,0.65)" }}>{row.hours}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 10, fontSize: 13, fontWeight: 800, color: "rgba(0,0,0,0.6)" }}>
            Hours may change weekly. Call to confirm before drop-off.
          </div>
        </div>
      </div>
    </div>
  );
}
