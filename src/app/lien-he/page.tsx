import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Liên Hệ | Xưởng Gỗ Long Anh',
  description: 'Liên hệ tư vấn, đặt hàng nội thất gỗ tự nhiên tại Xưởng Gỗ Long Anh.',
};

export default function ContactPage() {
  return (
    <div className="pt-[100px] min-h-[90vh] bg-surface">
      <div className="container py-12">
        <div className="text-center mb-16">
          <span className="section-label">Trực tiếp từ nghệ nhân</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">
            Đến Hoặc Gọi Cho Chúng Tôi
          </h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và tư vấn giải pháp nội thất gỗ tự nhiên hoàn hảo nhất cho tổ ấm của gia đình bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto bg-surface-container-lowest p-8 md:p-14 rounded-3xl shadow-xl border border-outline-variant/30">
          {/* Thông tin liên hệ */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-8 border-b-2 border-secondary inline-block pb-2">Thông Tin Xưởng</h2>

            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-1">Địa chỉ xưởng sản xuất</h4>
                  <p className="text-on-surface-variant leading-relaxed text-base">Giao Tác - Thư Lâm - Đông Anh - Hà Nội</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-1">Hotline & Zalo</h4>
                  <p className="text-on-surface-variant mb-1 text-base">
                    <a href="tel:0353135887" className="hover:text-secondary font-semibold transition-colors">0353 135 887</a>
                  </p>
                  <p className="text-on-surface-variant text-base">
                    <a href="tel:0971212706" className="hover:text-secondary font-semibold transition-colors">0971 212 706</a>
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-1">Giờ làm việc</h4>
                  <p className="text-on-surface-variant text-base">Thứ 2 - Chủ Nhật: 7:00 AM - 6:00 PM</p>
                  <p className="text-on-surface-variant text-sm mt-1 opacity-80">(Vui lòng gọi điện trước khi đến thăm xưởng)</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Form Liên hệ */}
          <div className="bg-surface p-8 rounded-2xl border border-outline-variant/50">
            <h3 className="text-xl font-bold text-primary mb-6">Gửi Yêu Cầu Tư Vấn</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Họ và tên</label>
                <input type="text" className="w-full px-4 py-3 bg-surface-container-high rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Ví dụ: Nguyễn Văn A" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Số điện thoại <span className="text-red-500">*</span></label>
                <input type="tel" className="w-full px-4 py-3 bg-surface-container-high rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="09xxxxxxx" required />
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Lời nhắn / Nhu cầu thiết kế</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-surface-container-high rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none text-on-surface transition-all resize-none" placeholder="Bạn quan tâm loại gỗ gì, kích thước bao nhiêu..."></textarea>
              </div>

              <button type="button" className="btn-primary w-full py-4 text-base rounded-xl font-bold shadow-md hover:shadow-lg mt-2 flex justify-center items-center gap-2">
                <span className="material-symbols-outlined">send</span> Gửi Thông Tin
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
