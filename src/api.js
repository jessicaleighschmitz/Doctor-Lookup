import $ from 'jquery';
import {getFormVal} from './main.js';


class Api {
  makeApiCall(){
    let queryy = getFormVal();
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${queryy}&location=or-portland&skip=0&limit=80&user_key=${process.env.exports.apiKey}`
      request.onload = function() {
        if(this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
export {Api};
