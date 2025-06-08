namespace ISO.Travel.Api.Services;

using Core.Services;

using ISO.Travel.Api.Interfaces.Data.Repositories;
using ISO.Travel.Api.Interfaces.Services;
using ISO.Travel.Api.Models;

public class LocalService(
    ILocalRepository repository
) : Service<long, Local, ILocalRepository>(
    repository
), ILocalService
{ }
