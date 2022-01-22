import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-interviewee4',
  templateUrl: './interviewee4.component.html',
  styleUrls: ['./interviewee4.component.scss']
})
export class Interviewee4Component implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaDataWithInterviewee(4);
  }

}
