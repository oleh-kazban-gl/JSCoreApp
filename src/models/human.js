/* eslint-disable import/prefer-default-export */
import { BaseEntity } from './entity';

export class BaseHuman extends BaseEntity {
  constructor({ birth_year, height, homeworld, mass, name, skin_color, eye_color, gender, hair_color, health = 100, strength = 10 }) {
    super({ birth_year, height, homeworld, mass, name, skin_color, eye_color });

    this.gender = gender;
    this.hair_color = hair_color;
    this.health = health;
    this.strength = strength;
  }

  walk(direction, distance) {
    console.log('walk', direction, distance);
  }

  // Attack your opponent
  attack() {}

  // Defence against attack
  defence() {}

  // Retreat with minumum health
  retreat() {}

  // Fatality by your opponent
  defeat() {}

  // General method for fighting, use motivator for definition of action
  fight() {}

  // Function for definition of action: fight, defence, retreat, defeat
  function motivator() {}
}
