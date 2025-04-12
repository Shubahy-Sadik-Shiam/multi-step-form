'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <title>Multi Step Form</title>
        <meta name="description" content="Generated by create next app" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryClientProvider client={queryClient}>
        {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
