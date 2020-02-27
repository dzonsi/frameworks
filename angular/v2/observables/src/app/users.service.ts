import { Injectable } from '@angular/core';
import { map, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

	private _observable: Observable<Object>;

  constructor() { }

  fetchUser(id: number) {
  	this._observable = ajax(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(
  		map(data => data.response),
  		finalize(() => console.log('done from observable'))
  	);
  	return this._observable;
  }
}
