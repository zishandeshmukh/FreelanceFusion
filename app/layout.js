import './globals.css';

export const metadata = {
  title: 'Softcloud | Elite Full-Stack & AI Development Duo',
  description: 'Zishan Deshmukh & Sahil Shikalgar — Senior Full-Stack & AI engineers building scalable web applications, custom SaaS, and intelligent AI automation for growing businesses.',
  keywords: 'full stack developer, AI solutions, Next.js development, SaaS development, Python FastAPI, freelance developer, Zishan Deshmukh, Sahil Shikalgar',
  openGraph: {
    title: 'Softcloud | Elite Full-Stack & AI Development Duo',
    description: 'Transform your vision into reality with high-performance web development, AI integration, and modern cloud solutions.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

