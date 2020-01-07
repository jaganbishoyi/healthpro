import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit {
  trainers = [
    {
      name: "Brandon Jones",
      skill: "Fitness",
      rating: "3.9",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      active: true,
      image: "user.jpg"
    },
    {
      name: "Lee Murphy",
      skill: "Pole Dance",
      rating: "3.5",
      twitter: "https://twitter.com",
      facebook: "",
      active: false,
      image: "user1.jpg"
    },
    {
      name: "Ted Guyr",
      skill: "Crossfit",
      rating: "4.5",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      active: false,
      image: "user2.jpg"
    },
    {
      name: "Marvin Wilson",
      skill: "Fitness",
      rating: "3.0",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      active: false,
      image: "user4.jpg"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
