const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const p = await prisma.product.findMany();
  console.log(JSON.stringify(p.map(x => ({id: x.id, name: x.name, images: x.images})), null, 2));
}

main().finally(() => prisma.$disconnect());
