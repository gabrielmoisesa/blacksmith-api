# Blacksmith API ⚒

The Blacksmith API is an Express-based application designed for efficient store management, providing comprehensive functionality for handling products, orders, and user-related operations.

<details>
  <summary>Table of Contents</summary>

  1. [Features](#features)
  2. [Getting Started](#getting-started)
      - [Prerequisites](#prerequisites)
      - [Installation and Running](#installation-and-running)
      - [Testing](#testing)
  3. [Tech Stack](#tech-stack)
  4. [API Reference](#api-reference)
      - [Login](#login)
      - [Products](#products)
      - [Orders](#orders)
  5. [Acknowledgments](#acknowledgments)
  6. [License](#license)
</details>

## Features

- **Product Crafting:** Create and manage a catalog of custom medieval items, such as personalized swords.
- **Order Processing:** Create and view orders.
- **User Authentication:** JWT authentication for selected routes, ensuring a protected user experience.
- **Testing:** Unit and integration tests for all routes, services and controllers, ensuring a reliable and robust application.

## Getting Started

Follow the instructions below to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (>= 16.0.0)
- [Docker](https://www.docker.com/) 

### Installation and Running

1. Clone the repository:

```bash
git clone git@github.com:gabrielmoisesa/blacksmith-api.git
```

2. Navigate to the project directory:

```bash
cd blacksmith-api
```

3. Start and build the Docker containers:

```bash
docker-compose up -d --build
```

4. Run the database reset script to create the database and seed it with some data:

```bash
npm run db:reset
```

5. Access the API at [http://localhost:3001](http://localhost:3001/products).

### Testing

- ```npm test``` - Runs the test suite.
- ```npm run test:coverage``` - Runs the test suite and generates a coverage report.

> Coverage Report:

![Coverage Report](./images/coverage-report-2024-01-26%2021-59-24.png)

## Tech Stack

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Sequelize ORM](https://sequelize.org/)

## API Reference

### Login:

```POST /login``` - Authenticates a user and returns a JWT token.

### Products:

```GET /products``` - Returns a list of all products.

```POST /products``` - Creates a new product.

### Orders:

```GET /orders``` - Returns a list of all orders.

```POST /orders``` - Creates a new order. **Requires authentication.**

## Acknowledgments

- [Trybe](https://github.com/betrybe) - Project setup and requirements.

## License

[MIT](LICENSE)