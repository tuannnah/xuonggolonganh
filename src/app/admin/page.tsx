import prisma from "@/lib/prisma"
import { createProduct, deleteProduct } from "./actions"

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" }
  })

  return (
    <div className="container py-32 min-h-screen">
      <h1 className="text-3xl font-bold text-primary mb-8 font-headline">Quản Trị Sản Phẩm</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LÊN FORM THÊM SẢN PHẨM */}
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/20 h-fit">
          <h2 className="text-xl font-bold text-primary mb-4">Thêm sản phẩm mới</h2>
          <form action={createProduct} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Tên sản phẩm *</label>
              <input required name="name" type="text" className="w-full border border-outline-variant rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Giá *</label>
              <input required name="price" type="text" placeholder="vd: 12,500,000đ" className="w-full border border-outline-variant rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Danh mục *</label>
              <select required name="category" className="w-full border border-outline-variant rounded p-2 bg-white">
                <option value="sofa">Sofa</option>
                <option value="ban-ghe">Bàn Ghế</option>
                <option value="tu-ke">Tủ Kệ</option>
                <option value="khac">Khác</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tag (Loại gỗ)</label>
              <input name="tag" type="text" placeholder="vd: Gỗ Sồi Nga" className="w-full border border-outline-variant rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Link Ảnh (URL) *</label>
              <input required name="imageUrl" type="url" placeholder="https://..." className="w-full border border-outline-variant rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Các Link Ảnh Khác (tùy chọn)</label>
              <textarea name="images" rows={3} placeholder="Mỗi đường link một dòng..." className="w-full border border-outline-variant rounded p-2"></textarea>
              <p className="text-xs text-on-surface-variant mt-1">Dùng để làm bộ sưu tập ảnh trong trang chi tiết.</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Mô tả chi tiết</label>
              <textarea name="description" rows={3} className="w-full border border-outline-variant rounded p-2"></textarea>
            </div>
            <button type="submit" className="w-full btn-primary justify-center">Lưu Sản Phẩm</button>
          </form>
        </div>

        {/* DANH SÁCH SẢN PHẨM */}
        <div className="lg:col-span-2">
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/20 overflow-x-auto">
            <h2 className="text-xl font-bold text-primary mb-4">Danh sách sản phẩm ({products.length})</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-outline-variant/30 text-sm text-on-surface-variant">
                  <th className="p-3">Ảnh</th>
                  <th className="p-3">Tên</th>
                  <th className="p-3">Giá</th>
                  <th className="p-3">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center p-6 text-on-surface-variant">
                      Chưa có sản phẩm nào.
                    </td>
                  </tr>
                ) : (
                  products.map((product: any) => (
                    <tr key={product.id} className="border-b border-outline-variant/10 hover:bg-surface-container/50">
                      <td className="p-3">
                        <img src={product.imageUrl} alt={product.name} className="w-12 h-12 object-cover rounded" />
                      </td>
                      <td className="p-3 font-medium">{product.name}
                        <div className="text-xs text-on-surface-variant">{product.tag} • {product.category}</div>
                      </td>
                      <td className="p-3 text-secondary font-bold">{product.price}</td>
                      <td className="p-3 flex gap-2">
                        <form action={async () => {
                          "use server";
                          await deleteProduct(product.id);
                        }}>
                          <button type="submit" className="text-red-600 border border-red-200 bg-red-50 hover:bg-red-100 p-2 rounded text-xs px-3">
                            Xóa
                          </button>
                        </form>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
