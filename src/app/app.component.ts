import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { StompService } from 'ng2-stomp-service';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private appService: AppService, public stomp: StompService) {
    stomp.configure({
      host: 'http://localhost:8082/webSocketEndPoint',
      debug: true,
      queue: { 'init': false }
    });
  }

  private idPeticion: string;
  private subscription : any;
  private mensaje: string;

  ngOnInit() {
    this.appService.getIdPeticion().subscribe(
      result => {
        this.idPeticion = result.idPeticion;
        console.log(this.idPeticion);



        this.stomp.startConnect().then(() => {
          this.stomp.done('init');
          console.log('connected');
          
          //subscribe
          this.subscription = this.stomp.subscribe('/channel/'+this.idPeticion, this.response);
    
          
        });



      },
      error => {
        console.log(<any>error);
      }
    );

  }

  public response = (data) => {
    console.log(data)
    this.mensaje = data.mensaje;
  }

}
