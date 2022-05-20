import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor( private http:HttpClient ){}
  onSubmit(data: any)
  {
    //this.http.post()
    //console.warn(data.vmname);
    console.warn(data);
  }
}
