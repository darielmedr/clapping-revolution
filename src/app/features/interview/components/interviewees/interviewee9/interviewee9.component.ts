import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-interviewee9',
  templateUrl: './interviewee9.component.html',
  styleUrls: ['./interviewee9.component.scss']
})
export class Interviewee9Component implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaDataWithInterviewee(9);
  }

}
