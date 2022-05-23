import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
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
    //this.http.post('https://my-capstone-webapi.azurewebsites.net/create_update_vm',data)
    //.subscribe((result)=>{
    //  console.warn("result",result)
    //})
    console.warn(data);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Methods", "GET, OPTIONS, POST, PUT");
    var raw = JSON.stringify({
      "location": data.location,
      "sub_id": data.sub_id,
      "computerName": data.computerName,
      "adminUsername": data.adminUsername,
      "adminPassword": data.adminPassword,
      "networkInterface": data.networkInterface,
      "diskName": data.diskName
    });

    fetch("https://my-capstone-webapi.azurewebsites.net/create_update_vm", {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    })
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      }
}

