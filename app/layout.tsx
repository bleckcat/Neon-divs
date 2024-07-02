import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
})

export const metadata: Metadata = {
  title: "All for one",
  description: "This is going to be nice"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex justify-center min-h-screen items-start h-full bg-zinc-950 antialiased">
          {children}
        </main>
      </body>
      <Script src="" />
    </html>
  )
}
