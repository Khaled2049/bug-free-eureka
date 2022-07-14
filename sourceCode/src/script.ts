// 1
import { PrismaClient } from '@prisma/client';

// 2
const prisma = new PrismaClient();

// 3
async function main() {
  const newLink = await prisma.link.create({
    data: {
      description: 'test',
      url: 'test',
    },
  });

  const newWish = await prisma.wish.create({
    data: {
      giftLink: 'hagu@hagukha.com',
    },
  });

  const allLinks = await prisma.link.findMany();
  const wishes = await prisma.wish.findMany();

  console.log(wishes);
  console.log(allLinks);
}

// 4
main()
  .catch((e) => {
    throw e;
  })
  // 5
  .finally(async () => {
    await prisma.$disconnect();
  });
