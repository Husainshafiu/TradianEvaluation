namespace TradianEvaluation.web.Data;

public class News : BaseEntity
{
    public string Title { get; set; }
    public string Description { get; set; }
    public string ImageUrl { get; set; }
    public DateTime Date { get; set; }

    public News()
    {
        Date = DateTime.Now;
    }
}