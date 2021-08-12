import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import Interviewee from 'src/app/shared/models/interviewee.model';

@Injectable({
  providedIn: 'root',
})
export class IntervieweeService {
  private interviewees: Array<Interviewee> = [
    {
      id: 1,
      name: 'TANIA BRUGUERA',
      picture: 'assets/images/interviewed/retrato_1_tania_bruguera.png',
      quotes: '«El arte debe cuestionar al poder»',
    },
    {
      id: 2,
      name: 'FERNANDO PÉREZ',
      picture: 'assets/images/interviewed/retrato_2_fernando_perez.png',
      quotes: '«El arte debe cuestionar al poder»',
    },
    {
      id: 3,
      name: 'JUAN PIN VILAR',
      picture: 'assets/images/interviewed/retrato_3_juan_pin_vilar.png',
      quotes: '«El arte debe cuestionar al poder»',
    },
    {
      id: 4,
      name: 'LYNN CRUZ Y MIGUEL COYULA',
      picture:
        'assets/images/interviewed/retrato_4_lyn_cruz_y_miguel_coyula.png',
      quotes: '«El arte debe cuestionar al poder»',
    },
    {
      id: 5,
      name: 'ROBERTO CARCASSÉS',
      picture: 'assets/images/interviewed/retrato_2_fernando_perez.png',
      quotes: '«El arte debe cuestionar al poder»',
    },
    {
      id: 6,
      name: 'IAN BENAVIDES',
      picture: 'assets/images/interviewed/retrato_2_fernando_perez.png',
      quotes: '«El arte debe cuestionar al poder»',
    },
    {
      id: 7,
      name: 'YUNIOR GARCÍA AGUILERA',
      picture: 'assets/images/interviewed/retrato_2_fernando_perez.png',
      quotes: '«El arte debe cuestionar al poder»',
    },
    {
      id: 8,
      name: 'CAMILA ACOSTA',
      picture: 'assets/images/interviewed/retrato_2_fernando_perez.png',
      quotes: '«El arte debe cuestionar al poder»',
    },
    {
      id: 9,
      name: 'ANAMELY RAMOS',
      picture: 'assets/images/interviewed/retrato_2_fernando_perez.png',
      quotes: '«El arte debe cuestionar al poder»',
    },
    {
      id: 10,
      name: 'DANIEL DÍAZ MATILLA',
      picture: 'assets/images/interviewed/retrato_2_fernando_perez.png',
      quotes: '«El arte debe cuestionar al poder»',
    },
    {
      id: 11,
      name: 'JULIO ANTONIO FERNÁNDEZ ESTRADA',
      picture: 'assets/images/interviewed/retrato_2_fernando_perez.png',
      quotes: '«El arte debe cuestionar al poder»',
    },
    {
      id: 12,
      name: 'ADONIS MILÁN',
      picture: 'assets/images/interviewed/retrato_2_fernando_perez.png',
      quotes: '«El arte debe cuestionar al poder»',
    },
    {
      id: 13,
      name: 'MAYKEL OBSORBO',
      picture: 'assets/images/interviewed/retrato_2_fernando_perez.png',
      quotes: '«El arte debe cuestionar al poder»',
    },
    {
      id: 14,
      name: 'LUZ ESCOBAR',
      picture: 'assets/images/interviewed/retrato_2_fernando_perez.png',
      quotes: '«El arte debe cuestionar al poder»',
    },
    {
      id: 15,
      name: 'JULIO LLÓPIZ-CASAL',
      picture: 'assets/images/interviewed/retrato_2_fernando_perez.png',
      quotes: '«El arte debe cuestionar al poder»',
    },
    {
      id: 16,
      name: 'KATHERINE BISQUET',
      picture: 'assets/images/interviewed/retrato_2_fernando_perez.png',
      quotes: '«El arte debe cuestionar al poder»',
    },
    {
      id: 17,
      name: 'CAMILA LOBÓN',
      picture: 'assets/images/interviewed/retrato_2_fernando_perez.png',
      quotes: '«El arte debe cuestionar al poder»',
    },
    {
      id: 18,
      name: 'OMARA RUIZ URQUIOLA',
      picture: 'assets/images/interviewed/retrato_2_fernando_perez.png',
      quotes: '«El arte debe cuestionar al poder»',
    },
  ];

  public interviewed$: BehaviorSubject<Interviewee> = new BehaviorSubject(
    this.interviewees[0]
  );

  constructor() {}

  public getInterviewees(): Observable<Array<Interviewee>> {
    return of(this.interviewees);
  }

  public setIntervieweeById(id: number): void {
    const index = id - 1;
    const interviewed: Interviewee = this.interviewees[index];
    this.interviewed$.next(interviewed);
  }

  public getCurrentInterviewee(): Observable<Interviewee> {
    return this.interviewed$.asObservable();
  }
}
