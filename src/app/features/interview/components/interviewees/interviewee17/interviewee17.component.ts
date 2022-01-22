import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-interviewee17',
  templateUrl: './interviewee17.component.html',
  styleUrls: ['./interviewee17.component.scss']
})
export class Interviewee17Component implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaDataWithInterviewee(17);
  }

}
