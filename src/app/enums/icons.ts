export enum Icon {
  HEART = 0,
  HOME = 1,
  HOTEL = 2,
  MUSEUM = 3,
  RESTAURANT = 4,
  STAR = 5,
  PARK = 6,
  PIZZA = 7,
  AIRPORT = 8,
  STORE = 9,
}

export const iconPath = new Map<Icon, string>([
  [Icon.HOME, 'assets/img/home.svg'],
  [Icon.STAR, 'assets/img/star.svg'],
  [Icon.PARK, 'assets/img/park.svg'],
  [Icon.HEART, 'assets/img/heart.svg'],
  [Icon.HOTEL, 'assets/img/hotel.svg'],
  [Icon.PIZZA, 'assets/img/pizza.svg'],
  [Icon.STORE, 'assets/img/store.svg'],
  [Icon.MUSEUM, 'assets/img/museum.svg'],
  [Icon.AIRPORT, 'assets/img/airport.svg'],
  [Icon.RESTAURANT, 'assets/img/restaurant.svg'],
]);
