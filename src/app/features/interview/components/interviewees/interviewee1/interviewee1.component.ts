import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-interviewee1',
  templateUrl: './interviewee1.component.html',
  styleUrls: ['./interviewee1.component.scss']
})
export class Interviewee1Component implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaDataWithInterviewee(1);
  }
}
