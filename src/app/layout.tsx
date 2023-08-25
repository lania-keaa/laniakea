import './globals.css'
import type { Metadata } from 'next'
import { Theme } from '@radix-ui/themes'
import { inter, libre_baskerville } from './fonts'

export const metadata: Metadata = {
  title: {
    default: "laniakea",
    template: "%s | laniakea",
  },
  description: "Student Software Engineer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={[inter.variable, libre_baskerville.variable].join(" ")}>
      <body>
        <Theme appearance="dark">
          {children}
        </Theme>
      </body>
    </html>
  )
}
