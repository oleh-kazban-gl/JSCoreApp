/* eslint-disable import/prefer-default-export */
export class BaseEntity {
  constructor({ birth_year, height, homeworld, mass, name, skin_color, eye_color }) {
    this.birth_year = birth_year;
    this.height = height;
    this.homeworld = homeworld;
    this.mass = mass;
    this.name = name;
    this.skin_color = skin_color;
    this.eye_color = eye_color;
  }
}
