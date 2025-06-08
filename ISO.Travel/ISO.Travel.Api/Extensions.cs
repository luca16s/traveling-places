namespace ISO.Travel.Api;

using Core.Api.Extensions;
using Core.Api.Models;

using FluentValidation;

using ISO.Travel.Api.Data;
using ISO.Travel.Api.Data.Context;
using ISO.Travel.Api.Data.Repositorios;
using ISO.Travel.Api.Interfaces.Data;
using ISO.Travel.Api.Interfaces.Data.Repositories;
using ISO.Travel.Api.Interfaces.Services;
using ISO.Travel.Api.Services;

using System.Reflection;

public static class Extensions
{
    public static IServiceCollection AddDatabase(
        this IServiceCollection services,
        Settings settings
    )
    {
        return services
            .AddScoped<TravelContext>()
            .AddScoped<ITravelUnitOfWork, TravelUnitOfWork>()
            .AddContextConfiguration<TravelContext>(TravelContext.DefaultSchema, settings)
            ;
    }

    public static IServiceCollection AddServices
    (
        this IServiceCollection services
    )
    {
        return services
            .AddScoped<ILocalService, LocalService>()
            .AddScoped<IViagemService, ViagemService>()
            ;
    }

    public static IServiceCollection AddRepositories
    (
        this IServiceCollection services
    )
    {
        return services
            .AddScoped<ILocalRepository, LocalRepository>()
            .AddScoped<IViagemRepository, ViagemRepository>()
            ;
    }

    public static IServiceCollection AddValidators(
        this IServiceCollection services
    )
    {
        return services
            .AddValidatorsFromAssembly(Assembly.GetExecutingAssembly())
            ;
    }

    public static IServiceCollection AddMapper(
        this IServiceCollection services
    )
    {
        return services
            .AddAutoMapper(cfg => cfg.AddMaps(Assembly.GetExecutingAssembly()))
            ;
    }
}
