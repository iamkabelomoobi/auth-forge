# AuthForge API

🔒 **AuthForge API** is a cutting-edge authentication service designed to build and reinforce secure access mechanisms for applications and digital platforms.

## Features

- **User Registration**: Securely register new users.
- **User Login**: Authenticate users and manage sessions.
- **Password Recovery**: Support for password reset workflows.
- **Session Management**: Handle user logins and logouts effectively.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Recommended version: 14.x or higher)
- npm (Node Package Manager)
- Git

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/the-berufegoru/auth-forge.git
cd auth-forge
```

2. **Install dependencies:**

```bash
npm i
```

3 **Set up environment variables:**

> Create a .env file in the project root and add the necessary configuration values:

```bash
# DATABASE CONFIG
MYSQL_USERNAME="username"
MYSQL_PASSWORD="database"
MYSQL_DATABASE="auth-forge"
MYSQL_HOST="127.0.0.1"
# LOGGER CONFIG
LOGTAIL_ACCESS_TOKEN="your-logtail-access-token"
```

4 **Start the development server:**

```bash
npm start
```

## Usage

### API Endpoints

- **POST /login**: Authenticate a user.
- **POST /register**: Register a new user.
- **POST /forgot-password**: Initiate a password recovery process.
- **POST /reset-password**: Reset the user's password.
- **POST /logout**: Log out a user.


## Contributing

We welcome contributions to the AuthForge API! Here's how you can help:

1. **Fork** the repository on GitHub.
2. **Clone** the project to your own machine.
3. **Commit** changes to your own branch.
4. **Push** your work back up to your fork.
5. **Submit a Pull request** so that we can review your changes.

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
