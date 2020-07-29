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
  }
