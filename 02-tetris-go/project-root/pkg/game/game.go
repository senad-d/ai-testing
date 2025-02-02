package game

import (
    "github.com/senad-d/ai-testing/02-tetris-go/project-root/pkg/board"
    "github.com/senad-d/ai-testing/02-tetris-go/project-root/pkg/tetromino"
)

type Game struct {
    Board     *board.Board
    Current   *tetromino.Tetromino
    Score     int
    Level     int
    GameOver  bool
}

func NewGame() *Game {
    return &Game{
        Board: board.NewBoard(20, 10),
        Current: tetromino.NewTetromino("I"),
        Score: 0,
        Level: 1,
        GameOver: false,
    }
}

func (g *Game) Step() {
    // Try to move current piece down
    if g.Board.CanPlace(*g.Current, g.Current.X, g.Current.Y+1) {
        g.Current.Y++
    } else {
        g.Board.PlaceTetromino(*g.Current)
        lines := g.Board.ClearLines()
        g.Score += lines * 100
        g.Level = g.Score / 1000 + 1
        
        // Spawn a new piece
        g.Current = tetromino.NewTetromino("I")
        if !g.Board.CanPlace(*g.Current, g.Current.X, g.Current.Y) {
            g.GameOver = true
        }
    }
}