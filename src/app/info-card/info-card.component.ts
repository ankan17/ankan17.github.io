import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})

export class InfoCardComponent implements OnInit {

  name = 'Ankan Poddar';
  position = 'Web Developer & Open-source enthusiast';

  contactInfo = [
    { icon: 'fas fa-envelope' , text: 'apoddar17@gmail.com', link: 'mailto:apoddar17@gmail.com' },
    { icon: 'fas fa-globe', text: 'https://ankan17.github.io', link: 'https://ankan17.github.io' },
    { icon: 'fas fa-phone', text: '+91 98045 17793', link: null },
    { icon: 'fas fa-map-marker-alt', text: 'C-35, Amarabati, Sodepur', link: null }
  ];

  contactLinks = [
    { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/ankan17', color: 'indigo' },
    { icon: 'fab fa-twitter', href: 'https://twitter.com/PoddarAnkan', color: 'blue' },
    { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/ankan-poddar-86a6b6163', color: 'blue darken-3' },
    { icon: 'fab fa-github', href: 'https://github.com/ankan17', color: 'elegant-color' }
  ];

  constructor() { }

  ngOnInit() {
  }

  linkIsNull(link) {
    return (link != null);
  }

}
