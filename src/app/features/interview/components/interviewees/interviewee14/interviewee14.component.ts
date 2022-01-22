import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-interviewee14',
  templateUrl: './interviewee14.component.html',
  styleUrls: ['./interviewee14.component.scss']
})
export class Interviewee14Component implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaDataWithInterviewee(14);
  }

}
