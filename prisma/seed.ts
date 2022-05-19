import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.donation.deleteMany();

  const donator = await prisma.donation.create({
    data: {
      email: 'johndoe@email.com',
      displayName: 'John',
      count: 5,
    },
  });

  console.log(donator);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
