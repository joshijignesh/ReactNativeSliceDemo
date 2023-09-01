export interface User {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  dob: Dob;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Street {
  number: number;
  name: string;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Dob {
  date: string;
  age: number;
}

export interface Id {
  name: string;
  value: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
