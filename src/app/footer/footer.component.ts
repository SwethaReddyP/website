import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() users: any;
  @Output() chileData= new EventEmitter()
  constructor() { }
  footerData = {
    name: 'footer coompnent',
    websiteName: "my own website"
  }
  ngOnInit() {
    console.log('footer component data :', this.users);

  }
  sendDataToParent(){
    this.chileData.emit(this.footerData);
  }
}
