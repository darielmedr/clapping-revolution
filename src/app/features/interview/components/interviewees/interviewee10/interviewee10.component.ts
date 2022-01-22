import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-interviewee10',
  templateUrl: './interviewee10.component.html',
  styleUrls: ['./interviewee10.component.scss']
})
export class Interviewee10Component implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaDataWithInterviewee(10);
  }

}
