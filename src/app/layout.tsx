import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Big Tree",
  description: "The biggest trees in the world",
  openGraph: {
    title: "Big Tree",
    description: "The biggest trees in the world",
    images: [
      {
        url: "/og-image.jpg",
        width: 600,
        height: 1067,
        alt: "Big Tree - Interactive globe showing trees around the world",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Tree",
    description: "The biggest trees in the world",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v3.9.4/mapbox-gl.css"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
