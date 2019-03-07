import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillsInfo = [
    {
      'title': 'Languages',
      'skills': [
        {
          'name': 'Python',
          'percent': '8.5'
        }, {
          'name': 'JavaScript',
          'percent': '7.5'
        }, {
          'name': 'C',
          'percent': '7.0'
        }, {
          'name': 'C++',
          'percent': '6.5'
        }
      ]
    }, {
      'title': 'Web Development',
      'skills': [
        {
          'name': 'HTML5/CSS3',
          'percent': '9.0'
        }, {
          'name': 'Django',
          'percent': '8.5'
        }, {
          'name': 'React',
          'percent': '7.5'
        }, {
          'name': 'Angular/Vue.js',
          'percent': '7.0'
        }
      ]
    }, {
      'title': 'Tools and Technologies',
      'skills': [
        {
          'name': 'Git',
          'percent': '8.5'
        }, {
          'name': 'Docker',
          'percent': '7.0'
        }, {
          'name': 'Database',
          'percent': '8.0'
        }, {
          'name': 'Travis',
          'percent': '6.0'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
