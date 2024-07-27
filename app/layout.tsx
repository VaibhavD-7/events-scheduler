import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CalendarProvider } from "./contexts/CalendarContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Event Scheduler",
  description: "Simple Event scheduler build using Next.js and ReactJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CalendarProvider>{children}</CalendarProvider>
      </body>
    </html>
  );
}
