import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private userData$ = new Subject<any>();
  
  constructor() { }
  // cast = this.userData.asObservable();
  setData(cast) {
    this.userData$.next(cast);
  }
  getData() {
    return this.userData$;
  }


}