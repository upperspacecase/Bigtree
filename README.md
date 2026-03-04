# Big Tree

A map of the biggest trees in the world. Built with Next.js, Mapbox, and MongoDB.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Copy `.env.example` to `.env.local` and fill in your values:
   ```
   cp .env.example .env.local
   ```
   - Get a Mapbox token at https://account.mapbox.com/
   - Set your MongoDB connection string

3. Seed the database with famous trees:
   ```
   npm run seed
   ```

4. Run the dev server:
   ```
   npm run dev
   ```

## Adding Trees

Click the **+ Add Tree** button, then click anywhere on the map to place a new tree. Fill in the name, species, and a short description.
