import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "frontend",
  description: "task manager app Next.js",
  icons: {
    icon: "/favicon.svg", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
