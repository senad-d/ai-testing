# Tetris Game in Go

## Project Overview

This project implements a classic Tetris game using Go. The game captures the core gameplay mechanics including piece movement, rotation, line clearing, scoring, and level progression.

## Setup Instructions

### Prerequisites

- Go >= 1.18
- Docker (optional, for containerized environment)

### Local Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/tetris-go.git
   cd tetris-go
   ```

2. Install dependencies:

   ```sh
   go mod tidy
   ```

3. Run the game:

   ```sh
   go run cmd/tetris/main.go
   ```

### Docker Setup

1. Build the Docker image:

   ```sh
   docker build -t tetris-go .
   ```

2. Run the container:

   ```sh
   docker run --rm -it tetris-go
   ```

## Game Controls

- Arrow Left: Move piece left.
- Arrow Right: Move piece right.
- Arrow Down: Step down.
- Space: Drop piece instantly.
- q: Quit game.

## Testing

Run tests using:

```sh
go test ./...
```

## Future Work

- Improve the user interface with a graphical frontend.
- Add sound effects and background music.
- Implement save and load game functionality.

## Authors

- Your Name (@your-username)