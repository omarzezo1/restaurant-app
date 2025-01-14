import type { Metadata } from "next";
import { Josefin_Sans, Pacifico} from 'next/font/google'
import "./globle.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const josefin  = Josefin_Sans ({ weight: ['400', '600', '700'],  subsets: ['latin'] })
const pacifico  = Pacifico ({ weight: ['400'],  subsets: ['latin'] })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefin.className} ${pacifico.className}`}>{children}</body>
    </html>
  );
}
