# Abu Dhabi Chess Club

eChess implementation for Abu Dhabi Chess Club

## Quick start

Install dependencies

```bash
npm install
```

Copy the example environment variables and set them

```bash
cp .example.env .env
```

Start the local server

```bash
npm run dev
```

## Core updates

The `@chesscoders/echess` package has the core components of this project.

Copy the code below into the terminal to upgrade the `echess` core components:

```bash
# load all variables from .env file
set -a && source .env && set +a

# update the package
npm i @chesscoders/echess@latest

# also update its alias
npm i echess@npm:@chesscoders/echess@latest
```
