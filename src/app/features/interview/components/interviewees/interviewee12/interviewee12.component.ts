import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-interviewee12',
  templateUrl: './interviewee12.component.html',
  styleUrls: ['./interviewee12.component.scss']
})
export class Interviewee12Component implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaDataWithInterviewee(12);
  }

}
