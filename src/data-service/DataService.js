/* eslint-disable import/prefer-default-export */
const api = 'https://swapi.co/api';

export class DataService {
  static get(url) {
    return new Promise(resolve => {
      const request = new XMLHttpRequest();

      request.onloadend = (result) => {
        resolve(result.currentTarget.response);
      };

      request.open('GET', `${api}/${url}`);
      request.send();
    });
  }

  static getUsers(userIds) {
    const requests = [];

    if (!!userIds && userIds.length) {
      userIds.forEach(id => {
        requests.push(UserPromiseFactory(id));
      });
    }

    return Promise.all(requests);
  }

  static async fetch(url) {
    const result = await DataService.get(url);

    return result;
  }

  static async dataProcessor(action) {
    const data = await action;

    console.log('data: ', data);
  }
}

function UserPromiseFactory(userId) {
  return new Promise(resolve => {
    const request = new XMLHttpRequest();

    request.onloadend = (result) => {
      resolve(result.currentTarget.response);
    };

    request.open('GET', `${api}/people/${userId}`);
    request.send();
  });
}

// let Luke;

// DataService.fetch('people/1').then(result => {
//   Luke = result;
// });
// DataService.dataProcessor(DataService.fetch('people/1'));

DataService.getUsers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).then(result => {
  console.log('result: ', result);
})
