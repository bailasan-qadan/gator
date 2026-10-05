# Gator

Gator is a command-line RSS feed aggregator built with TypeScript, PostgreSQL, Drizzle ORM, and Node.js.

## Requirements

Before running Gator, make sure you have:

- Node.js
- npm
- PostgreSQL
- Git

## Setup

Clone the repository and install the dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/gator.git
cd gator
npm install
```

Create a config file at:

```text
~/.gatorconfig.json
```

Add the following:

```json
{
  "db_url": "postgres://USERNAME:PASSWORD@localhost:5432/DATABASE_NAME",
  "current_user_name": "YOUR_USERNAME"
}
```

Replace the placeholders with your PostgreSQL username, password, database name, and Gator username.

Run the database migrations:

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

## Running Gator

Run Gator using:

```bash
npm run start <command>
```

### Available Commands

Register a new user:

```bash
npm run start register <username>
```

Log in as a user:

```bash
npm run start login <username>
```

List all users:

```bash
npm run start users
```

List all feeds:

```bash
npm run start feeds
```

Add and follow an RSS feed:

```bash
npm run start addfeed <name> <url>
```

Follow an existing feed:

```bash
npm run start follow <url>
```

List the feeds the current user follows:

```bash
npm run start following
```

Unfollow a feed:

```bash
npm run start unfollow <url>
```

Run the feed aggregator:

```bash
npm run start agg 10s
```

Browse posts:

```bash
npm run start browse 5
```

Reset the database:

```bash
npm run start reset
```
