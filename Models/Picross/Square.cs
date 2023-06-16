namespace PicrossWorld.Models.Picross;

public class Square
{
    public SquareState State { get; set; }
    public int XPos { get; set; }
    public int YPos { get; set; }
}

public enum SquareState
{
    EMPTY = 0,
    FILLED = 1,
    CROSSED = 2,
    GUESS = 3
}