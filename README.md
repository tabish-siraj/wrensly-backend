# Wrensly Backend

Wrensly is a social media application backend with features similar to Twitter.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [Prisma](https://www.prisma.io/)

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/tabish-siraj/wrensly-backend.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Set up your `.env` file with the database connection string.
    ```
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
    ```
4.  Run database migrations
    ```sh
    npx prisma migrate dev
    ```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode using `nodemon`.

### `npm start`

Runs the app from the `dist` folder.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run postinstall`

Generates Prisma client.

## API Endpoints

The API includes endpoints for:

- **Authentication**: User registration, login, and password management.
- **Users**: Get user profiles, follow/unfollow users.
- **Posts**: Create, read, update, and delete posts.
- **Comments**: Add comments to posts.
- **Likes**: Like and unlike posts.
- **Bookmarks**: Bookmark posts.
- **Feed**: Get a personalized feed of posts.

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Zod](https://zod.dev/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m '''Add some AmazingFeature'''`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the ISC License. See `LICENSE` for more information.
