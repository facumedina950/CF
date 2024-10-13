import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit{
 
  
  @Input() titulo: string = '';
  @Input() valor: number = 0;
  @Input() icono: string = '';
  @Input() backgroundColor:string = ''
  ngOnInit(){
   //this.backgroundColor= this.setBackgroundcolor(this.icono)
  }

 // setBackgroundcolor(alert:string){
 //   if(alert.includes('Vector')){
 //     return 'items__alert-img--green'
 //   }
 //   if(alert.includes('AlertaMedia')){
 //     return 'items__alert-img--yellow'
 //   }
 //   return ''
 // }
  
}


