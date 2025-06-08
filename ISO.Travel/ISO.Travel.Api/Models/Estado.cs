namespace ISO.Travel.Api.Models;
public class Estado
{
    public string Nome { get; set; } = null!;
    public string Sigla { get; set; } = null!;
    public Cidade Cidade { get; set; } = null!;
}
