import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import "@/styles/globals.css";
import { Header } from "@/components/header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white  min-h-dvh tracking-tight`}>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
