import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Giselle's Portfolio",
  description: "Giselle's Portfolio Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights/>
        </body>
      <GoogleAnalytics gaId={process.env.GA_ID} />
    </html>
  );
}