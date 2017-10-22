import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getIdPeticion(){
		return this.http.get("http://localhost:8082/api/peticion").map(res => res.json());
	}

}
