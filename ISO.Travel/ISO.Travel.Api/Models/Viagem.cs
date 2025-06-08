namespace ISO.Travel.Api.Models;

using Core.Models;

public class Viagem : Entity<long>
{
    public string Destino { get; set; } = null!;

    public DateOnly Inicio { get; set; }

    public DateOnly Fim { get; set; }

    public long GetTotalDiarias() => (
        Fim.ToDateTime(TimeOnly.MinValue) - Inicio.ToDateTime(TimeOnly.MinValue)
    ).Days + 1;
}
