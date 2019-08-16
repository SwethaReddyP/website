import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.scss']
})
export class PortComponent implements OnInit {
text="Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt";
btn="ALL WORKS";
btn2='CREATIVE';
btn3="PHOTOGRAPHY";
web="WEB DEVELOPMENT";
business="Business theme";
content1="There are many variations of passages of Lorem Ipsum available, but the majority";
view="view";
  constructor(private apiService: ApiService) { }
  responseData:any ={};
responsePortData={};

  ngOnInit() {
    this.showPortData();
  }
  showPortData() {
    this.apiService.getportdata()
      .subscribe((data:any) => {
        console.log('port api respo:::', data);
        this.responsePortData = data;
      });
  }
}
