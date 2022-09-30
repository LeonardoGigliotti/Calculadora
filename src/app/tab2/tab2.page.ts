import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  valor1;
  valor2;
  cont;
  result;
   constructor() {}
 
   add(){
     this.result = parseInt(this.valor1) + parseInt(this.valor2);
   }
   sub(){
     this.result = parseInt(this.valor1) - parseInt(this.valor2);
   }
   mult(){
     this.result = parseInt(this.valor1) * parseInt(this.valor2);
   }
   div(){
     this.result = parseInt(this.valor1) / parseInt(this.valor2);
   }
   conta(){
     this.cont = this.result;
   }
 }