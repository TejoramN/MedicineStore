import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  baseServerUrl = "https://localhost:5001/api/";

  registerUser(user: Array<String>) {
    return this.http.post(this.baseServerUrl+"User/CreateUser",
    {
      FirstName: user[0],
      LastName: user[1],
      Email: user[2],
      Mobile: user[3],
      Gender: user[4],
      Pwd: user[5]

    },{
      responseType: 'text',
    });
  }

  loginUser(loginInfo: Array<string>){
    return this.http.post(this.baseServerUrl+"User/LoginUser",
    {
      Email: loginInfo[0],
      Pwd: loginInfo[1]
    },
    {
      responseType: 'text',
    }
    );
  }
}
