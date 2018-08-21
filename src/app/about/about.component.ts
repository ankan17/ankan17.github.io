import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about = 'Hello! I’m Ankan Poddar, a software developer by passion and well-versed with web-development too. Experienced with development of open-source projects, unit testing and continuous integration, I have good knowledge of technologies like HTML5/CSS3, SASS, JavaScript, JQuery, Angular JS, ReactJS, Vue.js, Python, Flask, Django and git.'

  constructor() { }

  ngOnInit() {
  }

}
