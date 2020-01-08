import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.scss"]
})
export class DayComponent implements OnInit {
  activities = [
    {
      name: "Aerobic",
      location: "Violena Aerobic Club",
      from: "08:30",
      to: "09:30",
      active: true
    },
    {
      name: "Pilates",
      location: "Lady Fit",
      from: "09:30",
      to: "10:30",
      active: false
    },
    {
      name: "Box",
      location: "Sports Club Matrix",
      from: "12:00",
      to: "13:30",
      active: false
    }
  ];
  constructor() {}

  ngOnInit() {}
}
