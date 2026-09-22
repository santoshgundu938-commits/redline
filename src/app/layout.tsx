import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Tinos } from "next/font/google";
import "./globals.css";

const ui = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ui",
  display: "swap",
});

const sign = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sign",
  display: "swap",
});

const doc = Tinos({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-doc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Redline",
  description:
    "Upload a client's contract before you sign it. Redline ranks the clauses that could hurt you, and every flag quotes the sentence it came from.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ui.variable} ${sign.variable} ${doc.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
