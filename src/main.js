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



    promise.then(function(response){
      let body = JSON.parse(response)

      console.log("yeeet", response);
      $('#output').html(`<li>${body.data[0].practices[0].phones.number}</li>`);
    });
  });
});
