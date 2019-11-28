/* eslint-disable import/prefer-default-export */
import { ProcessService } from './ProcessService';
import { BaseHuman } from '../models/human';
import { BaseRobot } from '../models/robot';

const api = 'https://swapi.co/api';

export class DataService {
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

  static dataProcessor(data) {
    const result = [];

    data.forEach(record => {
      if (ProcessService.isHuman(record)) {
        result.push(new BaseHuman(record));
      } else if (ProcessService.isRobot(record)) {
        result.push(new BaseRobot(record));
      }
    });

    return result;
  }
}

function UserPromiseFactory(userId) {
  return new Promise(resolve => {
    const request = new XMLHttpRequest();

    request.responseType = "json";

    request.onloadend = (result) => {
      resolve(result.currentTarget.response);
    };

    request.open('GET', `${api}/people/${userId}/`);
    request.send();
  });
}

DataService.getUsers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  .then(result => {
    console.log('result: ', result);

    const entities = DataService.dataProcessor(result);

    console.log('entities: ', entities);
  });
