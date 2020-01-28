import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  blocks = [
    {
      dot: 'G',
      name: 'Google Summer of Code',
      position: 'Student Developer',
      duration: 'May 2018 - August 2018',
      description: `Working with CROSS as a student developer, my project included adding features
        (most notably, the archival feature) to the Popper CLI tool, which aims to simplify experimentation
        using a DevOps approach. I also added many other sub-commands and created a badge server.`
    },
    {
      dot: 'S',
      name: 'Shopizle Inc.',
      position: 'Software Engineering Intern',
      duration: 'May 2019 – June 2019',
      description: `My major task was to work on the frontend of their website, built with React,
        adding new features and updating and fixing existing features. I also worked on the backend,
        mainly doing email and website scraping (with selenium) and database and API integration.`
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
