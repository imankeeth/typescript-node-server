# typescript-node-server

A GraphQL Server boilerplate made with Typescript, PostgreSQL, and Redis

## Installation

1. Clone project

```
git clone https://github.com/imankit/typescript-node-server.git
```

2. cd into folder

```
cd typescript-node-server
```

3. Download dependencies

```
yarn
```

4. Start PostgreSQL server
5. Create database called `typescript-graphql-node-server`

```
createdb typescript-graphql-node-server
```

P.S.: you can change the database in the [ormconfig.json](https://github.com/imankit/typescript-node-server/blob/master/ormconfig.json)

6. [Add a user](https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e) with the username and password as `postgres`.

7. Install and start Redis

## Usage

You can start the server with `yarn start` then navigate to `http://localhost:4000` to use GraphQL Playground.

## Features

- Register - Send confirmation email
- Login
- Forgot Password
- Logout
- Cookies
- Authentication middleware
- Rate limiting
- Locking accounts
- Testing (Jest)
