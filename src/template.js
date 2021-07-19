const fs = require('fs');

cardArray = [];

function generateWebsite() { }

generateWebsite.prototype.build = function (teamArray) {

  function writeToFile(teamArray) {
    fs.writeFile(`index.html`, buildTemplate(teamArray), (err) =>
      err ? console.error(err) : console.log('Profile has been made.')
    );
  }

  buildTemplate = (teamArray) => {
    template = `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
          <title>Team Profile</title>
        </head>
        <body>
          <header class="text-center pt-4 pb-4 bg-success">
              <h1 class="text-light">Team Profile</h1>
          </header>
          ` + makeCards(teamArray) + `
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </body>
      </html>
      `
  }

  makeCards = (array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].role === 'Manager') {
        card = `
          <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
            <div class="card-header">${array[i].role}</div>
            <div class="card-body">
              <h5 class="card-title">${array[i].emName}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          `
        cardArray.push(card);
      }
      if (array[i].role === 'Engineer') {
        card = `
        <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
          <div class="card-header">${array[i].role}</div>
          <div class="card-body">
            <h5 class="card-title">${array[i].emName}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        `
        cardArray.push(card);
      }
      if (array[i].role === 'Intern') {
        card = `
        <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
          <div class="card-header">${array[i].role}</div>
          <div class="card-body">
            <h5 class="card-title">${array[i].emName}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        `
        cardArray.push(card);
      }
      return cardArray.join('+');
    }


  }
  writeToFile(teamArray);
}
module.exports = generateWebsite;