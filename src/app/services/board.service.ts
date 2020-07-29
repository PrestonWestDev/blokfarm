import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from '../models/Board';
import { Space } from '../models/Space';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() { }

  // Placeholder service to return 3x3 board
  // getBoard(): Observable<any[][]> {
    getBoard(): any[] {
    return  [
        [{column: 0, row: 0, type: 'grass'},{column: 1, row: 0, type: 'grass'},{column: 2, row: 0, type: 'grass'}],
        [{column: 0, row: 1, type: 'grass'},{column: 1, row: 1, type: 'grass'},{column: 2, row: 1, type: 'dirt'}],
        [{column: 0, row: 2, type: 'grass'},{column: 1, row: 2, type: 'dirt'},{column: 2, row: 2, type: 'dirt'}],
      ]
    }

    getCleanBoard(columns: number, rows: number): any[] {
      var i;
      var j;
      var arr = [];
      for (i=0; i < 20; i++) {
        let newArr = []
        for (j=0; j < 20; j++) {
          var type = Math.floor(Math.random() * 10) < 7 ? 'grass' : 'dirt';
          let newObj = {
            column: i,
            row: j,
            type: type,
          }
          newArr.push(newObj)
        }
        arr.push(newArr);
      }
      return arr;
    }
  }
