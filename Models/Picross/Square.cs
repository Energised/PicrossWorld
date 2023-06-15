namespace PicrossWorld.Models.Picross;

public class Square
{
    public SquareState State { get; set; }
}

public enum SquareState
{
    EMPTY = 1,
    FILLED = 2,
    CROSSED = 3,
    GUESS = 4
}