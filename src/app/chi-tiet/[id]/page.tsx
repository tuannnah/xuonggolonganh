import Image from 'next/image';
import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ProductGallery from '@/components/ProductGallery';

export const dynamic = 'force-dynamic';

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = await params;
  const product = await prisma.product.findUnique({
    where: { id: resolvedParams.id },
  });

  if (!product) {
    notFound();
  }

  let allImages = [product.imageUrl];
  const prodAny = product as any;
  if (prodAny.images) {
    const extraImages = prodAny.images
      .split(/[\n,]+/)
      .map((url: string) => url.trim())
      .filter((url: string) => url.length > 0);
    allImages = [...allImages, ...extraImages];
  }

  return (
    <div className="pt-[100px] min-h-[90vh] bg-surface">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Gallery Của Sản Phẩm */}
          <div className="h-full">
            <ProductGallery images={allImages} alt={product.name} />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            {product.tag && (
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
                {product.tag}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-bold text-primary mb-6">
              {product.price}
            </p>
            
            <div className="max-w-none text-base md:text-lg mb-8 whitespace-pre-line text-on-surface-variant leading-relaxed">
              {product.description || 'Chưa có mô tả cho sản phẩm này.'}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <Link 
                href="/lien-he" 
                className="btn-primary flex-1 text-center py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Liên Hệ Đặt Hàng
              </Link>
              <Link 
                href={`/${product.category}`} 
                className="btn-outline flex-1 text-center py-3 rounded-full hover:bg-surface-variant transition-colors"
              >
                Xem Thêm {product.category === 'sofa' ? 'Sofa' : 'Bàn Ghế'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
