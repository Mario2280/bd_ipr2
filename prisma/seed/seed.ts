/**
 * ! Executing this script will delete all data in your database and seed it with 10 user.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from '@snaplet/seed'
import { random } from 'lodash';

const main = async () => {
  
	const seed = await createSeedClient({
    models: {
      user: {
        data: {
          location: () =>
            `POINT(${random(-90.0, 90.0)} ${random(-90.0, 90.0)})`,
        },
      },
    },
  })

  // Truncate all tables in the database
  await seed.$resetDatabase();

  await seed.user((x) => x(100))
	await seed.message((x) => x(100))
	await seed.match((x) => x(100))
	await seed.block((x) => x(100))
	await seed.subscription((x) => x(100))
	await seed.report((x) => x(100))
	await seed.visit((x) => x(100))
	await seed.like((x) => x(100))
	await seed.notification((x) => x(100))
	await seed.setting((x) => x(100))
	await seed.media((x) => x(100))
	await seed.interest((x) => x(100))
  
  console.log("Database seeded successfully!");

  process.exit();
};

main();