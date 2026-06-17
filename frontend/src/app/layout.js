import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/components/common/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Eteon International | Global Import-Export | Industrial Packaging & Agro Textiles",
  description: "Eteon International - Connecting global markets with premium PP packaging, Agro textiles, medical supplies, and agricultural fertilizers. Reliable Indian export partner.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

