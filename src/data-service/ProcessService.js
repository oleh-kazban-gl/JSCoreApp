/* eslint-disable import/prefer-default-export */
export class ProcessService {
  static isHuman(record) {
    return ProcessService.hasFullfilledField(record.gender) && ProcessService.hasFullfilledField(record.hair_color);
  }

  static isRobot(record) {
    return !ProcessService.hasFullfilledField(record.gender) && !ProcessService.hasFullfilledField(record.hair_color);
  }

  static isAlien(record) { }

  static isCyborg(record) { }

  static hasFullfilledField(field) {
    if (typeof field === 'string') {
      return !!field.length && field !== 'n/a';
    } else if (Array.isArray(field)) {
      return !!field.field;
    } else {
      return !!field;
    }
  }
}
