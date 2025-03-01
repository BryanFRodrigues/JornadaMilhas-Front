import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {



  cadastroForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router  ,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      name: [null, Validators.required],
      nascimento: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      cidade: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      genero: ['outro'],
      telefone: [null, Validators.required],
      confirmarEmail: [null, [Validators.required, Validators.email]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(3)]],
      aceitarTermos: [null, [Validators.requiredTrue]]
    });
  }

  onSubmit() {
    this.authService.register(this.cadastroForm.value.email, this.cadastroForm.value.password,this.cadastroForm.value.name).subscribe({
      next: () => this.snackBar.open("cadastro feito com sucesso!", "Fechar", { duration: 3000, panelClass: ['success-snackbar'] }),
      error: () => this.snackBar.open("Erro inesperado! Tente novamente mais tarde", "Fechar", { duration: 3000, panelClass: ['error-snackbar'] })
    });
  }
  


  // Método para navegação, corrigido para não ser estático
  navegarParaCadastro() {
    this.router.navigate(['/']);
  }
}
