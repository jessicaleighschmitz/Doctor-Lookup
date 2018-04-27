import $ from 'jquery';
import './main.js';


class Api {
  makeApiCall(){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=eczema&location=or-portland&skip=0&limit=1&user_key=${process.env.exports.apiKey}`
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
  // showResult(response){
  //   $("#output").empty();
  //   for(let i = 0; i < )
  // }
}
export {Api};
