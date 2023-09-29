import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { catchError, of } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user='1'
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private router: Router, private authService: AuthenticationService) {}

  ngOnInit() {
    localStorage.removeItem('SessionUser');
  }

  onSubmit(): void {
    //console.log(this.form);
    this.authService.login(this.form.username, this.form.password)
    .pipe(catchError(err => of([])))
    .subscribe(
      (res:any) =>
      {
        localStorage.setItem("SessionUser", res.token);
        console.log(res)
        this.router.navigate(['home']);        
      });
    /*if(this.form.username === 'testuser' && this.form.password === 'testpassword'){
      localStorage.setItem("SessionUser", this.form.username);
      this.router.navigate(['home']);
    }
    else{
      this.isLoginFailed = true;
      this.errorMessage = "Incorrect username or password";
    }*/
   
  }  
}
