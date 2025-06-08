namespace ISO.Travel.Api.Models;

using Core.Models;

using ISO.Travel.Api.Enums;

public class Local : Entity<long>
{
    public string Nome { get; set; } = null!;
    public TipoLocal TipoLocal { get; set; }
    public Endereco Endereco { get; set; } = null!;
}
