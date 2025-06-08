namespace ISO.Travel.Api.Controllers;

using Asp.Versioning;

using Core.Api.Models;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[AllowAnonymous]
[ApiVersion("1")]
[Route("v1/[controller]")]
[ApiExplorerSettings(GroupName = "v1")]
[SwaggerTag("Gerenciamento de menus.")]
public class MenuController : ControllerBase
{
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [SwaggerOperation(Summary = "Retorna a lista de menus do sistema.")]
    public IActionResult GetMenu()
    {
        var menus = new List<Menu>()
        {
            new() {
                Name = "Dashboard",
                Index = 0,
                IsDisable = false,
                Icon = "dashboard",
                Route = "dashboard",
                HasSubMenu = true,
                SubMenus =
                [
                    new() {
                        Index = 0,
                        Name = "Lugares viajados",
                        IsDisable = false,
                        Icon = "travel_explore",
                        Route = "mapa"
                    }
                ]
            },
            new()
            {
                Name = "Viagens",
                Index = 1,
                IsDisable = false,
                Icon = "flight",
                Route = "viagem",
                HasSubMenu = true,
                SubMenus =
                [
                    new() {
                        Index = 0,
                        Name = "Nova Viagem",
                        IsDisable = false,
                        Icon = "flight_takeoff",
                        Route = "nova"
                    },
                    new() {
                        Index = 0,
                        Name = "Viagens",
                        IsDisable = false,
                        Icon = "travel",
                        Route = "list"
                    }
                ]
            },
            new()
            {
                Name = "Locais",
                Index = 2,
                IsDisable = false,
                Icon = "location_on",
                Route = "local",
                HasSubMenu = true,
                SubMenus =
                [
                    new() {
                        Index = 0,
                        Name = "Novo Local",
                        IsDisable = false,
                        Icon = "add_location_alt",
                        Route = "novo"
                    }
                ]
            }
        };

        return Ok(menus);
    }
}
