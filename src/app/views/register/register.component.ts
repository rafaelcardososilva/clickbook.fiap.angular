import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.formBuilder.group({
    name: '',
    email: '',
    password: '',
    passwordAgain: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private registerService: RegisterService,
  ) {}

  ngOnInit(): void {}

  validateForm = (): boolean => {
    const { password, passwordAgain } = this.registerForm.value;
    return password === passwordAgain && password !== '';
  };

  onSubmit() {
    if (this.validateForm()) {
      this.registerForm.value;
      const response = this.registerService.createRegister({
        name: this.registerForm.value.name!,
        email: this.registerForm.value.email!,
        password: this.registerForm.value.password!
      });

      console.log('response', response);

    } else {
      this._snackBar.open(
        'Falha ao registrar o cadastro, tente novamente.',
        'X',
        {
          duration: 5000,
        }
      );
    }
  }
}
