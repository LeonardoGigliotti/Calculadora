import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  operacao = '';
  resultado = '';
  
  constructor() {}
  
  ngOnInit() {}

  adicionarValor(valor: any){
    this.operacao += valor;
  }

  limparMemoria(){
    this.operacao = '';
    this.resultado = '';
  }

  limparOperacao(){
    this.operacao = '';
  }

  inverterValor(){
    //alterna o numero entre positivo e negativo
  }

  apagarCaracter(){
    if (this.operacao.length > 0){
      this.operacao = this.operacao.substring(0, this.operacao.length - 1);
    }
  }
}
