import Footer from "./(footer)/Footer";
import Header from "./(header)/Header";
import "./globals.css";

export const metadata = {
  title: "About Vibes",
  description: "Developed by VisionaryTheo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="px-2 mx-auto lg:w-4/5 min-h-screen">
        <Header />
        <main className="min-h-[75vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
