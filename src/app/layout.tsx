import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "NANA | Dashboard",
  description: "NANA Dashboard for NANA Embedded System informations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className} p-5 sm:p-10 min-h-screen flex flex-col items-center gap-5 bg-bg`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
