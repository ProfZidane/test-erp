import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  countURL = environment.endPoint + 'user/get-personnal';
  constructor(private http: HttpClient) { }

  countUser(): Observable<any> {
    return this.http.get(this.countURL);
  }
}