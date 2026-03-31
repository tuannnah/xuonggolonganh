import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>Xưởng Gỗ Long Anh</h3>
          <p>Nội thất gỗ tự nhiên cao cấp – Heritage Timber Collection. Gia công tại xưởng, bảo hành 5 năm.</p>
          <div className="footer-socials mt-4">
            <a href="https://web.facebook.com/xuonggoolonganh/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a href="#" aria-label="Zalo">
              <span style={{ fontSize: '13px', fontWeight: 700, fontFamily: "'Be Vietnam Pro'" }}>Z</span>
            </a>
            <a href="#" aria-label="YouTube">
              <span className="material-symbols-outlined text-sm">smart_display</span>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Sản phẩm</h4>
          <ul>
            <li><Link href="/sofa">Sofa gỗ</Link></li>
            <li><Link href="/ban-ghe">Bàn ăn</Link></li>
            <li><Link href="/ban-ghe">Ghế ăn</Link></li>
            <li><Link href="/ban-ghe">Kệ TV</Link></li>
            <li><Link href="/dich-vu">Thiết kế theo yêu cầu</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Dịch vụ</h4>
          <ul>
            <li><Link href="/dich-vu">Tư vấn thiết kế</Link></li>
            <li><Link href="/dich-vu">Gia công & Chế tác</Link></li>
            <li><Link href="/dich-vu">Bảo hành & Bảo trì</Link></li>
            <li><Link href="/dich-vu">Vận chuyển & Lắp đặt</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Liên hệ</h4>
          <div className="footer-contact-item">
            <span className="material-symbols-outlined">location_on</span>
            Giao Tác - Thư Lâm - Hà Nội
          </div>
          <div className="footer-contact-item">
            <span className="material-symbols-outlined">call</span>
            0353 135 887 / 0971 212 706
          </div>
          <div className="footer-contact-item">
            <span className="material-symbols-outlined">schedule</span>
            T2–T7: 8:00 – 18:00
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 <strong>Xưởng Gỗ Long Anh</strong>. Đẳng cấp nghệ nhân Việt.</p>
        <div className="flex gap-4 text-xs text-on-surface-variant">
          <Link href="#" className="hover:text-secondary transition-colors">Chính sách bảo hành</Link>
          <Link href="#" className="hover:text-secondary transition-colors">Quy trình sản xuất</Link>
          <Link href="/lien-he" className="hover:text-secondary transition-colors">Liên hệ</Link>
        </div>
      </div>
    </footer>
  );
}
