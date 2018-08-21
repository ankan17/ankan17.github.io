import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})

export class InfoCardComponent implements OnInit {

  name = 'Ankan Poddar';
  position = 'Software Engineer & Web Developer';

  contactInfo = [
    { icon: 'fas fa-envelope' , text: 'friendyankan@gmail.com' },
    { icon: 'fas fa-globe', text: 'https://ankan17.github.io' },
    { icon: 'fab fa-github', text: 'https://github.com/ankan17' },
    { icon: 'fas fa-phone', text: '+91 98045 17793' },
    { icon: 'fas fa-map-marker-alt', text: 'C-35, Amarabati, Sodepur' }
  ];

  contactLinks = [
    { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/friendyankan', color: 'indigo' },
    { icon: 'fab fa-twitter', href: 'https://twitter.com/PoddarAnkan', color: 'blue' },
    { icon: 'fab fa-google-plus-g', href: 'https://plus.google.com/101331497280009937677', color: 'red' },
    { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/ankan-poddar-86a6b6163', color: 'blue darken-3' },
    { icon: 'fab fa-github', href: 'https://github.com/ankan17', color: 'elegant-color' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
