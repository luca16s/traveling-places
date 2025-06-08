namespace ISO.Travel.Api.Data.Config;

using Core.Data;

using ISO.Travel.Api.Models;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class ViagemConfiguration : ConfigurationBase<long, Viagem>
{
    public override void Configure(
        EntityTypeBuilder<Viagem> builder
    )
    {
        base.Configure(builder);

        _ = builder.ToTable("VIAGEM");

        _ = builder.Property(p => p.Id)
            .HasColumnName("VIGM_SQ_VIAGEM")
            .ValueGeneratedOnAdd()
            .IsRequired();

        _ = builder.Property(p => p.Destino)
            .HasColumnName("VIGM_NM_DESTINO")
            .HasMaxLength(100)
            .IsRequired();

        _ = builder.Property(p => p.Inicio)
            .HasColumnName("VIGM_DT_INICIO")
            .IsRequired();

        _ = builder.Property(p => p.Fim)
            .HasColumnName("VIGM_DT_FIM")
            .IsRequired();
    }
}
