import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.development';
import {SignUpForm} from '../model/SignUpForm';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_SIGNUP = environment.API_LOCAL + 'api/auth/signup';

  constructor(private httpClient: HttpClient) {
  }

  signUp(signUpForm: SignUpForm): Observable<any> {
    return this.httpClient.post<any>(this.API_SIGNUP, signUpForm);
  }
}
