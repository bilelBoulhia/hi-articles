import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Footer from "@/app/sections/Footer";
import Header from "@/app/sections/Header";
import AbstractBackground from "@/components/ui/abstract-background";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
      <AbstractBackground/>
      <ThemeProvider
          attribute="class"

          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
      >

          <Header/>

          <main className="min-h-[100dvh] overflow-x-hidden flex flex-col  z-0 items-center">
              {children}
          </main>
          <Footer/>

      </ThemeProvider>
      </body>
    </html>
  );
}
