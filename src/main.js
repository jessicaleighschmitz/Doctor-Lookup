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
      function getResults(response) {
        let first_name = body.data[0].profile.first_name;
        let last_name = body.data[0].profile.last_name;
        let address = body.data[0].visit_address.street + ", " + body.data[0].visit_address.city + ", " + body.data[0].visit_address.state + ", " + body.data[0].visit_address.zip;
        let website = body.data[0].practices[0].website;
        let phone = body.data[0].practices[0].phones[0].number;
        let newPatients = "Accepts new patients: " + body.data[0].accepts_new_patients;
      }

      console.log("yeeet", body);

    });
  });
});
