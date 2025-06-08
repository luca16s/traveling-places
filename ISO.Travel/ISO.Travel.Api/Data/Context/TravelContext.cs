namespace ISO.Travel.Api.Data.Context;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

using System.Reflection;

internal class TravelFactory : IDesignTimeDbContextFactory<TravelContext>
{
    public TravelContext CreateDbContext(
        string[] args
    ) => new(
        new DbContextOptionsBuilder<TravelContext>()
        .UseSqlServer(
            "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Travel;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False"
        ).Options
    );
}

public class TravelContext : DbContext
{
    public static string DefaultSchema => "TRAVEL";

    public TravelContext()
    { }

    public TravelContext(
        DbContextOptions<TravelContext> options
    ) : base(options)
    { }

    protected override void OnModelCreating(
        ModelBuilder builder
    )
    {
        base.OnModelCreating(builder);
        var assembly = Assembly.GetExecutingAssembly();
        _ = builder.ApplyConfigurationsFromAssembly(assembly);
    }

    protected override void OnConfiguring(
        DbContextOptionsBuilder optionsBuilder
    )
    {
        if (!optionsBuilder.IsConfigured)
        {
            _ = optionsBuilder
                .UseLazyLoadingProxies()
                .UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Travel;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False");
        }

        base.OnConfiguring(optionsBuilder);
    }
}
