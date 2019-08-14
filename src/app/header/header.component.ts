import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() users: any;
  @Output() chileData= new EventEmitter()
  @Output() chileData2 = new EventEmitter();
  welcome = "WELCOME";
  headerData = {
    name: 'header coompnent',
    websiteName: "my own website"
  }
  constructor() { }

  ngOnInit() {
    console.log('header component data :', this.users);
  }
  sendDataToParent(){
    this.chileData.emit(this.headerData);
    this.chileData2.emit(this.headerData);
  }
}
// 