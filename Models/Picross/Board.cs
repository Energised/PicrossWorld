namespace PicrossWorld.Models.Picross;

public class Board
{
    public int Width { get; set; }
    public int Height { get; set; }
    public List<RowHint> RowHints { get; set; }
    public List<ColumnHint> ColumnHints { get; set; }
    
    public List<List<Square>> Squares { get; set; }
}