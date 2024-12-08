using System.ComponentModel.DataAnnotations;

namespace TradianEvaluation.web.Data;

public class BaseEntity
{
    [Key]
    public int Id { get; set; }
    public DateTime CreatedOn { get; set; }
    public DateTime ModifiedOn { get; set; }
}