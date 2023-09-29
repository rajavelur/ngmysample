import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  gettoken(){  
    return localStorage.getItem("SessionUser");  
  }
    
  login(username: string, password: string) : Observable<any>{    
    return this.http.get(environment.apiEndpoint + "Authentication/login?UserName=" + username + "&Password=" + password);
  }
}
