import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  blocks = [
    {
      dot: 'P',
      name: 'Primary and Secondary Education',
      institute: 'Ramakrishna Mission Vidyamandir',
      duration: 'Jan 2001 - Mar 2014',
      description: `I completed my primary and secondary education from this prestigious school under the
        Central Board of Secondary Education. I successfully passed all subjects with a perfect 10 CGPA.`
    },
    {
      dot: 'S',
      name: 'Senior Secondary Education',
      institute: 'Sudhir Memorial Institute',
      duration: 'May 2014 - Mar 2016',
      description: `I completed my senior secondary education from this school under the Central Board
        of Secondary Education. I successfully passed with a percentage of 94.8.`
    },
    {
      dot: 'C',
      name: 'Computer Science and Engineering',
      institute: 'National Institute of Technology',
      duration: 'July 2016 - Present',
      description: `I am currently studying Computer Science in this prestigious college of national
        repute and I am in the 3rd year of college with a CGPA of 9.31.`
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
