/**
 * ! Executing this script will delete all data in your database and seed it with 10 company.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from "@snaplet/seed";

const main = async () => {
  const seed = await createSeedClient({
    connect: true,
    models: {
      account: {
        data: {
          supplier_id: null
        },
      }
    }
  });

  // Truncate all tables in the database
  //await seed.$resetDatabase();

  // Seed the database with 10 company
  await seed.supplier((x) => x(10))
  //await seed.client((x) => x(10))
  //await seed.account((x) => x(10));
  await seed.product((x) => x(10))
  //await seed.company((x) => x(10))
  
  //await seed.order((x) => x(10))
  //await seed.invoice((x) => x(10))
  //await seed.staff((x) => x(10))
  
  //await seed.transport((x) => x(10))
  //await seed.warehouse((x) => x(10))

  // Type completion not working? You might want to reload your TypeScript Server to pick up the changes

  console.log("Database seeded successfully!");

  process.exit();
};

main();