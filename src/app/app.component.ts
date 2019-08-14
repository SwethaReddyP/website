import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-website';
  users:Array<object>=[
    {
      name:'swetha',
      class:'btech',
      college:'kvsw'
    }
  ];
  getChildData(e){
    console.log('getting child data from header', e);
  }
  getChildData2(e){
    console.log('getting child data from header2', e);
  }
  getChildDataFromFooter(e){
    console.log('getting child data from footer', e);
  }
  
}