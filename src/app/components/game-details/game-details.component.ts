import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {

  totalPop: number = 0;
  redPop: number = 0;
  bluePop: number = 0;
  greenPop: number = 0;

  constructor() { }

  ngOnInit(): void {
    
  }

  play() {
    console.log("play!");
  }

}
