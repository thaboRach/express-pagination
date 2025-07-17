import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  for (let i = 1; i <= 50; i++) {
    await prisma.product.upsert({
      where: { id: i },
      update: {},
      create: {
        name: `Product ${i}`,
        price: `${i * 10}`,
      },
    });
  }
  console.log("Seeding completed successfully.");
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
