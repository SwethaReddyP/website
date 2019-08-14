import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
header="Company Service";
content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdumerat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinartincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leoconsectetur eget. Curabitur lacinia pellentesque";
web="Web Development";
text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum eratlibero, pulvinar tincidunt leo consectetur eget.";
design="Responsive Design";
boot="Bootstrap Themes";
landing="Landing page";
taining="Training";
logo="Logo Design";


  constructor() { }

  ngOnInit() {
  }

}
