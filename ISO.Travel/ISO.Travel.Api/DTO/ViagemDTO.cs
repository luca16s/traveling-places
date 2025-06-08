namespace ISO.Travel.Api.DTO;
public class ViagemDTO
{
    public string Destino { get; set; } = string.Empty;
    public DateTime Ida { get; set; }
    public DateTime Volta { get; set; }
}
