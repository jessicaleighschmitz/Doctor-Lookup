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
    console.log(query);

    promise.then(function(response){
      let body = JSON.parse(response)
      console.log("yeeet", response);
      $('#output').html("yee");
    });
  });
});
