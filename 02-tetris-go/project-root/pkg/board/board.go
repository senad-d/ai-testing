package board

type Board struct {
    Grid [][]int
}

func NewBoard(rows, cols int) *Board {
    grid := make([][]int, rows)
    for i := range grid {
        grid[i] = make([]int, cols)
    }
    return &Board{Grid: grid}
}

func (b *Board) CanPlace(t Tetromino, x, y int) bool {
    for i, row := range t.Shape {
        for j, cell := range row {
            if cell == 1 {
                newX, newY := x+j, y+i
                if newY >= len(b.Grid) || newX >= len(b.Grid[0]) || b.Grid[newY][newX] == 1 {
                    return false
                }
            }
        }
    }
    return true
}

func (b *Board) PlaceTetromino(t Tetromino) {
    for i, row := range t.Shape {
        for j, cell := range row {
            if cell == 1 {
                b.Grid[t.Y+i][t.X+j] = 1
            }
        }
    }
}

func (b *Board) ClearLines() int {
    linesCleared := 0
    for y := len(b.Grid) - 1; y >= 0; y-- {
        fullRow := true
        for _, cell := range b.Grid[y] {
            if cell == 0 {
                fullRow = false
                break
            }
        }
        if fullRow {
            b.Grid = append(b.Grid[:y], b.Grid[y+1:]...)
            newRow := make([]int, len(b.Grid[0]))
            b.Grid = append([][]int{newRow}, b.Grid...)
            linesCleared++
        }
    }
    return linesCleared
}