export const metadata = { title: 'Next.js on homeport' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: '4rem auto', maxWidth: '40rem', padding: '0 1rem' }}>{children}</body>
    </html>
  )
}
