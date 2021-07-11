import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import Interviewed from '../../shared/models/interviewed';

@Injectable()
export class InterviewedService {

  private interviewees: Array<Interviewed> = [
    {
      id: 1,
      name: 'Tania Bruguera',
      picture: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
      quotes: '«El arte debe cuestionar al poder»'
    },
    {
      id: 2,
      name: 'Tania Bruguera',
      picture: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
      quotes: '«El arte debe cuestionar al poder»'
    },
    {
      id: 3,
      name: 'Tania Bruguera',
      picture: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
      quotes: '«El arte debe cuestionar al poder»'
    },
    {
      id: 4,
      name: 'Tania Bruguera',
      picture: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
      quotes: '«El arte debe cuestionar al poder»'
    },
    {
      id: 5,
      name: 'Tania Bruguera',
      picture: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
      quotes: '«El arte debe cuestionar al poder»'
    },
    {
      id: 6,
      name: 'Tania Bruguera',
      picture: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
      quotes: '«El arte debe cuestionar al poder»'
    },
    {
      id: 7,
      name: 'Tania Bruguera',
      picture: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
      quotes: '«El arte debe cuestionar al poder»'
    },
    {
      id: 8,
      name: 'Tania Bruguera',
      picture: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
      quotes: '«El arte debe cuestionar al poder»'
    },
    {
      id: 9,
      name: 'Tania Bruguera',
      picture: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
      quotes: '«El arte debe cuestionar al poder»'
    },
    {
      id: 10,
      name: 'Tania Bruguera',
      picture: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
      quotes: '«El arte debe cuestionar al poder»'
    },
    {
      id: 11,
      name: 'Tania Bruguera',
      picture: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
      quotes: '«El arte debe cuestionar al poder»'
    },
    {
      id: 12,
      name: 'Tania Bruguera',
      picture: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
      quotes: '«El arte debe cuestionar al poder»'
    },
    {
      id: 13,
      name: 'Tania Bruguera',
      picture: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
      quotes: '«El arte debe cuestionar al poder»'
    },
    {
      id: 14,
      name: 'Tania Bruguera',
      picture: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
      quotes: '«El arte debe cuestionar al poder»'
    },
    {
      id: 15,
      name: 'Tania Bruguera',
      picture: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
      quotes: '«El arte debe cuestionar al poder»'
    },
    {
      id: 16,
      name: 'Tania Bruguera',
      picture: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
      quotes: '«El arte debe cuestionar al poder»'
    },
    {
      id: 17,
      name: 'Tania Bruguera',
      picture: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
      quotes: '«El arte debe cuestionar al poder»'
    },
    {
      id: 18,
      name: 'Tania Bruguera',
      picture: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
      quotes: '«El arte debe cuestionar al poder»'
    }
  ];

  public interviewed$: BehaviorSubject<Interviewed> = new BehaviorSubject(this.interviewees[0]);

  constructor() { }

  public getInterviewees(): Observable<Array<Interviewed>> {
    return of(this.interviewees);
  }

  public getInterviewedById(id: number): Observable<Interviewed> {
    const index = id - 1;
    const interviewed: Interviewed = this.interviewees[index];
    this.interviewed$.next(interviewed);
    return this.interviewed$;
  }
}
