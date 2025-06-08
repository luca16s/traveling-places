namespace ISO.Travel.Api.DTO.Profiles;

using AutoMapper;

using Core.Types.Extensions;

using ISO.Travel.Api.DTO;
using ISO.Travel.Api.Models;

public class ViagemProfile : Profile
{
    public ViagemProfile()
    {
        _ = CreateMap<ViagemDTO, Viagem>()
            .ForMember(dest => dest.Id, opt => opt.Ignore())
            .ForMember(dest => dest.ValidationResult, opt => opt.Ignore())
            .ForMember(dest => dest.Destino, opt => opt.MapFrom(src => src.Destino.Trim()))
            .ForMember(dest => dest.Inicio, opt => opt.MapFrom(src => src.Ida.ToDateOnly()))
            .ForMember(dest => dest.Fim, opt => opt.MapFrom(src => src.Volta.ToDateOnly()))
            .ReverseMap()
            ;
    }
}
