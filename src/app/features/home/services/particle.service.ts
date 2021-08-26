import { Injectable } from '@angular/core';

@Injectable()
export class ParticleService {

  private repellerColor: string = '#ffffff';

  private colors: Array<string> = [
    '#aaa389',
    '#f6e339',
    '#3758c3',
    '#cc1184',
    '#1d6d14',
    '#ff4000',
    '#2a2927'
  ];

  constructor() { }

  public getRandomIntFromRange(max: number, min = 0) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public getRandomColor(): string {
    return this.colors[this.getRandomIntFromRange(this.colors.length - 1)];
  }

  public getRepelerColor(): string {
    return this.repellerColor;
  }
}
