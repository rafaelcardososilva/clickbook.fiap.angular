import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
    private router: Router,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {}

  validateForm = (): boolean => {
    const { password, passwordAgain } = this.registerForm.value;
    return password === passwordAgain && password !== '';
  };

  onSubmit() {
    if (this.validateForm()) {
      const { name, email, password } = this.registerForm.value;
      this.registerService.createRegister({
        name: name!,
        email: email!,
        password: password!,
      });

      this._snackBar.open('Cadastro realizado com sucesso', '', {
        duration: 2000,
      });
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
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
