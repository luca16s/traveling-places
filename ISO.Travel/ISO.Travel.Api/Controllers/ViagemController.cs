namespace ISO.Travel.Api.Controllers;

using Asp.Versioning;

using AutoMapper;

using Core.Api.Controller;

using FluentValidation;

using ISO.Travel.Api.DTO;
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
[SwaggerTag("Gerenciamento de viagens.")]
public class ViagemController(
    IViagemService service,
    IMapper mapper,
    IValidator<ViagemDTO> validator
) : ApiController<long, Viagem, IViagemService>(service)
{
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [SwaggerOperation(Summary = "Realiza o cadastro de uma nova viagem.")]
    public async Task<IActionResult> CriarNovaViagem(
        [FromBody] ViagemDTO body
    )
    {
        var validationResult = await GetValidationResultAsync(
            body,
            validator
        );

        if (!validationResult.IsValid)
            return BadRequest(validationResult.Errors);

        var viagem = MapToDataModel(body, mapper);

        await service.CreateAsync(viagem);

        return Ok();
    }

    [HttpGet("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [SwaggerOperation(Summary = "Realiza a busca de uma determinada viagem pelo Id.")]
    public async Task<IActionResult> GetViagemById(
        long id
    )
    {
        var viagem = await service.GetAsync(id);

        return viagem is null ?
            NotFound($"Viagem de Id: {id} não encontrada.") :
            GetResponse<Viagem, ViagemDTO>(mapper, viagem)
            ;
    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [SwaggerOperation(Summary = "Realiza a busca de uma determinada viagem pelo Id.")]
    public async Task<IActionResult> GetAllViagens(
        int amountToSkip = 0,
        int amountToTake = 10
    )
    {
        var viagens = await service.GetAllAsync(
            amountToSkip,
            amountToTake
        );

        return viagens?.Any() != true ?
            NoContent() :
            Ok(mapper.Map<IEnumerable<ViagemDTO>>(viagens))
            ;
    }
}
