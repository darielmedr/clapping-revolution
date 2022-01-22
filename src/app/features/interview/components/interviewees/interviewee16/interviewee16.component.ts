import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-interviewee16',
  templateUrl: './interviewee16.component.html',
  styleUrls: ['./interviewee16.component.scss']
})
export class Interviewee16Component implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaDataWithInterviewee(16);
  }

}
