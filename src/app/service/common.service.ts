import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private count = 0;

  constructor() {
  }

  public onChangePage() {
    this.count++;
    console.log(this.count);
  }
}
