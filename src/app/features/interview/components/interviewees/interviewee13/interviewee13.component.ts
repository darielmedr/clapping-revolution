import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-interviewee13',
  templateUrl: './interviewee13.component.html',
  styleUrls: ['./interviewee13.component.scss']
})
export class Interviewee13Component implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaDataWithInterviewee(13);
  }

}
