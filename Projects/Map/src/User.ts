import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lng: number;
    lat: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lng: +faker.address.longitude(),
      lat: +faker.address.latitude(),
    };
  }

  markerContent(): string {
    return `Username: ${this.name}`;
  }
}
