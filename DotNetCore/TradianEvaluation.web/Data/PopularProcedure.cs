using TradianEvaluation.web.Data.Enums;

namespace TradianEvaluation.web.Data;

public class PopularProcedure : BaseEntity
{
    public string Name { get; set; }
    public string Description { get; set; }
    public string Image { get; set; }
    public ProcedureType ProcedureType { get; set; }
}