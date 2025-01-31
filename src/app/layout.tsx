import "./globals.css";

export const metadata = {
  title: "Todo App",
  description: "A simple Todo application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="p-4 bg-[#202020]">
        {children}
        </body>
    </html>
  );
}
