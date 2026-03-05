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


    </div>
  );
}



