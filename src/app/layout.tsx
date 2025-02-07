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
  metadataBase: new URL("https://dkaminskyi.xyz"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "dkaminskyi",
    description: "Daniil Kaminskyi's portfolio. Frontend Developer",
    url: "https://dkaminskyi.xyz",
    siteName: "dkaminskyi",
    images: [
      {
        url: "/img/me.webp",
      },
    ],
    locale: "en_US",
    type: "website",
    emails: ["deniil019@gmail.com"],
    countryName: "Poland",
    phoneNumbers: ["+48572296004"],
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
            <main className="w-full h-screen overflow-y-auto">
              <AuroraBackground>{children}</AuroraBackground>
            </main>
          </SidebarDemo>
        </body>
      </html>
    </SidebarProvider>
  );
}
