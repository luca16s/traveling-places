namespace ISO.Travel.Api.Data.Config;

using Core.Data;

using ISO.Travel.Api.Models;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class LocalConfiguration : ConfigurationBase<long, Local>
{
    public override void Configure(
        EntityTypeBuilder<Local> builder
    )
    {
        base.Configure(builder);

        _ = builder.ToTable("LOCAL");

        _ = builder.Property(p => p.Id)
            .HasColumnName("LOCL_SQ_LOCAL")
            .ValueGeneratedOnAdd()
            .IsRequired();

        _ = builder.Property(p => p.Nome)
            .HasColumnName("LOCL_NM_LOCAL")
            .HasMaxLength(100)
            .IsRequired();

        _ = builder.Property(p => p.TipoLocal)
            .HasColumnName("LOCL_IN_LOCAL")
            .IsRequired();

        _ = builder.OwnsOne(p => p.Endereco, endereco => 
        {
            _ = endereco.ToTable("ENDERECO");

            _ = endereco.Property(e => e.Logradouro)
                .HasColumnName("LOCL_TX_LOGRADOURO")
                .HasMaxLength(200)
                .IsRequired();
            _ = endereco.Property(e => e.Numero)
                .HasColumnName("LOCL_NU_NUMERO")
                .HasMaxLength(10)
                .IsRequired();
            _ = endereco.Property(e => e.Bairro)
                .HasColumnName("LOCL_TX_BAIRRO")
                .HasMaxLength(100)
                .IsRequired();
            _ = endereco.Property(e => e.CEP)
                .HasColumnName("LOCL_NU_CEP")
                .HasMaxLength(10)
                .IsRequired();
            _ = endereco.Property(e => e.Referencia)
                .HasColumnName("LOCL_TX_REFERENCIA")
                .HasMaxLength(200)
                .IsRequired();

            _ = endereco.OwnsOne(endereco => endereco.Coordenadas, p =>
            {
                _ = p.ToTable("COORDENADA");

                _ = p.Property(c => c.Latitude)
                    .HasColumnName("CORD_NU_LATITUDE")
                    .IsRequired();
                _ = p.Property(c => c.Longitude)
                    .HasColumnName("CORD_NU_LONGITUDE")
                    .IsRequired();
            });

            _ = endereco.OwnsOne(endereco => endereco.Pais, pais =>
            {
                _ = pais.ToTable("PAIS");

                _ = pais.Property(c => c.Nome)
                    .HasColumnName("PAIS_NM_PAIS")
                    .HasMaxLength(100)
                    .IsRequired();

                _ = pais.Property(c => c.Sigla)
                    .HasColumnName("PAIS_SG_PAIS")
                    .HasMaxLength(100)
                    .IsRequired();

                _ = pais.OwnsOne(pais => pais.Estado, estado =>
                {
                    _ = estado.ToTable("ESTADO");
                    _ = estado.Property(e => e.Nome)
                        .HasColumnName("EST_NM_ESTADO")
                        .HasMaxLength(100)
                        .IsRequired();
                    _ = estado.Property(e => e.Sigla)
                        .HasColumnName("EST_SG_ESTADO")
                        .HasMaxLength(2)
                        .IsRequired();

                    _ = estado.OwnsOne(estado => estado.Cidade, cidade =>
                    {
                        _ = cidade.ToTable("CIDADE");

                        _ = cidade.Property(e => e.Nome)
                            .HasColumnName("CIDE_NM_CIDADE")
                            .HasMaxLength(100)
                            .IsRequired();
                    });
                });
            });
        });
    }
}
