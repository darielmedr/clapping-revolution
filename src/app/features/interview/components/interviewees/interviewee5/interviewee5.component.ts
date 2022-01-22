import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-interviewee5',
  templateUrl: './interviewee5.component.html',
  styleUrls: ['./interviewee5.component.scss']
})
export class Interviewee5Component implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaDataWithInterviewee(5);
  }

}
