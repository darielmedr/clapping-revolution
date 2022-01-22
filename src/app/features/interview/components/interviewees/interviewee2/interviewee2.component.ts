import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-interviewee2',
  templateUrl: './interviewee2.component.html',
  styleUrls: ['./interviewee2.component.scss']
})
export class Interviewee2Component implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaDataWithInterviewee(2);
  }

}
