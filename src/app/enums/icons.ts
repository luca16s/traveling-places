export enum Icon {
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

export const iconPath = new Map<Icon, string>([
  [Icon.CASA, 'assets/img/home.svg'],
  [Icon.ESTRELA, 'assets/img/star.svg'],
  [Icon.PARQUE_NATURAL, 'assets/img/park.svg'],
  [Icon.CORACAO, 'assets/img/heart.svg'],
  [Icon.HOTEL, 'assets/img/hotel.svg'],
  [Icon.PIZZARIA, 'assets/img/pizza.svg'],
  [Icon.LOJA, 'assets/img/store.svg'],
  [Icon.MUSEU, 'assets/img/museum.svg'],
  [Icon.AEROPORTO, 'assets/img/airport.svg'],
  [Icon.RESTAURANTE, 'assets/img/restaurant.svg'],
  [Icon.PRAIA, 'assets/img/beach.svg'],
  [Icon.ACADEMIA, 'assets/img/gym.svg'],
]);
