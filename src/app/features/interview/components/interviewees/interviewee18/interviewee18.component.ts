import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-interviewee18',
  templateUrl: './interviewee18.component.html',
  styleUrls: ['./interviewee18.component.scss']
})
export class Interviewee18Component implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaDataWithInterviewee(18);
  }

}
