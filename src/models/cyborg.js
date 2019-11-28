/* eslint-disable import/prefer-default-export */
import { BaseEntity } from './entity';

export class BaseCyborg extends BaseEntity {
  constructor({ birth_year, height, homeworld, mass, name, skin_color, eye_color, gender, hair_color }) {
    super({ birth_year, height, homeworld, mass, name, skin_color, eye_color });

    this.gender = gender;
    this.hair_color = hair_color;
  }
}
