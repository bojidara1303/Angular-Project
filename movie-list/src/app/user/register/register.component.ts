import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
}) 
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required,Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  register(): void {
    if (this.form.invalid) {
      return;
    }

    const {
      username,
      email,
      password,
      confirmPassword
    } = this.form.value;

    this.userService
      .register(username!, email!, password!, confirmPassword!)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

}
