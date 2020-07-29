import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() { }

  // Placeholder service to return 3x3 board
  // getBoard(): Observable<any[][]> {
    getBoard(): any[] {
    return [
        [{column: 0, row: 0, type: 'grass', empty: true},{column: 1, row: 0, type: 'grass', empty: true},{column: 2, row: 0, type: 'grass', empty: false}],
        [{column: 0, row: 1, type: 'grass', empty: false},{column: 1, row: 1, type: 'grass', empty: true},{column: 2, row: 1, type: 'dirt', empty: true}],
        [{column: 0, row: 2, type: 'grass', empty: true},{column: 1, row: 2, type: 'dirt', empty: true},{column: 2, row: 2, type: 'dirt', empty: false}],
      ]
  }
}
