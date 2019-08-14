import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  text2 = 'Nam tempor velit sed turpis imperdiet vestibulum. In mattis leo ut sapieneuismod id feugiat mauris euismod. Pellentesque habitant morbi tristique senectus et netus et malesuadafames ac turpis egestas. Phasellus id nulla risus, vel tincidunt turpis. Aliquam a nulla mi, placeratblandit eros.'
content1="Our Skills";
content2="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua"
heading="Graphic Design";
heading1="HTML";
heading2="CSS";
heading3='WORD PRESS';
name="Jhon Deo";
name1="Lorem ipsum dolor sit amet consectetur adipisicing eil sed deiusmod tempor";
  constructor(private apiService: ApiService) { }
  responseData:any ={};
responseContentData={};

  ngOnInit() {
    this.showContnetData();
  }
  showContnetData() {
    this.apiService.getcontentdata()
      .subscribe((data:any) => {
        console.log('content api respo:::', data);
        this.responseContentData = data;
      });
  }
}
