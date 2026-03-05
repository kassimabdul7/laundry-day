import { COLORS, BRAND } from "../_data";

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

export default function ContactPage() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 16px" }}>
      <h1 style={{ margin: 0, fontSize: 34, letterSpacing: -0.7 }}>Contact</h1>
      <p style={{ marginTop: 8, color: "rgba(0,0,0,0.65)", fontWeight: 650 }}>
        Questions about a location or Wash &amp; Fold? Call us.
      </p>

      <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
        <div style={box}>
          <div style={{ fontSize: 13, fontWeight: 950, color: "rgba(0,0,0,0.6)" }}>PHONE</div>
          <a href={`tel:${BRAND.phoneTel}`} style={{ display: "block", marginTop: 10, fontSize: 24, fontWeight: 950, color: COLORS.dark, textDecoration: "none" }}>
            {BRAND.phoneDisplay}
          </a>

          <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 8 }}>
            <a href={`tel:${BRAND.phoneTel}`} style={btn(COLORS.orange)}>Call Now</a>
            <a href="/locations" style={btn(COLORS.green)}>Find a Location</a>
          </div>
        </div>

        <div style={box}>
          <div style={{ fontSize: 13, fontWeight: 950, color: "rgba(0,0,0,0.6)" }}>WASH &amp; FOLD</div>
          <div style={{ marginTop: 10, fontWeight: 900, color: "rgba(0,0,0,0.7)" }}>
            Wash &amp; Fold is available at Union City only.
          </div>
          <a href="/wash-fold" style={{ display: "inline-block", marginTop: 12, fontWeight: 950, color: COLORS.dark }}>
            View WDF hours →
          </a>
        </div>
      </div>
    </div>
  );
}
