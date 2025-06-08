namespace ISO.Travel.Api.DTO.Validators;

using FluentValidation;

using ISO.Travel.Api.DTO;

public class ViagemDTOValidator : AbstractValidator<ViagemDTO>
{
    public ViagemDTOValidator()
    {
        _ = RuleFor(v => v.Destino)
            .NotEmpty()
            .WithMessage("O nome da viagem é obrigatório.")
            .Length(3, 100)
            .WithMessage("O nome deve ter entre 3 e 100 caracteres.")
            ;

        _ = RuleFor(v => v.Ida)
            .NotEmpty()
            .WithMessage("A data de início é obrigatória.")
            ;

        _ = RuleFor(v => v.Volta)
            .NotEmpty()
            .WithMessage("A data de fim é obrigatória.")
            .GreaterThanOrEqualTo(v => v.Ida)
            .WithMessage("A data de fim deve ser maior ou igual à data de início.")
            ;
    }
}