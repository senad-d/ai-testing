package main

import (
    "fmt"
    "os"
    "os/exec"
    "github.com/senad-d/ai-testing/02-tetris-go/project-root/pkg/game"
    "github.com/eiannone/keyboard"
)

func main() {
    g := game.NewGame()
    
    err := keyboard.Open()
    if err != nil {
        panic(err)
    }
    defer keyboard.Close()
    
    go func() {
        for {
            _, key, err := keyboard.GetKey()
            if err != nil {
                fmt.Println("Keyboard Error:", err)
                return
            }

            switch key {
            case keyboard.KeyArrowLeft:
                if g.Board.CanPlace(*g.Current, g.Current.X-1, g.Current.Y) {
                    g.Current.X--
                }
            case keyboard.KeyArrowRight:
                if g.Board.CanPlace(*g.Current, g.Current.X+1, g.Current.Y) {
                    g.Current.X++
                }
            case keyboard.KeyArrowDown:
                g.Step()
            case ' ':
                for g.Board.CanPlace(*g.Current, g.Current.X, g.Current.Y+1) {
                    g.Current.Y++
                }
            case 'q':
                os.Exit(0)
            }
        }
    }()
    
    tick := exec.Command("sh","-c","for ((i=0;;i++)); do sleep 1; echo $(($i+1)); done")
    out, _ := tick.StdoutPipe()
    tick.Start()
    
    for {
        var line string
        fmt.Fscan(out, &line)
        
        g.Step()
        printBoard(g)
        
        if g.GameOver {
            fmt.Println("Game Over!")
            break
        }
    }
}
  
func printBoard(g *game.Game) {
    fmt.Print("\033[H\033[2J")
    for _, row := range g.Board.Grid {
        for _, cell := range row {
            if cell == 0 {
                fmt.Print(" . ")
            } else {
                fmt.Print(" # ")
            }
        }
        fmt.Println()
    }
    fmt.Printf("Score: %d\n", g.Score)
}