import type { Metadata } from "next"
import { Epilogue } from "next/font/google"
import "./globals.css"
import Attribution from "./components/Attribution"
import Header from "./components/header"

const epilogue = Epilogue({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Intro Section with Dropdown Navigation",
  description: "A Challenge from Frontend Mentor!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${epilogue.className} bg-almost-white text-almost-black flex min-h-screen flex-col items-center`}
      >
        <Header />
        {children}
        <Attribution />
      </body>
    </html>
  )
}
