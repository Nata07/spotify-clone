import './globals.css'

export const metadata = {
  title: 'Spotify Clone ',
  description: 'Clone Spotify web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-100">{children}</body>
    </html>
  )
}
