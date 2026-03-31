const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const p = await prisma.product.findFirst();
  if (p) {
    const fakeImages = [
      p.imageUrl,
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e"
    ].join('\n');
    await prisma.product.update({
      where: { id: p.id },
      data: { images: fakeImages }
    });
    console.log("Updated product " + p.id + " with extra images.");
  }
}

main().finally(() => prisma.$disconnect());
