namespace ISO.Travel.Api.Services;

using Core.Services;

using ISO.Travel.Api.Interfaces.Data.Repositories;
using ISO.Travel.Api.Interfaces.Services;
using ISO.Travel.Api.Models;

public class ViagemService(
    IViagemRepository repository
) : Service<long, Viagem, IViagemRepository>(
    repository
), IViagemService
{ }
