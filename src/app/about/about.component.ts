import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about = `Hello! I’m Ankan Poddar, a Computer Science student at NIT Durgapur and
    a software and web developer by passion. Experienced with open-source development,
    I have a good knowledge of Python and JavaScript. I also dabble in C/C++`;

  constructor() { }

  ngOnInit() {
  }

}
