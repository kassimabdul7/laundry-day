import { COLORS, LOCATIONS, BRAND } from "../../_data";

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

export default function LocationDetail({ params }) {
  const loc = LOCATIONS.find((l) => l.slug === params.slug);

  if (!loc) {
    return (
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 16px" }}>
        <h1 style={{ margin: 0 }}>Location not found</h1>
        <p><a href="/locations">Back to locations</a></p>
      </div>
    );
  }

  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${loc.addressLine1}, ${loc.cityStateZip}`)}`;
  const closed = loc.hours.toLowerCase().includes("closed");

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 16px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 10 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 34, letterSpacing: -0.7 }}>{loc.store}</h1>
          <div style={{ marginTop: 6, fontWeight: 900, color: "rgba(0,0,0,0.65)" }}>
            Laundry Day Laundromats • {loc.city}
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <a href={`tel:${BRAND.phoneTel}`} style={btn(COLORS.orange)}>Call</a>
          <a href={maps} target="_blank" rel="noreferrer" style={btn(COLORS.green)}>Directions</a>
        </div>
      </div>

      <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
        <div style={box}>
          <div style={{ fontSize: 13, fontWeight: 950, color: "rgba(0,0,0,0.6)" }}>ADDRESS</div>
          <div style={{ marginTop: 8, fontSize: 16, fontWeight: 900 }}>
            {loc.addressLine1}<br />{loc.cityStateZip}
          </div>

          <div style={{ marginTop: 16, fontSize: 13, fontWeight: 950, color: "rgba(0,0,0,0.6)" }}>HOURS</div>
          <div style={{ marginTop: 8, fontSize: 15, fontWeight: 950, color: closed ? COLORS.orange : COLORS.green }}>
            {loc.hours}
          </div>

          {loc.note ? (
            <div style={{ marginTop: 14, borderRadius: 12, padding: 12, background: "rgba(245,130,32,0.10)", fontWeight: 900 }}>
              {loc.note}
            </div>
          ) : null}
        </div>

        <div style={box}>
          <div style={{ fontSize: 13, fontWeight: 950, color: "rgba(0,0,0,0.6)" }}>QUICK LINKS</div>
          <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 8 }}>
            <a href="/locations" style={{ ...btn(COLORS.dark), background: "white", color: COLORS.dark, border: `1px solid ${COLORS.line}` }}>
              All locations
            </a>
            <a href="/wash-fold" style={btn(COLORS.green)}>Wash &amp; Fold</a>
            <a href="/contact" style={btn(COLORS.orange)}>Contact</a>
          </div>

          {loc.wdf ? (
            <div style={{ marginTop: 14, borderRadius: 12, padding: 12, background: "rgba(108,192,74,0.12)", fontWeight: 900 }}>
              Wash &amp; Fold is available at this location (Union City).
            </div>
          ) : (
            <div style={{ marginTop: 14, borderRadius: 12, padding: 12, background: "rgba(31,167,225,0.10)", fontWeight: 900 }}>
              Wash &amp; Fold is available at Union City only.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
