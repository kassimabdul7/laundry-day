export const metadata = {
  title: "Laundry Day Laundromats | Bay Area",
  description: "Modern Bay Area laundromats + Wash & Fold. Clean. Fast. Reliable."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "ui-sans-serif, system-ui, Arial" }}>
        {children}
      </body>
    </html>
  );
}
