import { Injectable } from '@angular/core';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';
import Interviewee from 'src/app/shared/models/interviewee.model';
import { IntervieweeService } from './interviewee.service';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private meta: Meta,
    private title: Title,
    private intervieweeService: IntervieweeService
  ) { }

  public updateMetaDataWithInterviewee(intervieweeId: number): void {
    const interviewee: Interviewee = this.intervieweeService.getIntervieweeById(intervieweeId);

    const title: string = `${interviewee.name}: ${interviewee.quotes} - Periodismo de Barrio`;
    const baseUrl: string = 'https://revoluciondelosaplausos.periodismodebarrio.org';

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: interviewee.description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: interviewee.description },
      { property: 'og:url', content: `${baseUrl}/entrevista/${interviewee.path}` },
      { property: 'twitter:title', content: title },
      { property: 'twitter:description', content: interviewee.description }
    ];

    this.updateMetaTags(metaTags);
    this.setTitle(interviewee.name);
  }

  public updateMetaTags(metaTags: MetaDefinition[]): void {
    metaTags.forEach((metaTag: MetaDefinition) => {
      this.meta.updateTag(metaTag);
    });
  }

  public setTitle(title: string): void {
    this.title.setTitle(title);
  }
}
