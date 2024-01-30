import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  emailControler = new FormControl('', {
    validators: [
      Validators.email,
      Validators.required
    ]
  });


  passwordControler = new FormControl('', {
    validators: [
      Validators.minLength(8),
      Validators.required
    ]
  });

  submitHecho = signal(false);

  Login() {
    this.submitHecho.set(true);
    if (this.emailControler.valid && this.passwordControler.valid) {
      this.emailControler.setValue("");
      this.passwordControler.setValue("");
      this.submitHecho.set(false);
    }

  }


}
