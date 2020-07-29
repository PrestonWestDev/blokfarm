import { Terrain } from './../../models/Terrain';
import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {

  board: Terrain[][];

  totalPop: number = 0;
  redPop: number = 0;
  bluePop: number = 0;
  greenPop: number = 0;

  colsArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  rowsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit() {
    
  }

  play() {
    console.log("play!");
  }

}
