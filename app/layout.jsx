import { Zilla_Slab } from "next/font/google";
import "./globals.css";

const font = Zilla_Slab({
  subsets: ["latin"],
  weight: ['400', '700'],
});

export const metadata = {
  title: "Clara Rossetti",
  description: "Um registro da minha existencia na web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={font.className}>
        {children}
      </body>
    </html>
  );
}
