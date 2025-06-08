namespace ISO.Travel.Api.Data;

using Core.Data;

using ISO.Travel.Api.Data.Context;
using ISO.Travel.Api.Interfaces.Data;

public class TravelUnitOfWork(
    TravelContext context
) : UnitOfWork<TravelContext>(context), ITravelUnitOfWork
{ }
