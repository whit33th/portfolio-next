import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { SidebarDemo } from "@/components/containers/sidebar";
import { SidebarProvider } from "@/components/UI/sidebar";
import { AuroraBackground } from "@/components/UI/aurora-background";

const robotoSans = Roboto({
  subsets: ["cyrillic", "greek", "latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "dkaminskyi",
  description: "Daniil Kaminskyi's portfolio",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "dkaminskyi",
    description: "Daniil Kaminskyi's portfolio",
    url: "https://dkaminskyi.com",
    siteName: "dkaminskyi",
    images: [
      {
        url: "/img/grey.png",
      },
    ],
    locale: "en_US",
    type: "website",
    emails: ["deniil019@gmail.com"],
    countryName: "Poland",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider animate={false}>
      <html lang="en">
        <body className={`${robotoSans.className} antialiased`}>
          <SidebarDemo>
            <main className="w-full h-screen  overflow-y-auto">
              <AuroraBackground>{children}</AuroraBackground>
            </main>
          </SidebarDemo>
        </body>
      </html>
    </SidebarProvider>
  );
}
