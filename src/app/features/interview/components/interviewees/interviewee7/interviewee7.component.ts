import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-interviewee7',
  templateUrl: './interviewee7.component.html',
  styleUrls: ['./interviewee7.component.scss']
})
export class Interviewee7Component implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaDataWithInterviewee(7);
  }

}
