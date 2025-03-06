import type { Metadata } from "next";
import {  Inter, IBM_Plex_Serif} from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({subsets:['latin'], variable:'--font-inter'});

const ibm_plex_serif = IBM_Plex_Serif({
  subsets:['latin'],
  variable: '--font-ibm-plex-serif',
  weight:['400', '700']
})

export const metadata: Metadata = {
  title: "SkyBank",
  description: "Best internet banking application making life worth-while",
  icons:{
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibm_plex_serif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
