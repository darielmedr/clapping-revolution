import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-interviewee11',
  templateUrl: './interviewee11.component.html',
  styleUrls: ['./interviewee11.component.scss']
})
export class Interviewee11Component implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaDataWithInterviewee(11);
  }

}
