import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className="p-6 bg-white text-gray-800 font-sans">{children}</body>
    </html>
  );
}