// empty
import { Api } from './api.js';
import $ from 'jquery';
import './styles.css';

function getFormVal(){
  return $('#symptomSearch').val();
}

$(document).ready(function(){
  $('#symptomForm').submit(function(event){
    event.preventDefault();

    let api = new Api();
    let promise = api.makeApiCall();
    promise.then(function(response){

      let body = JSON.parse(response);
      if(body.meta.total === 0){
        $('#output').html("No doctors currently match your search criteria, please try another keyword.");
      } else {
        let arrayLimit = body.meta.limit;
        for(let i = 0; i < arrayLimit; i++) {
          let first_name = body.data[i].profile.first_name;
          let last_name = body.data[i].profile.last_name;
          let address = body.data[i].practices[0].visit_address.street + ", " + body.data[i].practices[0].visit_address.city + ", " + body.data[i].practices[0].visit_address.state + ", " + body.data[i].practices[0].visit_address.zip;
          let website;
          if(body.data[i].practices[0].website === undefined){
            website = "Does not have";
          } else{
            website = body.data[i].practices[0].website;
          }
          let phone = body.data[i].practices[0].phones[0].number;
          let newPatients = "Accepts new patients: " + body.data[i].practices[0].accepts_new_patients;

          $("#output").append(`<p class="info">Dr: ${first_name} ${last_name}<br>
          Address: ${address}<br>
          Website: ${website}<br>
          Phone Number: ${phone}<br>
          ${newPatients}
          </p>`);
        }
      }
    });
  });
});

export {getFormVal}
