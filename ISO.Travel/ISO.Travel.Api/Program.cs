using Asp.Versioning;

using Core.Api.Extensions;
using Core.Api.Middlewares;
using Core.Api.Models;

using ISO.Travel.Api;

using Microsoft.AspNetCore.Authentication.JwtBearer;

string? env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
IConfiguration config = new ConfigurationBuilder()
   .SetBasePath(Directory.GetCurrentDirectory())
   .AddEnvironmentVariables()
   .AddJsonFile($"appsettings.{env}.json", false, true)
   .Build();

var builder = WebApplication.CreateBuilder(args);

Settings settings = new();
builder.Configuration
    .GetRequiredSection(nameof(Settings))
    .Bind(settings);

builder.Services.AddServices();
builder.Services.AddRepositories();
builder.Services.AddDatabase(settings);
builder.Services.AddSingleton(sp => settings);

builder.Services.AddController();
builder.Services.AddOpenApi();
builder.Services.AddSwaggerGen();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddJwtConfiguration(settings);
builder.Services.AddCorsConfiguration(settings);
builder.Services.AddSwaggerConfiguration(settings);
builder.Services.AddApiVersioning(o => {
    o.ReportApiVersions = true;
    o.AssumeDefaultVersionWhenUnspecified = true;
    o.ApiVersionReader = new UrlSegmentApiVersionReader();
    o.DefaultApiVersion = new ApiVersion(1, 0);
}).AddApiExplorer(options => {
    options.GroupNameFormat = "'v'VVV";
    options.SubstituteApiVersionInUrl = true;
});

builder.Services.AddHttpClient();
builder.Services
    .AddMapper()
    .AddValidators()
    ;

var app = builder.Build();

app.UsePathBase("/api");

if (app.Environment.IsDevelopment())
{
    _ = app.MapOpenApi();
    _ = app.UseDeveloperExceptionPage();
}

app.Swagger(settings);
app.UseErrorHandling();
app.UseAuthenticationScheme(JwtBearerDefaults.AuthenticationScheme);
app.UseHttpsRedirection();
app.UseRouting();
app.UseAuthorization();
app.UseCors(settings.CorsPolicyName);

app.NewVersionedApi("Travel");

app.UseEndpoints(endpoints =>
{
    _ = endpoints
    .MapControllers()
    .RequireCors(settings.CorsPolicyName);
});

app.Run();
