import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { share, shareReplay } from 'rxjs/operators';
import Interviewee from 'src/app/shared/models/interviewee.model';

@Injectable({
  providedIn: 'root',
})
export class IntervieweeService {
  private interviewees: Array<Interviewee> = [
    {
      id: 1,
      path: 'tania-bruguera',
      name: 'TANIA BRUGUERA',
      picture: 'assets/images/interviewees/retrato_1_tania.webp',
      quotes: '«El arte debe cuestionar al poder»',
    },
    {
      id: 2,
      path: 'fernando-perez',
      name: 'FERNANDO PÉREZ',
      picture: 'assets/images/interviewees/retrato_2_fernando.webp',
      quotes: '«Para que haya diálogo tiene que haber voluntad»',
    },
    {
      id: 3,
      path: 'juan-pin-vilar',
      name: 'JUAN PIN VILAR',
      picture: 'assets/images/interviewees/retrato_3_juan.webp',
      quotes:
        '«El diálogo es el camino en la medida en que es un diálogo, no un monólogo»',
    },
    {
      id: 4,
      path: 'lynn-cruz-miguel-coyula',
      name: 'LYNN CRUZ Y MIGUEL COYULA',
      picture: 'assets/images/interviewees/retrato_4_lynn_miguel.webp',
      quotes: '«El arte tiene la responsabilidad de dejarte incómodo»',
    },
    {
      id: 5,
      path: 'roberto-carcasses',
      name: 'ROBERTO CARCASSÉS',
      picture: 'assets/images/interviewees/retrato_5_roberto.webp',
      quotes: '«Todas las personas tienen derecho a decir lo que piensan»',
    },
    {
      id: 6,
      path: 'ian-benavides',
      name: 'IAN BENAVIDES',
      picture: 'assets/images/interviewees/retrato_6_ian.webp',
      quotes:
        '«Que no sea limitar, sino acompañar, la función de las instituciones»',
    },
    {
      id: 7,
      path: 'yunior-garcia-aguilera',
      name: 'YUNIOR GARCÍA AGUILERA',
      picture: 'assets/images/interviewees/retrato_7_yunior.webp',
      quotes: '«Lo que se aparta de la justicia social no es Revolución»',
    },
    {
      id: 8,
      path: 'camila-acosta',
      name: 'CAMILA ACOSTA',
      picture: 'assets/images/interviewees/retrato_8_camila.webp',
      quotes: '«Libertad, creo que esa es la palabra clave»',
    },
    {
      id: 9,
      path: 'anamely-ramos',
      name: 'ANAMELY RAMOS',
      picture: 'assets/images/interviewees/retrato_9_anamely.webp',
      quotes: '«Tenemos que creer que podemos construir un país mejor»',
    },
    {
      id: 10,
      path: 'daniel-diaz-matilla',
      name: 'DANIEL DÍAZ MATILLA',
      picture: 'assets/images/interviewees/retrato_10_daniel.webp',
      quotes: '«Hablé de la necesidad de vencer el recelo»',
    },
    {
      id: 11,
      path: 'julio-antonio-fernandez-estrada',
      name: 'JULIO ANTONIO FERNÁNDEZ ESTRADA',
      picture: 'assets/images/interviewees/retrato_11_julio.webp',
      quotes: '«El diálogo se rompe solo si una de las partes se levanta»',
    },
    {
      id: 12,
      path: 'adonis-milan',
      name: 'ADONIS MILÁN',
      picture: 'assets/images/interviewees/retrato_12_adonis.webp',
      quotes: '«En la sociedad cubana tú ya no decides ni por tu cuerpo»',
    },
    {
      id: 13,
      path: 'maykel-obsorbo',
      name: 'MAYKEL OBSORBO',
      picture: 'assets/images/interviewees/retrato_13_maykel.webp',
      quotes: '«Hablo de la política porque la política nos afecta»',
    },
    {
      id: 14,
      path: 'luz-escobar',
      name: 'LUZ ESCOBAR',
      picture: 'assets/images/interviewees/retrato_14_luz.webp',
      quotes:
        '«Estamos dialogando entre cubanos y no importa si la institución quiere escuchar»',
    },
    {
      id: 15,
      path: 'julio-llopiz-casal',
      name: 'JULIO LLÓPIZ-CASAL',
      picture: 'assets/images/interviewees/retrato_15_julio.webp',
      quotes: '«Mis balas son las palabras y las imágenes»',
    },
    {
      id: 16,
      path: 'katherine-bisquet',
      name: 'KATHERINE BISQUET',
      picture: 'assets/images/interviewees/retrato_16_katherine.webp',
      quotes:
        '«Nos estábamos jugando la vida porque estábamos convencidos de algo»',
    },
    {
      id: 17,
      path: 'camila-lobon',
      name: 'CAMILA LOBÓN',
      picture: 'assets/images/interviewees/retrato_17_camila.webp',
      quotes: '«Hemos hecho como una especie de pequeño ejercicio democrático»',
    },
    {
      id: 18,
      path: 'omara-ruiz-urquiola',
      name: 'OMARA RUIZ URQUIOLA',
      picture: 'assets/images/interviewees/retrato_18_omara.webp',
      quotes: '«Se estaba defendiendo la libertad de Cuba»',
    },
  ];

  private interviewee$: BehaviorSubject<Interviewee> = new BehaviorSubject(
    this.interviewees[0]
  );

  constructor() {}

  public getInterviewees(): Observable<Array<Interviewee>> {
    return of(this.interviewees).pipe(share());
  }

  public setIntervieweeById(id: number): void {
    const index = id - 1;
    const interviewee: Interviewee = this.interviewees[index];
    this.interviewee$.next(interviewee);
  }

  public setIntervieweeByPath(path: string): void {
    let id = 0;

    this.interviewees.some(
      (value: Interviewee, index: number) => {
        id = index;
        return value.path === path;
      }
    );

    const interviewee: Interviewee = this.interviewees[id];
    this.interviewee$.next(interviewee);
  }

  public getCurrentInterviewee(): Observable<Interviewee> {
    return this.interviewee$.asObservable().pipe(shareReplay());
  }
}
