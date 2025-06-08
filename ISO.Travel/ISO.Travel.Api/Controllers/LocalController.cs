namespace ISO.Travel.Api.Controllers;

using Asp.Versioning;

using Core.Api.Controller;

using ISO.Travel.Api.Interfaces.Services;
using ISO.Travel.Api.Models;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[AllowAnonymous]
[ApiVersion("1")]
[Route("v1/[controller]")]
[ApiExplorerSettings(GroupName = "v1")]
[SwaggerTag("Controladora de locais visitados.")]
public class LocalController(
    ILocalService service
) : ApiController<long, Local, ILocalService>(service)
{
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [SwaggerOperation(Summary = "Realiza o cadastro de um novo local.")]
    public IActionResult CreateLocal([FromBody] Local local)
    {
        if (local is null)
        {
            return BadRequest("Local não pode ser nulo.");
        }
        // Aqui você implementaria a lógica para criar um novo local.
        // Por exemplo, poderia chamar um serviço que salva o local no banco de dados.
        return new OkObjectResult(new { Message = "Local criado com sucesso." });
    }
}
