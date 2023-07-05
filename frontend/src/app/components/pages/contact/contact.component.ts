import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AlertService } from 'src/app/services/alert.service';
import { SEND_EMAIL } from 'src/app/shared/constants/urls';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  mensagem = {
    nome: '',
    email: '',
    assunto: '',
    texto: ''
  };
  router: any;
  constructor(
    private http: HttpClient,
    private alertService: AlertService) {}

  enviarMensagem() {
    console.log(this.mensagem)
    this.http.post(SEND_EMAIL, this.mensagem)
      .subscribe(
        response => {
          console.log('Mensagem enviada com sucesso!', response);
          this.alertService.sucess("Registro eventuado com sucesso!");
          this.router.navigate(['home']);

        },
        error => {
          console.error('Erro ao enviar mensagem:', error);

        }
      );
  }
}
