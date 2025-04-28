import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/logo.svg",
  },
  title: "My Doctor - Your Gateway to Seamless Healthcare",
  description:
    "My Doctor is your all-in-one app for accessing healthcare services anytime, anywhere. Connect with specialized doctors, book appointments, access medical records, and get instant medical assistance.",
  keywords:
    "My Doctor app, digital health, pharmaceutical company, healthcare services, doctor appointment, medical chat, telehealth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
