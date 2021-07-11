import { Injectable } from '@angular/core';

@Injectable()
export class ParticleService {

  private repellerImage: string = 'https://i.imgur.com/huHfr63.png';

  private images: Array<string> = [
    'https://i.imgur.com/huHfr63.png',
    // 'https://i.imgur.com/nXQPaQN.png'
  ];

  constructor() { }

  public getRandomIntFromRange(max: number, min = 0) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public getRandomImage(): string {
    return this.images[this.getRandomIntFromRange(this.images.length - 1)];
  }

  public getRepelerImage(): string {
    return this.repellerImage;
  }
}
