/* eslint-disable import/prefer-default-export */
const api = 'https://swapi.co/api';

export class DataService {
  static async getData(url) {
    const result = await fetch(`${api}/${url}`);

    console.log('result: ', result);

    return result;
  }
}



console.log(DataService.getData('people/1'));
