import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Xưởng Gỗ Long Anh – Nội Thất Gỗ Tự Nhiên Cao Cấp",
  description: "Xưởng Gỗ Long Anh – Nội thất gỗ tự nhiên cao cấp: Sofa gỗ, Bàn ăn, Kệ TV. Gia công tại xưởng, bảo hành 5 năm, thiết kế theo yêu cầu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700&family=Noto+Serif:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Floating Action Buttons */}
        <div className="fab-container">
          <a href="tel:0353135887" className="fab-btn fab-phone" title="Gọi ngay">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
          </a>
          <a href="https://zalo.me/0353135887" target="_blank" className="fab-btn fab-zalo" title="Zalo">Z</a>
        </div>
      </body>
    </html>
  );
}
