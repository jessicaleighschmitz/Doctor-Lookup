import $ from 'jquery';
import './main.js';


class Api {
  makeApiCall(){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = ``
      request.onload = function() {
        if(this.status === 200) {
          resolve(request.response);
        } else {
          rejesct(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
