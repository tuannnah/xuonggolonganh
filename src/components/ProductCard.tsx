import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  tag: string | null;
  imageUrl: string;
  description: string | null;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card reveal visible">
      <div className="product-card-img">
        <img alt={product.name} src={product.imageUrl} />
      </div>
      <div className="product-card-body">
        {product.tag && <div className="product-card-tag">{product.tag}</div>}
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-price">{product.price}</p>
        <div className="product-card-actions">
          <Link href={`/chi-tiet/${product.id}`} className="btn-card-detail block text-center lh-1">Xem chi tiết</Link>
          <Link href="/lien-he" className="btn-card-contact flex items-center justify-center">Liên hệ</Link>
        </div>
      </div>
    </div>
  );
}
