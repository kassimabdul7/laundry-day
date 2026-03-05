const COLORS = {
  orange: "#F58220",
  green: "#6CC04A",
  blue: "#1FA7E1",
  dark: "#0E6BA8",
  ink: "#333333",
  line: "#E8E8E8",
  bg: "#FFFFFF"
};

const PHONE_TEL = "+15104022637";
const PHONE_DISPLAY = "(510) 402-2637";

const LOCATIONS = [
  {
    city: "Union City",
    store: "El Mercado Laundry",
    address: "34300 Alvarado-Niles Rd, Union City, CA 94587",
    hours: "Mon–Sun: 6am – 10pm",
    slug: "union-city"
  },
  {
    city: "Pleasanton",
    store: "Plaza Speed Wash",
    address: "4241 First St, Pleasanton, CA 94566",
    hours: "Mon–Sun: 7am – 10pm",
    slug: "pleasanton"
  },
  {
    city: "Newark",
    store: "Super Wash & Dry",
    address: "35118 Newark Blvd, Newark, CA 94560",
    hours: "Mon–Sun: 6am – 10pm",
    slug: "newark"
  },
  {
    city: "Fremont",
    store: "Walnut Plaza Launderland",
    address: "3185 Walnut Ave, Fremont, CA 94538",
    hours: "Temporarily Closed (Due to Fire)",
    note: "Wash, Dry, Fold moved to Union City.",
    slug: "fremont"
  }
];

function pill(text, bg, color) {
  return {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 999,
    padding: "6px 10px",
    fontSize: 12,
    fontWeight: 800,
    background: bg,
    color
  };
}

function buttonStyle(bg) {
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    padding: "12px 16px",
    fontWeight: 900,
    textDecoration: "none",
    color: "white",
    background: bg,
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
  };
}

export default function Home() {
  return (
    <div style={{ background: COLORS.bg, color: COLORS.ink }}>
      {/* Header */}
      <header style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(10px)", borderBottom: `1px solid ${COLORS.line}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src="/publiclogo.png" alt="Laundry Day" style={{ height: 34, width: "auto" }} />
            <div style={{ fontWeight: 900 }}>
              <span style={{ color: COLORS.orange }}>Laundry</span>{" "}
              <span style={{ color: COLORS.green }}>Day</span>{" "}
              <span style={{ color: "rgba(0,0,0,0.55)", fontSize: 13 }}>Laundromats</span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a href={`tel:${PHONE_TEL}`} style={buttonStyle(COLORS.orange)}>Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section style={{ borderBottom: `1px solid ${COLORS.line}`, background: `linear-gradient(180deg, rgba(31,167,225,0.14), rgba(255,255,255,1))` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 16px" }}>
          <div style={{ maxWidth: 720 }}>
            <div style={pill("BAY AREA • MULTI-LOCATION", "rgba(31,167,225,0.14)", COLORS.dark)}>BAY AREA • MULTI-LOCATION</div>
            <h1 style={{ margin: "14px 0 10px", fontSize: 44, lineHeight: 1.05, letterSpacing: -1 }}>
              <span style={{ color: COLORS.orange, fontWeight: 950 }}>Laundry</span>{" "}
              <span style={{ color: COLORS.green, fontWeight: 950 }}>Day</span>{" "}
              <span style={{ fontWeight: 950 }}>Laundromats</span>
            </h1>
            <p style={{ margin: 0, fontSize: 18, color: "rgba(0,0,0,0.7)", fontWeight: 650 }}>
              Clean • Fast • Reliable. Find your closest store or check Wash & Fold hours.
            </p>

            <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap", gap: 10 }}>
              <a href="#locations" style={buttonStyle(COLORS.orange)}>Find Your Location</a>
              <a href="#washfold" style={buttonStyle(COLORS.green)}>Wash & Fold</a>
              <a href={`tel:${PHONE_TEL}`} style={{ ...buttonStyle(COLORS.dark), boxShadow: "none" }}>Tap to Call</a>
            </div>

            <div id="washfold" style={{ marginTop: 22, border: `1px solid ${COLORS.line}`, borderRadius: 18, padding: 18, background: "white", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "rgba(0,0,0,0.6)" }}>WASH, DRY & FOLD (UNION CITY)</div>
              <div style={{ marginTop: 6, fontSize: 26, fontWeight: 950 }}>
                <span style={{ color: COLORS.green }}>$2 / lb</span>{" "}
                <span style={{ fontSize: 14, fontWeight: 900, color: "rgba(0,0,0,0.55)" }}>• 11 lb minimum</span>
              </div>
              <div style={{ marginTop: 6, fontSize: 14, fontWeight: 700, color: "rgba(0,0,0,0.65)" }}>
                Weekly hours may change. Call to confirm same-day drop-off.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations">
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 16px" }}>
          <h2 style={{ margin: 0, fontSize: 30, letterSpacing: -0.5 }}>Find Your Laundry Day</h2>
          <p style={{ marginTop: 8, color: "rgba(0,0,0,0.65)", fontWeight: 650 }}>
            Each location keeps its original store name for local recognition and SEO.
          </p>

          <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
            {LOCATIONS.map((l) => {
              const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(l.address)}`;
              return (
                <div key={l.slug} style={{ border: `1px solid ${COLORS.line}`, borderRadius: 18, padding: 16, background: "white", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 950 }}>{l.city}</div>
                      <div style={{ fontSize: 13, fontWeight: 900, color: "rgba(0,0,0,0.6)" }}>{l.store}</div>
                    </div>
                    <div style={pill(l.hours.includes("Closed") ? "TEMP CLOSED" : "OPEN HOURS", l.hours.includes("Closed") ? "rgba(245,130,32,0.14)" : "rgba(108,192,74,0.14)", l.hours.includes("Closed") ? COLORS.orange : COLORS.green)}>
                      {l.hours.includes("Closed") ? "TEMP CLOSED" : "OPEN HOURS"}
                    </div>
                  </div>

                  <div style={{ marginTop: 10, fontSize: 14, fontWeight: 700, color: "rgba(0,0,0,0.75)" }}>{l.address}</div>
                  <div style={{ marginTop: 6, fontSize: 13, fontWeight: 800, color: "rgba(0,0,0,0.6)" }}>{l.hours}</div>

                  {l.note ? (
                    <div style={{ marginTop: 10, borderRadius: 12, padding: 10, background: "rgba(245,130,32,0.10)", fontWeight: 800 }}>
                      {l.note}
                    </div>
                  ) : null}

                  <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 8 }}>
                    <a href={`tel:${PHONE_TEL}`} style={buttonStyle(COLORS.orange)}>Call</a>
                    <a href={maps} target="_blank" rel="noreferrer" style={buttonStyle(COLORS.green)}>Directions</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${COLORS.line}`, padding: "28px 16px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <div style={{ fontWeight: 950 }}>
            <span style={{ color: COLORS.orange }}>Laundry</span>{" "}
            <span style={{ color: COLORS.green }}>Day</span>{" "}
            <span style={{ color: "rgba(0,0,0,0.55)", fontSize: 13 }}>Laundromats</span>
          </div>
          <a href={`tel:${PHONE_TEL}`} style={{ fontWeight: 950, color: COLORS.dark, textDecoration: "none" }}>
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </footer>
    </div>
  );
}

