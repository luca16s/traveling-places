namespace ISO.Travel.Api.Data.Repositorios;

using Core.Data.Repositories;

using ISO.Travel.Api.Data.Context;
using ISO.Travel.Api.Interfaces.Data;
using ISO.Travel.Api.Interfaces.Data.Repositories;
using ISO.Travel.Api.Models;

public class LocalRepository(
    TravelContext context,
    ITravelUnitOfWork unitOfWork
) : Repository<long, Local, TravelContext>(
    context,
    unitOfWork
), ILocalRepository
{ }
