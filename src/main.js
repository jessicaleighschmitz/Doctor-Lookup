// empty
import { Api } from './api.js';
import $ from 'jquery';
import './styles.css';

$(document).ready(function(){
  console.log("yellow");
  $('#symptomForm').submit(function(event){
    event.preventDefault();
    let api = new Api();
    let query = $('#symptomForm').val();
    let promise = api.makeApiCall();
    let docArr = [];

    promise.then(function(response){
      let body = JSON.parse(response);
      let arrayLimit = body.meta.limit;
      for(let i = 0; i < arrayLimit; i++) {
        let first_name = body.data[i].profile.first_name;
        let last_name = body.data[i].profile.last_name;
        let address = body.data[i].practices[0].visit_address.street + ", " + body.data[i].practices[0].visit_address.city + ", " + body.data[i].practices[0].visit_address.state + ", " + body.data[i].practices[0].visit_address.zip;
        let website = body.data[i].practices[0].website;
        let phone = body.data[i].practices[0].phones[0].number;
        let newPatients = "Accepts new patients: " + body.data[i].accepts_new_patients;
        console.log("yeeet", first_name, last_name, address, website, phone, newPatients);
      }



    });
  });
});
