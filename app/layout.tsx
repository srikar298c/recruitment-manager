import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import AuthProvider from "@/components/AuthProvider";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "Global Placements",
  description: "Recruiting Globally",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="white"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            
            {children}
  
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}