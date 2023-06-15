namespace PicrossWorld.Features.PicrossGenerator;

using Models.Picross;

public class PicrossGenerator
{
    public PicrossGame Generate()
    {
        var game = new PicrossGame
        {
            Board = new Board
            {
                Width = 10,
                Height = 10,
                ColumnHints = new List<ColumnHint>(),
                RowHints = new List<RowHint>(),
                Squares = new List<List<Square>>()
            }
        };

        return game;
    }
}