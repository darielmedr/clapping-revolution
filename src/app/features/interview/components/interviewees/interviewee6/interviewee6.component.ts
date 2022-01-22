import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-interviewee6',
  templateUrl: './interviewee6.component.html',
  styleUrls: ['./interviewee6.component.scss']
})
export class Interviewee6Component implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaDataWithInterviewee(6);
  }

}
