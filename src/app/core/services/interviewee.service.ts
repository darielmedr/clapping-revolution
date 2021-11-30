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
      picture: 'assets/images/interviewed/retrato_1_tania.webp',
      quotes: '«El arte debe cuestionar al poder»',
    },
    {
      id: 2,
      name: 'FERNANDO PÉREZ',
      picture: 'assets/images/interviewed/retrato_2_fernando.webp',
      quotes: '«Para que haya diálogo tiene que haber voluntad»',
    },
    {
      id: 3,
      name: 'JUAN PIN VILAR',
      picture: 'assets/images/interviewed/retrato_3_juan.webp',
      quotes: '«El diálogo es el camino en la medida en que es un diálogo, no un monólogo»',
    },
    {
      id: 4,
      name: 'LYNN CRUZ Y MIGUEL COYULA',
      picture:
        'assets/images/interviewed/retrato_4_lynn_miguel.webp',
      quotes: '«El arte tiene la responsabilidad de dejarte incómodo»',
    },
    {
      id: 5,
      name: 'ROBERTO CARCASSÉS',
      picture: 'assets/images/interviewed/retrato_5_roberto.webp',
      quotes: '«Todas las personas tienen derecho a decir lo que piensan»',
    },
    {
      id: 6,
      name: 'IAN BENAVIDES',
      picture: 'assets/images/interviewed/retrato_6_ian.webp',
      quotes: '«Que no sea limitar, sino acompañar, la función de las instituciones»',
    },
    {
      id: 7,
      name: 'YUNIOR GARCÍA AGUILERA',
      picture: 'assets/images/interviewed/retrato_7_yunior.webp',
      quotes: '«Lo que se aparta de la justicia social no es Revolución»',
    },
    {
      id: 8,
      name: 'CAMILA ACOSTA',
      picture: 'assets/images/interviewed/retrato_8_camila.webp',
      quotes: '«Libertad, creo que esa es la palabra clave»',
    },
    {
      id: 9,
      name: 'ANAMELY RAMOS',
      picture: 'assets/images/interviewed/retrato_9_anamely.webp',
      quotes: '«Tenemos que creer que podemos construir un país mejor»',
    },
    {
      id: 10,
      name: 'DANIEL DÍAZ MATILLA',
      picture: 'assets/images/interviewed/retrato_10_daniel.webp',
      quotes: '«Hablé de la necesidad de vencer el recelo»',
    },
    {
      id: 11,
      name: 'JULIO ANTONIO FERNÁNDEZ ESTRADA',
      picture: 'assets/images/interviewed/retrato_11_julio.webp',
      quotes: '«El diálogo se rompe solo si una de las partes se levanta»',
    },
    {
      id: 12,
      name: 'ADONIS MILÁN',
      picture: 'assets/images/interviewed/retrato_12_adonis.webp',
      quotes: '«En la sociedad cubana tú ya no decides ni por tu cuerpo»',
    },
    {
      id: 13,
      name: 'MAYKEL OBSORBO',
      picture: 'assets/images/interviewed/retrato_13_maykel.webp',
      quotes: '«Hablo de la política porque la política nos afecta»',
    },
    {
      id: 14,
      name: 'LUZ ESCOBAR',
      picture: 'assets/images/interviewed/retrato_14_luz.webp',
      quotes: '«Estamos dialogando entre cubanos y no importa si la institución quiere escuchar»',
    },
    {
      id: 15,
      name: 'JULIO LLÓPIZ-CASAL',
      picture: 'assets/images/interviewed/retrato_15_julio.webp',
      quotes: '«Mis balas son las palabras y las imágenes»',
    },
    {
      id: 16,
      name: 'KATHERINE BISQUET',
      picture: 'assets/images/interviewed/retrato_16_katherine.webp',
      quotes: '«Nos estábamos jugando la vida porque estábamos convencidos de algo»',
    },
    {
      id: 17,
      name: 'CAMILA LOBÓN',
      picture: 'assets/images/interviewed/retrato_17_camila.webp',
      quotes: '«Hemos hecho como una especie de pequeño ejercicio democrático»',
    },
    {
      id: 18,
      name: 'OMARA RUIZ URQUIOLA',
      picture: 'assets/images/interviewed/retrato_18_omara.webp',
      quotes: '«Se estaba defendiendo la libertad de Cuba»',
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
