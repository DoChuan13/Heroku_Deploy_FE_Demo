import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {SignUpForm} from '../../model/SignUpForm';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  protected status = 'Please fill full field';
  form: any = {};
  emailFormValidate: FormControl = new FormControl('', [
    Validators.required, Validators.email
  ]);
  hide = true;

  constructor(private authService: AuthService) {
  }

  ngOnInit()
    :
    void {
  }

  register() {
    let signUpForm = new SignUpForm(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password);

    console.log(signUpForm);
    this.authService.signUp(signUpForm).subscribe(data => {
      console.log(data);
      if (data.message === 'nouser') {
        this.status = 'The username is existed';
      } else if (data.message === 'noemail') {
        this.status = 'The email is existed';
      } else if (data.message === 'yes') {
        this.status = 'Create account success';
      }
    });
  }

}
