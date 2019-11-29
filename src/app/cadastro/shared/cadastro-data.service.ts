import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cadastro } from 'src/app/cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroDataService {
  private cadastroSource = new BehaviorSubject({ cadastro: null, key: '' });
  currentCadastro = this.cadastroSource.asObservable();

  constructor() { }

  changeContato(contato: Cadastro, key: string) {
    this.cadastroSource.next({ cadastro: Cadastro, key: key });
  }
}
