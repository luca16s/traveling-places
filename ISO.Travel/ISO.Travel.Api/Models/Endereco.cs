namespace ISO.Travel.Api.Models;
public class Endereco
{
    public string Logradouro { get; set; } = null!;
    public string Numero { get; set; } = null!;
    public string Complemento { get; set; } = null!;
    public string CEP { get; set; } = null!;
    public string Bairro { get; set; } = null!;
    public string Referencia { get; set; } = null!;

    public Pais Pais { get; set; } = null!;
    public Coordenada Coordenadas { get; set; } = null!;
}
