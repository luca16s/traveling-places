import { Icon } from '@enums';

export enum TipoLocal {
  CORACAO = 0,
  CASA = 1,
  HOTEL = 2,
  MUSEU = 3,
  RESTAURANTE = 4,
  ESTRELA = 5,
  PARQUE_NATURAL = 6,
  PIZZARIA = 7,
  AEROPORTO = 8,
  LOJA = 9,
  PRAIA = 10,
  ACADEMIA = 11,
}

export const TipoLocalNome = new Map<TipoLocal, string>([
  [TipoLocal.CASA, 'Casa'],
  [TipoLocal.LOJA, 'Loja'],
  [TipoLocal.HOTEL, 'Hotel'],
  [TipoLocal.MUSEU, 'Museu'],
  [TipoLocal.PARQUE_NATURAL, 'Parque'],
  [TipoLocal.PIZZARIA, 'Pizzaria'],
  [TipoLocal.AEROPORTO, 'Aeroporto'],
  [TipoLocal.RESTAURANTE, 'Restaurante'],
  [TipoLocal.PRAIA, 'Praia'],
  [TipoLocal.CORACAO, 'Coração'],
  [TipoLocal.ESTRELA, 'Estrela'],
  [TipoLocal.ACADEMIA, 'Academia'],
]);

export const TipoLocalIcon = new Map<TipoLocal, Icon>([
  [TipoLocal.CASA, Icon.CASA],
  [TipoLocal.LOJA, Icon.LOJA],
  [TipoLocal.HOTEL, Icon.HOTEL],
  [TipoLocal.PARQUE_NATURAL, Icon.PARQUE_NATURAL],
  [TipoLocal.MUSEU, Icon.MUSEU],
  [TipoLocal.PIZZARIA, Icon.PIZZARIA],
  [TipoLocal.AEROPORTO, Icon.AEROPORTO],
  [TipoLocal.RESTAURANTE, Icon.RESTAURANTE],
  [TipoLocal.PRAIA, Icon.PRAIA],
  [TipoLocal.CORACAO, Icon.CORACAO],
  [TipoLocal.ESTRELA, Icon.ESTRELA],
  [TipoLocal.ACADEMIA, Icon.ACADEMIA],
]);

export const TipoLocalIcone = new Map<TipoLocal, string>([
  [TipoLocal.HOTEL, 'hotel'],
  [TipoLocal.PARQUE_NATURAL, 'park'],
  [TipoLocal.MUSEU, 'museum'],
  [TipoLocal.CASA, 'home_pin'],
  [TipoLocal.LOJA, 'storefront'],
  [TipoLocal.AEROPORTO, 'flight'],
  [TipoLocal.PIZZARIA, 'local_pizza'],
  [TipoLocal.RESTAURANTE, 'restaurant'],
  [TipoLocal.PRAIA, 'beach_access'],
  [TipoLocal.CORACAO, 'favorite'],
  [TipoLocal.ESTRELA, 'star'],
  [TipoLocal.ACADEMIA, 'fitness_center'],
]);
