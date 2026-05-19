export const metadata = {
  title: "Chase Linzey — Landscape Architecture",
  description:
    "Portfolio of Chase Linzey, landscape architect based in Tucson, AZ. BLA from the University of Arizona — CAPLA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
