import './globals.css'

export const metadata = {
  title: 'Agentic Brand Building Workflow — berndt ad-venture',
  description: 'An agentic workflow with human quality gates — where AI-powered intelligence meets two decades of strategic experience and taste.',
  openGraph: {
    title: 'Agentic Brand Building Workflow — berndt ad-venture',
    description: 'An agentic workflow with human quality gates — where AI-powered intelligence meets two decades of strategic experience and taste.',
    url: 'https://janberndt.com',
    siteName: 'berndt ad-venture',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic Brand Building Workflow — berndt ad-venture',
    description: 'An agentic workflow with human quality gates — where AI-powered intelligence meets two decades of strategic experience and taste.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
