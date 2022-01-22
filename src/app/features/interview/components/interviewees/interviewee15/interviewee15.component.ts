import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-interviewee15',
  templateUrl: './interviewee15.component.html',
  styleUrls: ['./interviewee15.component.scss']
})
export class Interviewee15Component implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaDataWithInterviewee(15);
  }

}
