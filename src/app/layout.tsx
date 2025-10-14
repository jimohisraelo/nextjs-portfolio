import "./globals.css";

export const metadata = {
  title: "Israel | Portfolio",
  description: "Building ideas into technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-light dark:bg-dark text-gray-900 dark:text-gray-100 transition-colors duration-300">
        
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
