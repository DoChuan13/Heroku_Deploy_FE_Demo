import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.development';
import {SignUpForm} from '../model/SignUpForm';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SignInForm} from "../model/SignInForm";
import {JwtResponse} from "../model/JwtResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private API_SIGNUP = environment.API_LOCAL + 'api/auth/signup';
  // private API_SIGNIN = environment.API_LOCAL + 'api/auth/signin';
  private API_SIGNUP = environment.API_SERVER + 'api/auth/signup';
  private API_SIGNIN = environment.API_SERVER + 'api/auth/signin';

  constructor(private httpClient: HttpClient) {
  }

  signUp(signUpForm: SignUpForm): Observable<any> {
    return this.httpClient.post<any>(this.API_SIGNUP, signUpForm);
  }

  signIn(signInForm: SignInForm): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(this.API_SIGNIN, signInForm);
  }
}
