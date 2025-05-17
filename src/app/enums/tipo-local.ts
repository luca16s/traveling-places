import { Icon } from '@enums';

export enum TipoLocal {
  RESTAURANTE = 0,
  HOTEL = 1,
  MUSEU = 2,
  PARQUE = 3,
  LOJA = 4,
  AEROPORTO = 5,
  PIZZARIA = 6,
  CASA = 7,
}

export const TipoLocalNome = new Map<TipoLocal, string>([
  [TipoLocal.CASA, 'Casa'],
  [TipoLocal.LOJA, 'Loja'],
  [TipoLocal.HOTEL, 'Hotel'],
  [TipoLocal.MUSEU, 'Museu'],
  [TipoLocal.PARQUE, 'Parque'],
  [TipoLocal.PIZZARIA, 'Pizzaria'],
  [TipoLocal.AEROPORTO, 'Aeroporto'],
  [TipoLocal.RESTAURANTE, 'Restaurante'],
]);

export const TipoLocalIcone = new Map<TipoLocal, Icon>([
  [TipoLocal.CASA, Icon.HOME],
  [TipoLocal.LOJA, Icon.STORE],
  [TipoLocal.HOTEL, Icon.HOTEL],
  [TipoLocal.PARQUE, Icon.PARK],
  [TipoLocal.MUSEU, Icon.MUSEUM],
  [TipoLocal.PIZZARIA, Icon.PIZZA],
  [TipoLocal.AEROPORTO, Icon.HEART],
  [TipoLocal.RESTAURANTE, Icon.RESTAURANT],
]);
