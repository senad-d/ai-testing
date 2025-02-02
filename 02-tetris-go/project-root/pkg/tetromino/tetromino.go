package tetromino

type Tetromino struct {
    Shape   [][]int
    X       int
    Y       int
    Color   string
}

var Shapes = map[string][][]int{
    "I": { {1, 1, 1, 1}},
    "O": { {1, 1}, {1, 1}},
    "T": { {0, 1, 0}, {1, 1, 1}},
    "L": { {0, 0, 1}, {1, 1, 1}},
    "J": { {1, 0, 0}, {1, 1, 1}},
    "Z": { {1, 1, 0}, {0, 1, 1}},
    "S": { {0, 1, 1}, {1, 1, 0}},
}

func NewTetromino(shape string) *Tetromino {
    return &Tetromino{
        Shape: Shapes[shape],
        X:     0,
        Y:     0,
        Color: "default",
    }
}

func RotateClockwise(t *Tetromino) *Tetromino {
    n := len(t.Shape)
    m := len(t.Shape[0])
    rotated := make([][]int, m)
    
    for i := range rotated {
        rotated[i] = make([]int, n)
        for j := 0; j < n; j++ {
            rotated[i][j] = t.Shape[n-j-1][i]
        }
    }
    t.Shape = rotated
    return t
}