import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  description = '';

  constructor(private http:HttpClient){}

  ngOnInit(){

    this.http.get("http://localhost:8080/nombre",{responseType:'text'}).subscribe((resp:any) => {
      this.title = resp;
    });

    this.http.get("http://localhost:8080/descripcion",{responseType:'text'}).subscribe((resp:any) => { 
      this.description = resp;
    });

  }
}
