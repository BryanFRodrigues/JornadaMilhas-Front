import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';


interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthService],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup<LoginForm>;

  constructor(
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private toastService: ToastrService
  ) {
    this.loginForm = new FormGroup<LoginForm>({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  navegaParaCadastro(): void {
    this.router.navigate(['/cadastro']);
  }

  onSubmit() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.snackBar.open("Login feito com sucesso!", "Fechar", { duration: 3000, panelClass: ['success-snackbar'] }),
      error: () => this.snackBar.open("Erro inesperado! Tente novamente mais tarde", "Fechar", { duration: 3000, panelClass: ['error-snackbar'] })
    });
  }
  

}
