import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

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
  constructor(private http: HttpClient) {}

  enviarMensagem() {
    this.http.post('/enviar-email', this.mensagem)
      .subscribe(
        response => {
          console.log('Mensagem enviada com sucesso!', response);

        },
        error => {
          console.error('Erro ao enviar mensagem:', error);

        }
      );
  }
}
