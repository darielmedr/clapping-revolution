import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-interviewee8',
  templateUrl: './interviewee8.component.html',
  styleUrls: ['./interviewee8.component.scss']
})
export class Interviewee8Component implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaDataWithInterviewee(8);
  }

}
