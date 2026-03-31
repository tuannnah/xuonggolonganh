import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function SofaPage() {
  let products: any[] = [];
  try {
    products = await prisma.product.findMany({
      where: {
        category: 'sofa'
      },
      orderBy: { createdAt: 'desc' }
    });
  } catch (err) {
    console.error("Lỗi khi tải sản phẩm sofa:", err);
  }

  return (
    <div className="pt-[100px] min-h-[90vh] bg-surface">
      <div className="container py-12">
        <div className="text-center mb-12">
          <span className="section-label">Danh mục</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4 cursor-default">
            Sofa Gỗ Cao Cấp
          </h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto cursor-default">
            Khám phá bộ sưu tập sofa gỗ tự nhiên sang trọng, thiết kế đẳng cấp và bền bỉ mãi với thời gian. Bản giao hưởng giữa truyền thống và sự tiện nghi hiện đại.
          </p>
        </div>
        
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
           <div className="text-center text-on-surface-variant py-16 border border-dashed border-outline-variant rounded-2xl bg-surface-container-low">
             <span className="material-symbols-outlined text-5xl mb-4 opacity-50">chair</span>
             <h3 className="text-xl font-bold text-primary mb-2">Đang Cập Nhật</h3>
             <p className="opacity-80">Hiện chưa có sản phẩm Sofa nào trong hệ thống.</p>
             <Link href="/" className="btn-outline inline-block mt-6 px-6 py-2">
               Quay lại trang chủ
             </Link>
           </div>
        )}
      </div>
    </div>
  );
}
