import { Terrain } from './../../models/Terrain';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {

  constructor(private boardService: BoardService) {}

  board: any[];
  
  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit() {
    // this.boardService.getBoard().subscribe(board => {
    //   this.board = board;
    // });

    this.board = this.boardService.getBoard();
  }



}
