import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Risk Radar — Early Warning for Account Suspensions',
  description: 'Monitor transaction patterns and flag potential risk triggers before Stripe acts. Protect your e-commerce business with real-time risk analysis.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c88052a3-f206-4f4e-bc1e-ab5886a86c21"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
