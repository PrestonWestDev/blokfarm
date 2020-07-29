import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-options',
  templateUrl: './game-options.component.html',
  styleUrls: ['./game-options.component.scss']
})
export class GameOptionsComponent implements OnInit {
  @Output() changeBoardSize: EventEmitter<any> = new EventEmitter();
  rowSize: number;
  columnSize: number;
  rowSizes: number[] = [5, 10, 25, 50, 75, 100];
  colSizes: number[] = [5, 10, 25, 50]

  constructor() { }

  ngOnInit(): void {
  }

  addBlok() {
    console.log("adding blok!");
  }


  changeColSize(event) {
    console.log("Changing Column Size")
    console.log(event.target.value);

    this.columnSize = event.target.value;

    const boardSize = {
      columnSize: this.columnSize,
      rowSize: this.rowSize
    }

    this.changeBoardSize.emit(boardSize);
  }

  changeRowSize(event) {
    console.log("Changing Row Size")
    console.log(event.target.value);

    this.rowSize = event.target.value;
    
    const boardSize = {
      columnSize: this.columnSize,
      rowSize: this.rowSize
    }

    this.changeBoardSize.emit(boardSize);
  }

}
