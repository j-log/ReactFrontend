import logo1 from './wipro_logo.svg';
import logo2 from './uni_logo.png';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [sub_id, set_sub_id] = useState("");
  const [computerName, set_computerName] = useState("");
  const [adminUsername, set_adminUsername] = useState("");
  const [adminPassword, set_adminPassword] = useState("");
  const [location, set_location] = useState("");
  const [rg_name, set_rg_name] = useState("");
  const [vnet_rg_name, set_vnet_rg_name] = useState("");
  const [vnet_name, set_vnet_name] = useState("");
  const [message, set_Message] = useState("");
  
  let CreateSubmit = async (e) => {
    e.preventDefault();
    //https://azure-vm-rest-api.azurewebsites.net/
    try {
      // let res = await fetch("http://127.0.0.1:5000/create_update_vm", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     sub_id : sub_id,
      //     computerName : computerName,
      //     adminUsername : adminUsername,
      //     adminPassword : adminPassword,
      //     location : location,
      //     rg_name : rg_name,
      //     vnet_rg_name : vnet_rg_name,
      //     vnet_name : vnet_name
      //   })
      // });
      let res = await fetch("https://azure-vm-rest-api.azurewebsites.net/create_update_vm", {
        method: "POST",
        body: JSON.stringify({
          sub_id : sub_id,
          computerName : computerName,
          adminUsername : adminUsername,
          adminPassword : adminPassword,
          location : location,
          rg_name : rg_name,
          vnet_rg_name : vnet_rg_name,
          vnet_name : vnet_name
        })
      });
      let status=res.status;
      console.log(status);
      let obj=await res.text();
      console.log(obj)
      if (status === 200 || status === 201) {
        set_computerName("");
        set_location("");
        set_Message("VM request submitted successfully !\n"+"Response code : "+status+"\nMessage :\n"+obj);
      }  
      else {
        set_Message("Error Occured\n"+"Response code : "+status+"\nError Message :\n"+obj);
      }
      console.log('response: ', res);
    } catch (err) {
      console.log(err);
    }
  };

  let CheckSubmit = async (e) => {
    e.preventDefault();
    try {
      // let res = await fetch("http://127.0.0.1:5000/check_status_vm", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     sub_id : sub_id,
      //     computerName : computerName,
      //     rg_name : rg_name
      //   })
      // });
      let res = await fetch("https://azure-vm-rest-api.azurewebsites.net/check_status_vm", {
        method: "POST",
        body: JSON.stringify({
          sub_id : sub_id,
          computerName : computerName,
          rg_name : rg_name
        })
      });
      let status=res.status;
      console.log(status);
      let obj=await res.text();
      console.log(obj)
      if (status === 200 || status === 201) {
        set_computerName("");
        set_location("");
        set_Message("Status Fetched successfully !\n"+"Response code : "+status+"\nMessage :\n"+obj);
      }  
      else {
        set_Message("Error Occured\n"+"Response code : "+status+"\nError Message :\n"+obj);
      }
      console.log('response: ', res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <div className="row">
        <div className="column">
          <img src={logo1} className="Uni-logo" alt="uni_logo" />
        </div>
        <div className="column">
          <header className='App-header'> Azure VM Dispenser </header>
        </div>
        <div className="column">
          <img src={logo2} className="Wipro-logo" alt="wipro_logo" />
        </div>
      </div>
      {/* FORM FOR TAKING INPUT FROM USER :  */}
      <div className="form">
        <div className="form-body">
          <label className="Form-header"htmlFor="firstName">Subscription ID : </label>
          <input
            className='form__input'
            type="text"
            value={sub_id}
            placeholder="< your subscription id >"
            onChange={(e) => set_sub_id(e.target.value)}
          />
          <label className="Form-header">Virtual Machine Name : </label>
          <input
            className="form__input"
            type="text"
            value={computerName}
            placeholder="< your azure virtual machine name >"
            onChange={(e) => set_computerName(e.target.value)}
          />
          <label className="Form-header">Location : </label>
          <input
            className="form__input"
            type="text"
            value={location}
            placeholder="< your azure vm location >"
            onChange={(e) => set_location(e.target.value)}
          />
          <label className="Form-header">Resource Group Name : </label>
          <input
            className="form__input"
            type="text"
            value={rg_name}
            placeholder="< your azure vm location resource group name >"
            onChange={(e) => set_rg_name(e.target.value)}
          />
          <label className="Form-header">Virtual Network Resource Group Name : </label>
          <input
            className="form__input"
            type="text"
            value={vnet_rg_name}
            placeholder="< your vnet location resource group name >"
            onChange={(e) => set_vnet_rg_name(e.target.value)}
          />
          <label className="Form-header">Virtual Network Name : </label>
          <input
            className="form__input"
            type="text"
            value={vnet_name}
            placeholder="< your virtual network name >"
            onChange={(e) => set_vnet_name(e.target.value)}
          />
          <label className="Form-header">Local Admin User : </label>
          <input
            className="form__input"
            type="text"
            height={20}
            value={adminUsername}
            placeholder="< Your local admin user name >"
            onChange={(e) => set_adminUsername(e.target.value)}
          />
          <label className="Form-header">Local Password : </label>
          <input
            className="form__input"
            type="password"
            value={adminPassword}
            placeholder="< Your local admin password >"
            onChange={(e) => set_adminPassword(e.target.value)}
          />
          <div className="message">
            {message ? <pre>{message}</pre> : null}
          </div>
          <div className="row">
            <div className="column">
            <button className="button-7" type="submit" onClick={CreateSubmit}> Create Now !</button>
            </div>
            <div className="column">
              <button className="button-7" type="submit" onClick={CheckSubmit}> Verify Now !</button> 
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
export default App;
