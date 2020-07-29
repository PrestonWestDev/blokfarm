import { Terrain } from './../../models/Terrain';
import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {

  board: Terrain[][];

  colsArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  rowsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit() {
    
  }



}
