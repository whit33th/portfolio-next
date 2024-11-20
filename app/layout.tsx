import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/ui/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
const inter = Inter({ subsets: ["latin"] });
import { AppSidebar } from "@/components/app-sidebar";
export const metadata: Metadata = {
  title: "Frontend Developer Portfolio",
  description: "Portfolio of a passionate frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SidebarProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex h-dvh ">
              <AppSidebar />
              <main className="flex-1">{children}</main>
            </div>
          </ThemeProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}