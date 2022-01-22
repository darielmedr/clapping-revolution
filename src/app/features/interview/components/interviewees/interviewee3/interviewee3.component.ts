import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-interviewee3',
  templateUrl: './interviewee3.component.html',
  styleUrls: ['./interviewee3.component.scss']
})
export class Interviewee3Component implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaDataWithInterviewee(3);
  }

}
