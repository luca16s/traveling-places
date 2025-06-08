var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.ISO_Travel_Api>("travel-api");

builder.Build().Run();
