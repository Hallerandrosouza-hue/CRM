import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LeadPulse CRM",
  description: "Gerenciamento inteligente de leads e tráfego",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex bg-black text-white selection:bg-purple-500/30">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 p-6 md:p-8 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
