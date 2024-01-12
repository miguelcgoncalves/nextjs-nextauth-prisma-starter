import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient({ errorFormat: "pretty" });

async function main() {
  await prisma.user.upsert({
    where: { email: "joe@example.com" },
    update: {},
    create: {
      email: "joe@example.com",
      firstName: "joe",
      lastName: "",
      password: await hash("secret", 10),
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
