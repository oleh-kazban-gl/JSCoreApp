/* eslint-disable import/prefer-default-export */
import { BaseEntity } from './entity';

export class BaseRobot extends BaseEntity {
  constructor({ birth_year, height, homeworld, mass, name, skin_color, eye_color }) {
    super({ birth_year, height, homeworld, mass, name, skin_color, eye_color });
  }

  move(direction, distance) {
    console.log('move', direction, distance);
  }
}
