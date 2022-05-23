import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  onSubmit(data: any)
  {
    console.warn(data);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
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
      mode: 'no-cors',
      redirect: 'follow'
    })
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      }
}

