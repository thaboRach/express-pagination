# Express Pagination

A TypeScript-based pagination middleware for Express.js applications. This repository provides utilities to easily paginate API results in your Express projects, streamlining the handling of large result sets and improving client performance.

## Features

- Simple integration with Express.js
- TypeScript support
- Customizable pagination logic
- Middleware approach for easy use in existing routes

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- Pnpm
- [Prisma](https://www.prisma.io/) (for database ORM)

### Installation

Clone the repository:

```bash
git clone https://github.com/thaboRach/express-pagination.git
cd express-pagination
```

Install dependencies:

```bash
pnpm install
```

### Setting up Prisma

1. **Initialize Prisma (if not already initialized):**

   ```bash
   npx prisma init
   ```

   This will create a `prisma` folder with a `schema.prisma` file.

2. **Configure your database:**

   Edit `prisma/schema.prisma` and set the `provider` and `url` in the `datasource` block to match your database (e.g., PostgreSQL, MySQL, SQLite).

3. **Define your data models:**

   Add your models to `schema.prisma`.

4. **Run the latest migration and seed the database:**

   ```bash
   # Run latest migration and seed database
   npx prisma migrate dev --name init --seed
   ```

   - This command will:
     - Apply any new migrations (creating or updating your database tables).
     - Run your seed script to populate the database for development.
   - Make sure you have a `prisma/seed.ts` or `prisma/seed.js` script defined for seeding.

5. **Generate Prisma Client:**

   (This is usually handled automatically by the previous command, but you can run it manually if needed.)

   ```bash
   npx prisma generate
   ```

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

MIT (add license details if applicable)

## Author

[thaboRach](https://github.com/thaboRach)
