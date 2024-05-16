export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum SortOption {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum MapMarker {
  Default = 'img/pin.svg',
  Current = 'img/pin-active.svg'
}

export enum ApiRoute {
  Offers = '/offers',
  Reviews = '/comments',
  Favourites = '/favorite'
}

export enum ApiConst {
  baseURL = 'https://14.design.htmlacademy.pro/six-cities',
  RequestTimeout = 5000,
  TokenKeyName = 'six-cities-token'
}

export enum LoadingStatus {
  Idle,
  Pending,
  Success,
  Error
}
