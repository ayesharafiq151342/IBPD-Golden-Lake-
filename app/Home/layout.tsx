// app/layout.tsx
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Golden Lake',
  description: 'Empowering Businesses with ERP Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 bg-purple-600 text-white text-center">
          Golden Lake ERP Solutions
        </header>

        <main>{children}</main>

        <footer className="p-4 bg-gray-800 text-white text-center">
          © 2024 Golden Lake
        </footer>
      </body>
    </html>
  );
}
