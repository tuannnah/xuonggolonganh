require('dotenv/config');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      name: "Sofa gỗ sồi 3 chỗ",
      price: "12,500,000đ",
      category: "sofa",
      tag: "Gỗ Sồi Nga",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7Rcl2HMHldGowo2bdk5jTwL38_-_uy9x8sKaJW-4jfcQ7GPNNB0UkL5-gfPpHXnT2UyGWD-I4lOHOpjZ2rAl8Ku9yTarLLVp_DSeu8Jh-O3VomK4eVQvOHGquKvd-2Sq-g_7Z4mreEeJwN7tFKhC8C_fdJlxC708jTrFeZ2JKOhXzcRmJ3ZEVY0lera_hWiwWJtOr9HYjW5c5lkdcjHI-YgO2sRGAUHTm3bgG4CyzNKdy-zG84irl7GvuZifVHnHZZu6LhLlyP0M",
      description: "Sofa gỗ sồi 3 chỗ cao cấp, gia công tỉ mỉ."
    },
    {
      name: "Bàn ăn gỗ óc chó 6 người",
      price: "14,500,000đ",
      category: "ban-ghe",
      tag: "Gỗ Óc Chó",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-wJXSytS-H0kDhSPcxWh7zjNefxotVnrelVIZEiAeVUx22YdfxuNCcnKq_Y9h6gULjQ5Cmi3iUNCi0OwkLM3bAW5das8jIDfQKVRcUeTbqgX_Ets57xLmkucNXWrY7wIk6vjLfnTWqzgwSR6B_A4Y10ZbP4BK_lkGZGucafAB4wQGFL6suk-lYGtek8KXBtZb4qAcM2DuBDyF-D7VF6AxDnv7sYobVSi7PzxnyvtkOhthXoWewWR9ds4G4tKd-S5vB-_X047BuiY",
      description: "Bàn ăn gỗ óc chó 6 người, kiểu dáng hiện đại."
    },
    {
      name: "Kệ TV gỗ tự nhiên",
      price: "5,900,000đ",
      category: "tu-ke",
      tag: "Gỗ Tự Nhiên",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmW9PvouLGSIfEku3DAjw7KRhTw9Me6ut4-DKb4LQzpHjfFgcGta1M2wxgyHO6w_CtXx2JLaAirJV4jKvsQ3AR7ZkbUZesaoM2gVW2j6H93YeDlFaV2jouZ0aL7KZxRWSBcYzhU1bMH0xZXR2W_xvfKHKmj0mKw8jVHbD-_4MhCFWp51s-ws9gyQxsEEV7JeAmCdKbo5oWmrJ_5ujwHI58bW-_0SFsrqBTJ5k2H08bN0fi5psvu0T6cI23fcme-KRGYq6_LjPFaPg",
      description: "Kệ TV gỗ tự nhiên bền đẹp."
    },
    {
      name: "Sofa gỗ nệm vải cao cấp",
      price: "Liên hệ báo giá",
      category: "sofa",
      tag: "Gỗ Sồi + Nệm",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFVmnxAyYLvkSWc7JLkvmL8ETCXb8XXokkqoOsS-4PZv4ygbv2T9m6d42GiZ0tp6o_F2mDtSRb5qgHtrdamtWUAJIqyMiV73jelsB8Cgm76E55w94FxDLEGAO0g2NMPRoFqxeGMFMsY0q83bD87JzM5rL-F0Myc0x91CyzjbUE69nMFtkK4FEMOhOkh3c9yj6fSF1obPPkfnU0lJ4o8M5HCMoMreqPPk_n07TH6UF5BIG4Zv6gwpupdOYt53CGscoglfymxIRNzsY",
      description: "Sofa kết hợp nệm vải êm ái."
    }
  ];

  for (const p of products) {
    await prisma.product.create({ data: p });
  }
  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
