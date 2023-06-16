namespace PicrossWorld.Features.PicrossGenerator;

using Models.Picross;

public class PicrossGenerator
{
    public async Task<PicrossGame> Generate(int width, int height)
    {
        var game = new PicrossGame
        {
            Board = new Board
            {
                Width = width,
                Height = height,
                ColumnHints = new List<ColumnHint>(),
                RowHints = new List<RowHint>(),
                Squares = await BuildBoardState()
            }
        };

        return game;
        
        #region Generate Random Squares

        async Task<List<List<Square>>> BuildBoardState()
        {
            var squares = new List<List<Square>>();

            var square = new Square();
            var row = new List<Square>();

            for(var h = 0; h < height; h++)
            {
                for(var w = 0; w < width; w++)
                {
                    square = await BuildSquare(h, w);
                    row.Add(square);
                }
                squares.Add(row);
                row = new List<Square>();
            }
            
            return squares;

            async Task<Square> BuildSquare(int height, int width)
            {
                return new Square
                {
                    XPos = width,
                    YPos = height,
                    State = GetState()
                };

                SquareState GetState()
                {
                    return (SquareState) Random.Shared.Next(0, 2);
                }
            }
        }
        
        #endregion
    
        #region Build Hints
    
        #endregion
    }
}