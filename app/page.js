import { COLORS, BRAND, LOCATIONS, WDF } from "./_data";

const btn = (bg) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 999,
  padding: "12px 18px",
  fontWeight: 950,
  textDecoration: "none",
  color: "white",
  background: bg,
  boxShadow: "0 16px 40px rgba(0,0,0,0.10)"
});

const softCard = {
  border: `1px solid ${COLORS.line}`,
  borderRadius: 22,
  padding: 18,
  background: "rgba(255,255,255,0.85)",
  boxShadow: "0 18px 50px rgba(0,0,0,0.08)",
  backdropFilter: "blur(10px)"
};

export default function Home() {
  const union = LOCATIONS.find(l => l.slug === "union-city");
  const maps = union
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${union.addressLine1}, ${union.cityStateZip}`)}`
    : "#";

  return (
    <div>
      {/* HERO */}
      <section style={{ padding: "70px 16px 30px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 16, alignItems: "start" }}>
            <div>
              <div style={{
                display: "inline-flex",
                gap: 8,
                alignItems: "center",
                padding: "8px 12px",
                borderRadius: 999,
                background: "rgba(31,167,225,0.14)",
                color: COLORS.dark,
                fontWeight: 950,
                fontSize: 12
              }}>
                BAY AREA • MULTI-LOCATION
              </div>

              <h1 style={{ margin: "16px 0 10px", fontSize: 54, lineHeight: 1.03, letterSpacing: -1.5 }}>
                <span style={{ color: COLORS.orange, fontWeight: 1000 }}>Laundry</span>{" "}
                <span style={{ color: COLORS.green, fontWeight: 1000 }}>Day</span>{" "}
                <span style={{ fontWeight: 1000 }}>Laundromats</span>
              </h1>

              <p style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "rgba(0,0,0,0.70)", maxWidth: 640 }}>
                Premium clean stores, fast cycles, and simple Wash &amp; Fold (Union City only). Tap for directions in seconds.
              </p>

              <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap", gap: 10 }}>
                <a href="/locations" style={btn(COLORS.orange)}>Find Your Location</a>
                <a href="/wash-fold" style={btn(COLORS.green)}>Wash &amp; Fold</a>
                <a href={`tel:${BRAND.phoneTel}`} style={{ ...btn(COLORS.dark), boxShadow: "none" }}>
                  Call {BRAND.phoneDisplay}
                </a>
              </div>

              <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <div style={{ ...softCard, padding: 14 }}>
                  <div style={{ fontSize: 12, fontWeight: 950, color: "rgba(0,0,0,0.55)" }}>TRUSTED</div>
                  <div style={{ fontSize: 16, fontWeight: 950 }}>Clean • Safe • Reliable</div>
                </div>
                <div style={{ ...softCard, padding: 14 }}>
                  <div style={{ fontSize: 12, fontWeight: 950, color: "rgba(0,0,0,0.55)" }}>FAST</div>
                  <div style={{ fontSize: 16, fontWeight: 950 }}>Modern Machines</div>
                </div>
                <div style={{ ...softCard, padding: 14 }}>
                  <div style={{ fontSize: 12, fontWeight: 950, color: "rgba(0,0,0,0.55)" }}>EASY</div>
                  <div style={{ fontSize: 16, fontWeight: 950 }}>Tap to Directions</div>
                </div>
              </div>
            </div>

            {/* WDF highlight card */}
            <div style={softCard}>
              <div style={{ fontSize: 12, fontWeight: 950, color: "rgba(0,0,0,0.55)" }}>
                WASH, DRY &amp; FOLD • UNION CITY
              </div>
              <div style={{ marginTop: 8, fontSize: 30, fontWeight: 1000 }}>
                <span style={{ color: COLORS.green }}>{WDF.price}</span>{" "}
                <span style={{ fontSize: 13, fontWeight: 950, color: "rgba(0,0,0,0.55)" }}>• {WDF.minimum}</span>
              </div>
              <div style={{ marginTop: 8, fontWeight: 800, color: "rgba(0,0,0,0.65)" }}>
                {WDF.note}
              </div>

              {union ? (
                <div style={{ marginTop: 14, borderTop: `1px solid ${COLORS.line}`, paddingTop: 14 }}>
                  <div style={{ fontWeight: 950 }}>{union.store}</div>
                  <div style={{ fontWeight: 800, color: "rgba(0,0,0,0.65)" }}>
                    {union.addressLine1}, {union.cityStateZip}
                  </div>
                  <div style={{ marginTop: 6, fontWeight: 900, color: "rgba(0,0,0,0.60)" }}>{union.hours}</div>

                  <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <a href={maps} target="_blank" rel="noreferrer" style={btn(COLORS.green)}>Directions</a>
                    <a href={`tel:${BRAND.phoneTel}`} style={btn(COLORS.orange)}>Call</a>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Next sections will go here */}
      <section style={{ padding: "10px 16px 56px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ margin: 0, fontSize: 30, letterSpacing: -0.6 }}>Find Your Laundry Day</h2>
          <p style={{ marginTop: 8, fontWeight: 700, color: "rgba(0,0,0,0.65)" }}>
            Select a location for directions in one tap.
          </p>
        </div>
      </section>
    </div>
  );
}
