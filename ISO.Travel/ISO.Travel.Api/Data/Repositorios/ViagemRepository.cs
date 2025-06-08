namespace ISO.Travel.Api.Data.Repositorios;

using Core.Data.Repositories;

using ISO.Travel.Api.Data.Context;
using ISO.Travel.Api.Interfaces.Data;
using ISO.Travel.Api.Interfaces.Data.Repositories;
using ISO.Travel.Api.Models;

public class ViagemRepository(
    TravelContext context,
    ITravelUnitOfWork unitOfWork
) : Repository<long, Viagem, TravelContext>(
    context,
    unitOfWork
), IViagemRepository
{ }
