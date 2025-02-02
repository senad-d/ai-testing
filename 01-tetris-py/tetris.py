import pygame
import random
import sys

# Constants
SCREEN_WIDTH = 300
SCREEN_HEIGHT = 600
GRID_SIZE = 30
GRID_WIDTH = SCREEN_WIDTH // GRID_SIZE
GRID_HEIGHT = SCREEN_HEIGHT // GRID_SIZE
GAME_SPEED = 5

# Tetromino shapes and colors
SHAPES = [
    [[1, 1, 1, 1]],  # I
    [[1, 1], [1, 1]],  # O
    [[0, 1, 0], [1, 1, 1]],  # T
    [[0, 1, 1], [1, 1, 0]],  # S
    [[1, 1, 0], [0, 1, 1]],  # Z
    [[1, 0, 0], [1, 1, 1]],  # J
    [[0, 0, 1], [1, 1, 1]]   # L
]

COLORS = [
    (0, 255, 255),  # I
    (255, 255, 0),  # O
    (128, 0, 128),  # T
    (0, 255, 0),    # S
    (255, 0, 0),    # Z
    (0, 0, 255),    # J
    (255, 165, 0)   # L
]

class Tetromino:
    """Class representing a Tetromino piece in Tetris."""
    def __init__(self, shape_index):
        self.shape = SHAPES[shape_index]
        self.color = COLORS[shape_index]
        self.rotation = 0
        self.x = GRID_WIDTH // 2 - len(self.shape[0]) // 2
        self.y = 0

    def rotate(self):
        """Rotate the Tetromino 90 degrees clockwise."""
        self.shape = [list(row) for row in zip(*self.shape[::-1])]

    def draw(self, surface):
        """Draw the Tetromino on the given surface."""
        for i, row in enumerate(self.shape):
            for j, cell in enumerate(row):
                if cell:
                    pygame.draw.rect(surface, self.color, (self.x * GRID_SIZE + j * GRID_SIZE, self.y * GRID_SIZE + i * GRID_SIZE, GRID_SIZE, GRID_SIZE))

def check_collision(board, shape, offset):
    """Check if the given shape at offset collides with the board."""
    offset_x, offset_y = offset
    for y, row in enumerate(shape):
        for x, cell in enumerate(row):
            if cell and (x + offset_x < 0 or x + offset_x >= GRID_WIDTH or y + offset_y >= GRID_HEIGHT or board[y + offset_y][x + offset_x]):
                return True
    return False

def join_matrices(board, shape, offset):
    """Join the shape with the board at the given offset."""
    offset_x, offset_y = offset
    for y, row in enumerate(shape):
        for x, cell in enumerate(row):
            if cell:
                board[y + offset_y][x + offset_x] = cell
    return board

def clear_lines(board):
    """Clear filled lines from the board and return the new board and number of lines cleared."""
    new_board = [[0] * GRID_WIDTH for _ in range(GRID_HEIGHT)]
    new_row_idx = GRID_HEIGHT - 1
    filled_lines = 0

    for y in range(GRID_HEIGHT - 1, -1, -1):
        if 0 not in board[y]:
            filled_lines += 1
        else:
            new_board[new_row_idx] = board[y]
            new_row_idx -= 1

    return new_board, filled_lines

def draw_mesh(surface):
    """Draw a grid mesh on the given surface."""
    for x in range(0, SCREEN_WIDTH, GRID_SIZE):
        pygame.draw.line(surface, (128, 128, 128), (x, 0), (x, SCREEN_HEIGHT))
    for y in range(0, SCREEN_HEIGHT, GRID_SIZE):
        pygame.draw.line(surface, (128, 128, 128), (0, y), (SCREEN_WIDTH, y))

def draw_text_centered(surface, text, font, color, rect):
    """Draw a text centered in the given rectangle on the surface."""
    text_surface = font.render(text, True, color)
    text_rect = text_surface.get_rect(center=rect.center)
    surface.blit(text_surface, text_rect)

def game_over_screen(screen, score):
    """Display game over screen with score."""
    screen.fill((0, 0, 0))
    draw_mesh(screen)
    game_over_font = pygame.font.SysFont('Arial', 40)
    draw_text_centered(screen, "Game Over", game_over_font, (255, 255, 255), screen.get_rect())
    score_text = f"Your Score: {score}"
    draw_text_centered(screen, score_text, pygame.font.SysFont('Arial', 20), (255, 255, 255), pygame.Rect(0, SCREEN_HEIGHT // 2 + 50, SCREEN_WIDTH, 30))
    retry_text = "Press R to Retry"
    draw_text_centered(screen, retry_text, pygame.font.SysFont('Arial', 20), (255, 255, 255), pygame.Rect(0, SCREEN_HEIGHT // 2 + 100, SCREEN_WIDTH, 30))
    pygame.display.flip()

def handle_input_event(event, current_tetromino, grid):
    """Handle user input events."""
    if event.type == pygame.KEYDOWN:
        if event.key == pygame.K_LEFT:
            current_tetromino.x -= 1
            if check_collision(grid, current_tetromino.shape, (current_tetromino.x, current_tetromino.y)):
                current_tetromino.x += 1
        elif event.key == pygame.K_RIGHT:
            current_tetromino.x += 1
            if check_collision(grid, current_tetromino.shape, (current_tetromino.x, current_tetromino.y)):
                current_tetromino.x -= 1
        elif event.key == pygame.K_DOWN:
            current_tetromino.y += 1
            if check_collision(grid, current_tetromino.shape, (current_tetromino.x, current_tetromino.y)):
                current_tetromino.y -= 1
        elif event.key == pygame.K_UP:
            current_tetromino.rotate()
            if check_collision(grid, current_tetromino.shape, (current_tetromino.x, current_tetromino.y)):
                for _ in range(3):  # Rotate back
                    current_tetromino.rotate()

def main_game():
    """Main function to run the Tetris game."""
    # Initialize Pygame
    pygame.init()
    screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
    pygame.display.set_caption("Tetris")
    clock = pygame.time.Clock()
    font = pygame.font.SysFont('Arial', 20)

    grid = [[0] * GRID_WIDTH for _ in range(GRID_HEIGHT)]
    current_tetromino = Tetromino(random.randint(0, len(SHAPES) - 1))
    score = 0
    running = True
    game_over = False

    while running:
        screen.fill((0, 0, 0))
        draw_mesh(screen)

        if game_over:
            game_over_screen(screen, score)
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    running = False
                elif event.type == pygame.KEYDOWN and event.key == pygame.K_r:
                    main_game()  # Restart the game
            continue

        # Event handling
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            else:
                handle_input_event(event, current_tetromino, grid)

        current_tetromino.y += 1
        if check_collision(grid, current_tetromino.shape, (current_tetromino.x, current_tetromino.y)):
            current_tetromino.y -= 1
            grid = join_matrices(grid, current_tetromino.shape, (current_tetromino.x, current_tetromino.y))
            grid, cleared_lines = clear_lines(grid)
            score += cleared_lines * 100
            current_tetromino = Tetromino(random.randint(0, len(SHAPES) - 1))
            if check_collision(grid, current_tetromino.shape, (current_tetromino.x, current_tetromino.y)):
                game_over = True

        # Draw the grid and tetromino
        for y, row in enumerate(grid):
            for x, cell in enumerate(row):
                if cell:
                    pygame.draw.rect(screen, COLORS[cell - 1], (x * GRID_SIZE, y * GRID_SIZE, GRID_SIZE, GRID_SIZE))

        current_tetromino.draw(screen)
        
        # Display score
        score_text = font.render(f"Score: {score}", True, (255, 255, 255))
        screen.blit(score_text, (5, 5))
        
        pygame.display.flip()
        clock.tick(GAME_SPEED)

    pygame.quit()
    sys.exit()

if __name__ == "__main__":
    main_game()