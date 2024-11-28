import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const poppinsRegular = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppins-regular",
  weight: "100 900",
});

const poppinsBold = localFont({
  src: "./fonts/Poppins-SemiBold.ttf",
  variable: "--font-poppins-bold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${poppinsRegular.variable} ${poppinsRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
