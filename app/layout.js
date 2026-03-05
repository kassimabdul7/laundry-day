import { COLORS, BRAND } from "./_data";

export const metadata = {
  title: "Laundry Day Laundromats | Bay Area",
  description: "Modern Bay Area laundromats + Wash & Fold. Clean. Fast. Reliable."
};

const linkStyle = {
  textDecoration: "none",
  fontWeight: 900,
  color: "rgba(0,0,0,0.70)",
  fontSize: 14
};

const buttonStyle = (bg) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 999,
  padding: "10px 14px",
  fontWeight: 950,
  textDecoration: "none",
  color: "white",
  background: bg,
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  fontSize: 14
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<body style={{
  margin: 0,
  fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Inter, Arial',
  color: COLORS.ink,
  background: "linear-gradient(180deg, rgba(31,167,225,0.10) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 100%)"
}}>        <header style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(10px)", borderBottom: `1px solid ${COLORS.line}` }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <img src="/logo.png" alt="Laundry Day" style={{ height: 34, width: "auto" }} />
              <div style={{ fontWeight: 950 }}>
                <span style={{ color: COLORS.orange }}>Laundry</span>{" "}
                <span style={{ color: COLORS.green }}>Day</span>{" "}
                <span style={{ color: "rgba(0,0,0,0.55)", fontSize: 13 }}>Laundromats</span>
              </div>
            </a>

            <nav style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <a href="/locations" style={linkStyle}>Locations</a>
              <a href="/wash-fold" style={linkStyle}>Wash &amp; Fold</a>
              <a href="/contact" style={linkStyle}>Contact</a>
              <a href={`tel:${BRAND.phoneTel}`} style={buttonStyle(COLORS.orange)}>Call {BRAND.phoneDisplay}</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer style={{ borderTop: `1px solid ${COLORS.line}`, padding: "26px 16px", background: "white" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
            <div style={{ fontWeight: 950 }}>
              <span style={{ color: COLORS.orange }}>Laundry</span>{" "}
              <span style={{ color: COLORS.green }}>Day</span>{" "}
              <span style={{ color: "rgba(0,0,0,0.55)", fontSize: 13 }}>Laundromats</span>
            </div>
            <a href={`tel:${BRAND.phoneTel}`} style={{ fontWeight: 950, color: COLORS.dark, textDecoration: "none" }}>
              Call {BRAND.phoneDisplay}
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
