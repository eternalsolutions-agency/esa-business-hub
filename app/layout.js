import "./globals.css";

export const metadata = {
  title: "ESA Business Hub",
  description: "Piattaforma digitale per aziende locali",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
