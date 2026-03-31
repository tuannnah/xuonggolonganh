import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dịch Vụ | Xưởng Gỗ Long Anh',
  description: 'Dịch vụ thiết kế và thi công đồ gỗ nội thất tân cổ điển, hiện đại theo yêu cầu.',
};

export default function ServicesPage() {
  return (
    <div className="pt-[100px] min-h-[90vh] bg-surface">
      <div className="container py-12">
        <div className="text-center mb-16">
          <span className="section-label">Dịch vụ chuyên nghiệp</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">
            Thiết Kế & Gia Công Theo Yêu Cầu
          </h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Không chỉ là những sản phẩm có sẵn, Xưởng Gỗ Long Anh tự hào mang đến dịch vụ "Đo ni đóng giày" cho không gian của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-outline-variant/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors"></div>
            <span className="material-symbols-outlined text-4xl text-primary mb-6">draw</span>
            <h3 className="text-2xl font-bold text-primary mb-3">Tư Vấn Thiết Kế</h3>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Khảo sát tận nơi, lắng nghe nhu cầu và đưa ra bản vẽ phác thảo phù hợp với không gian, phong thủy cũng như ngân sách của gia đình.
            </p>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-outline-variant/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors"></div>
            <span className="material-symbols-outlined text-4xl text-primary mb-6">carpenter</span>
            <h3 className="text-2xl font-bold text-primary mb-3">Gia Công Đồ Gỗ</h3>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Từ những khối gỗ thô, qua bàn tay nghệ nhân Long Anh sẽ hóa thành những tác phẩm nghệ thuật nội thất bền vững với thời gian.
            </p>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-outline-variant/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors"></div>
            <span className="material-symbols-outlined text-4xl text-primary mb-6">shield_with_heart</span>
            <h3 className="text-2xl font-bold text-primary mb-3">Bảo Hành Dài Hạn</h3>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Cam kết đồng hành cùng khách hàng với chế độ bảo hành gỗ lên đến 5 năm, xử lý nhanh chóng các vấn đề phát sinh.
            </p>
          </div>
        </div>

        {/* CTA Báo giá */}
        <div className="bg-primary-container p-10 md:p-14 rounded-3xl text-center relative overflow-hidden">
             <div className="absolute left-0 bottom-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
             <div className="absolute right-0 top-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
             <div className="relative z-10">
                <h2 className="text-3xl font-bold text-primary mb-4">Bạn Đã Sẵn Sàng Kiến Tạo Không Gian Mới?</h2>
                <p className="text-on-surface-variant max-w-lg mx-auto mb-8">
                  Hãy để lại ý tưởng của bạn, Xưởng Gỗ Long Anh sẽ giúp bạn hiện thực hóa chúng một cách hoàn hảo nhất.
                </p>
                <Link href="/lien-he" className="btn-primary inline-flex px-8 py-3 text-lg">
                  <span className="material-symbols-outlined">call</span>
                  Gọi Tư Vấn Chuyên Gia
                </Link>
             </div>
        </div>
      </div>
    </div>
  );
}
