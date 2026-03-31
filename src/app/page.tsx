import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function Home() {
  // Try to load products from database
  let featuredProducts: any[] = [];
  try {
    featuredProducts = await prisma.product.findMany({
      take: 4,
      orderBy: { createdAt: 'desc' }
    });
  } catch (err) {
    console.error("Lỗi khi tải sản phẩm:", err);
  }

  return (
    <>
      {/* ═══ HERO ══════════════════════════════════════════════════ */}
      <section className="pt-[72px] min-h-[92vh] flex items-center relative overflow-hidden bg-surface">
        <div className="absolute -right-32 top-16 w-[600px] h-[600px] rounded-full bg-[#ffddba]/20 blur-3xl pointer-events-none"></div>
        <div className="absolute -left-16 bottom-0 w-64 h-64 rounded-full bg-[#502905]/5 blur-3xl pointer-events-none"></div>

        <div className="container py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div className="reveal visible">
              <span className="section-label">Heritage Timber Collection</span>
              <h1 className="text-5xl lg:text-7xl font-bold text-primary leading-[1.1] tracking-tight mb-6">
                Sofa gỗ tự nhiên<br/>
                <em className="not-italic" style={{ color: '#875200' }}>— Bền đẹp theo<br/>thời gian</em>
              </h1>
              <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed mb-10">
                Thiết kế tinh tế, vân gỗ sang trọng, gia công tại xưởng để kiến tạo không gian sống đẳng cấp theo yêu cầu riêng của gia đình bạn.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/sofa" className="btn-primary text-base px-8 py-4">
                  <span className="material-symbols-outlined">chair</span>
                  Xem mẫu sofa
                </Link>
                <Link href="/lien-he" className="btn-outline text-base px-8 py-4">
                  <span className="material-symbols-outlined">chat_bubble</span>
                  Liên hệ tư vấn
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-12 pt-8 border-t border-outline-variant/30">
                <div>
                  <div className="stats-number text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-on-surface-variant mt-1">Sản phẩm</div>
                </div>
                <div>
                  <div className="stats-number text-3xl font-bold text-primary">1200+</div>
                  <div className="text-sm text-on-surface-variant mt-1">Khách hàng</div>
                </div>
                <div>
                  <div className="stats-number text-3xl font-bold text-primary">5</div>
                  <div className="text-sm text-on-surface-variant mt-1">Năm bảo hành</div>
                </div>
                <div>
                  <div className="stats-number text-3xl font-bold text-primary">15</div>
                  <div className="text-sm text-on-surface-variant mt-1">Năm kinh nghiệm</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative group reveal reveal-delay-2 visible">
              <div className="absolute -inset-6 bg-secondary-container/20 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
              <div className="relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpltnSlF7e2e1_LHv2w406_S3-L4cj8Ry7CBCyspMB6diUUBXtb5kCm-W5sO-baBpdrK5dPM7QPdFhL5n8n9H7lQpZgMbmjxC57_Q2QV1U90MI5xeBg9UGpiXPQLrhWxTb8kE8ooL8lXwCENpYuRgn2CpEOEfh9xAIl8LV8kZt9Dr2VSXrZzNNHn1kRxFu6bX3pVEKNZa4SPHEEo5Frqg326B9imA0RIISyTXwP1S9NsqofZpFjLr4hTPi_eGY4sPuIvJIFTUQX-c"
                  alt="Sofa gỗ tự nhiên cao cấp – Xưởng Gỗ Long Anh"
                  className="relative z-10 w-full rounded-2xl shadow-2xl object-cover aspect-[4/3] transform group-hover:scale-[1.02] transition-transform duration-700"
                />
                {/* Badge */}
                <div className="absolute -bottom-5 -left-5 z-20 bg-surface-container-lowest rounded-xl shadow-xl p-4 flex items-center gap-3 border border-outline-variant/20">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-primary">Bảo hành 5 năm</div>
                    <div className="text-xs text-on-surface-variant">100% gỗ tự nhiên</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CATEGORIES ════════════════════════════════════════════ */}
      <section className="py-24 bg-surface-container-low">
        <div className="container">
          <div className="text-center mb-14 reveal visible">
            <span className="section-label">Danh mục sản phẩm</span>
            <h2 className="text-4xl font-bold text-primary mt-2">Khám phá bộ sưu tập</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <Link href="/sofa" className="group category-card relative overflow-hidden rounded-2xl aspect-square bg-surface-container-lowest shadow-sm hover:shadow-xl cursor-pointer reveal reveal-delay-1 visible">
              <img alt="Sofa gỗ" className="category-card-img absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFVmnxAyYLvkSWc7JLkvmL8ETCXb8XXokkqoOsS-4PZv4ygbv2T9m6d42GiZ0tp6o_F2mDtSRb5qgHtrdamtWUAJIqyMiV73jelsB8Cgm76E55w94FxDLEGAO0g2NMPRoFqxeGMFMsY0q83bD87JzM5rL-F0Myc0x91CyzjbUE69nMFtkK4FEMOhOkh3c9yj6fSF1obPPkfnU0lJ4o8M5HCMoMreqPPk_n07TH6UF5BIG4Zv6gwpupdOYt53CGscoglfymxIRNzsY"/>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-5 left-5 text-white">
                <span className="material-symbols-outlined text-2xl mb-1">chair</span>
                <h3 className="text-lg font-bold font-headline">Sofa gỗ</h3>
                <p className="text-xs opacity-80 mt-0.5">8 mẫu</p>
              </div>
            </Link>
            <Link href="/ban-ghe" className="group category-card relative overflow-hidden rounded-2xl aspect-square bg-surface-container-lowest shadow-sm hover:shadow-xl cursor-pointer reveal reveal-delay-2 visible">
              <img alt="Bàn ăn" className="category-card-img absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBED3ZshTi8xa8vAoqkVbc3AQDJZ-oLJZWTncB3Y94EsC7jb9Z1IqfRPUeUs93I7UAj1dsgiGvTlUoRx97KdwpVGXZM7QY5_ESaUCTVk6cF2wNSdrDbYL9zlS7qH21NYgTYEgRUFi0yPs0hHhuB6PsYYJs73K1GZ3APEhRNXaForCBjQslwOTyB4Pnm_zf8J-yMn2OtOR6Ex08YUQnkj_ZSzSLNNBgZCgEWeVgS4Lklcb7Oh0iaXqlVMKNF24vWBYw8nb62-cHn0FA"/>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-5 left-5 text-white">
                <span className="material-symbols-outlined text-2xl mb-1">table_restaurant</span>
                <h3 className="text-lg font-bold font-headline">Bàn ăn</h3>
                <p className="text-xs opacity-80 mt-0.5">12 mẫu</p>
              </div>
            </Link>
            <Link href="/ban-ghe" className="group category-card relative overflow-hidden rounded-2xl aspect-square bg-surface-container-lowest shadow-sm hover:shadow-xl cursor-pointer reveal reveal-delay-3 visible">
              <img alt="Kệ TV" className="category-card-img absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmW9PvouLGSIfEku3DAjw7KRhTw9Me6ut4-DKb4LQzpHjfFgcGta1M2wxgyHO6w_CtXx2JLaAirJV4jKvsQ3AR7ZkbUZesaoM2gVW2j6H93YeDlFaV2jouZ0aL7KZxRWSBcYzhU1bMH0xZXR2W_xvfKHKmj0mKw8jVHbD-_4MhCFWp51s-ws9gyQxsEEV7JeAmCdKbo5oWmrJ_5ujwHI58bW-_0SFsrqBTJ5k2H08bN0fi5psvu0T6cI23fcme-KRGYq6_LjPFaPg"/>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-5 left-5 text-white">
                <span className="material-symbols-outlined text-2xl mb-1">tv_gen</span>
                <h3 className="text-lg font-bold font-headline">Kệ TV</h3>
                <p className="text-xs opacity-80 mt-0.5">6 mẫu</p>
              </div>
            </Link>
            <Link href="/dich-vu" className="group category-card relative overflow-hidden rounded-2xl aspect-square bg-surface-container-lowest shadow-sm hover:shadow-xl cursor-pointer reveal reveal-delay-4 visible">
              <img alt="Theo yêu cầu" className="category-card-img absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCBjllX0iSBB_xtw9FJm12Rl_d91dkdJcuJsQTVJ91-zIYhYnX9fszG7VwfcvAa4zGwvC27htSV9WLKWLz6otv9ytDChW0bPVunqrCK_eMiXfo2kxeuRsDio-lFsaMbnJOOekl4XTmlMj7u9vvNzgrwhgY_vcrZrQnrOjwYHFqCgP7EO3DUf2vnu6up13d0wbtdjZWHrkEAfR-uMoKKdImt7wKXLDwk7Vhhb1_kOl3zv7rjAMGablTVLIxloY26U2vot_0ImiP4dE"/>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-5 left-5 text-white">
                <span className="material-symbols-outlined text-2xl mb-1">architecture</span>
                <h3 className="text-lg font-bold font-headline">Theo yêu cầu</h3>
                <p className="text-xs opacity-80 mt-0.5">Không giới hạn</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED PRODUCTS ════════════════════════════════════ */}
      <section className="py-24 bg-surface">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4 reveal visible">
            <div>
              <span className="section-label">Sản phẩm nổi bật</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">Tuyệt phẩm mộc nhân</h2>
            </div>
            <Link href="/sofa" className="flex items-center gap-2 text-secondary font-semibold hover:gap-4 transition-all group font-headline">
              Xem tất cả bộ sưu tập
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          
          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center text-on-surface-variant py-8 border-2 border-dashed border-outline-variant rounded-xl">
              Hệ thống chưa có sản phẩm nào. Vui lòng truy cập <Link href="/api/seed" className="text-secondary font-bold underline">/api/seed</Link> để tải dữ liệu mẫu. Hoặc truy cập <Link href="/admin" className="text-secondary font-bold underline">/admin</Link> để thêm sản phẩm.
            </div>
          )}
        </div>
      </section>

      {/* ═══ COMMITMENTS ═══════════════════════════════════════════ */}
      <section className="py-24 bg-surface-container">
        <div className="container">
          <div className="text-center mb-14 reveal visible">
            <span className="section-label">Cam kết của chúng tôi</span>
            <h2 className="text-4xl font-bold text-primary mt-2">Từ xưởng đến nhà bạn</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center reveal reveal-delay-1 visible">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>forest</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2 font-headline">Gỗ tự nhiên 100%</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Tuyển chọn từ những khối gỗ bền chắc, vân gỗ đẹp nhất từ nguồn FAS đạt chuẩn.</p>
            </div>
            <div className="text-center reveal reveal-delay-2 visible">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>factory</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2 font-headline">Gia công tại xưởng</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Kiểm soát chất lượng trực tiếp, giá thành tối ưu, không qua trung gian.</p>
            </div>
            <div className="text-center reveal reveal-delay-3 visible">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_paint</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2 font-headline">Thiết kế theo yêu cầu</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Tùy chỉnh kích thước, màu sắc và kiểu dáng theo ý muốn của gia chủ.</p>
            </div>
            <div className="text-center reveal reveal-delay-4 visible">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2 font-headline">Bảo hành dài hạn</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Chế độ hậu mãi chu đáo, bảo hành lên tới 5 năm cho phần gỗ.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ════════════════════════════════════════════ */}
      <section className="py-24 bg-surface">
        <div className="container">
          <div className="bg-primary-container rounded-3xl p-12 md:p-20 text-center relative overflow-hidden reveal visible">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/15 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl pointer-events-none"></div>
            <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
              <span className="section-label" style={{ color: '#ffb865' }}>Nhận tư vấn miễn phí</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: '#eaac7e' }}>
                Bạn đang tìm sofa phù hợp cho không gian của mình?
              </h2>
              <p className="text-lg opacity-80" style={{ color: '#eaac7e' }}>Để lại thông tin để nhận tư vấn thiết kế và báo giá ưu đãi ngay hôm nay.</p>
              <Link href="/lien-he" className="btn-secondary inline-flex text-lg px-10 py-5 rounded-xl font-bold hover:scale-105 transition-transform shadow-xl">
                <span className="material-symbols-outlined">chat_bubble</span>
                Nhận tư vấn miễn phí
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
