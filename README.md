# Doctor Lookup using Api

#### A website that uses the BetterDoctor API in order to demonstrate the ability to parse API JSON data and use JavaScript promises.

#### **By, Jessica Schmitz**

![application screenshot](src/images/doctorfinder.png)

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| Program takes in user input keyword for a medical symptom and will display list of doctors in Portland who match the search results | "eczema" | [["Taylor", "Thomas", "222 Second Ave", "(503)333-333", "www.drthomas.com", "Accepting new patients"], [["Smith", "Scott", "111 First Ave", "(503)111-1111", "www.drScott.com", "Accepting new patients"]...|
| Program can return an error if there is an error with the API call | "eczema" | "A 404 error occurred" |
| Program can take in a user keyword search and return an detailed error if no doctors match the search criteria | "clown" | "There are no doctors who matched that search criteria, please enter in a different keyword" |


## Setup/Installation Requirements

1. Clone this repository using Git/Bash in your computer terminal.
2. Using the terminal, navigate to the project's root directory.
3. Run npm install.
4. Ensure that webpack is functional by running npm run build in the terminal.
5. Create a .env file in the project and place your personal API key in a variable there.
6. Enter npm run start into the terminal to load the server.

## Known Bugs
 * No known bugs.

## Technologies Used
 * JavaScript
 * Jquery
 * Webpack
 * Jasmine
 * Karma
 * ESLint
 * Ajax*

## Contact Details

Contact me with any questions or concerns at Schmitz.jessical@gmail.computer

### License

Copyright <2018> <Jessica Schmitz>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
