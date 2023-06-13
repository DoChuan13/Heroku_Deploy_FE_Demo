import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {SignUpForm} from "../../model/SignUpForm";
import {SignInForm} from "../../model/SignInForm";
import {Router} from "@angular/router";
import {CommonService} from "../../service/common.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  protected status = 'Please fill full field';
  public form = this.formBuilder.group({
    username: [''],
    password: [''],
  });
  public hide = true;
  signInForm?: SignInForm;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private tokenService: TokenService,
              private commonService: CommonService,
              private router: Router) {
  }

  submit() {
    // @ts-ignore
    this.signInForm = new SignInForm(this.form.value.username, this.form.value.password);
    this.authService.signIn(this.signInForm).subscribe(data => {
      console.log(data);
      // @ts-ignore
      if (data.status == 202) {
        this.status = "Login Failed!!!"
      } else {
        // @ts-ignore
        this.tokenService.setName(data.name);
        // @ts-ignore
        this.tokenService.setAvatar(data.avatar);
        // @ts-ignore
        this.tokenService.setToken(data.token);
        // @ts-ignore
        this.tokenService.setRole(data.roles);
        this.router.navigate(["/"]).then(() => {
          // this.commonService.onChangePage();
          window.location.reload();
        })
      }
    })
  }

}
