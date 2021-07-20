const fs = require('fs');

function generateWebsite() { }

generateWebsite.prototype.build = function (teamArray) {
  let templateStart = `
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
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex justify-content-center">
      `;
  let templateEnd = `
          </div>
        </div>
      </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </body>
  </html>
`;

  function writeToFile(teamArray) {
    fs.writeFile(`index.html`, buildTemplate(teamArray), (err) =>
      err ? console.error(err) : console.log('Profile has been made.')
    );
  }
 
  makeCards = (teamArray) => {
    for (let i = 0; i < teamArray.length; i++) {
      if (teamArray[i].role === 'Manager') {
        card = `
          <div class="card m-3">
            <div class="card-header bg-success text-light">
              <h2 class="card-title">${teamArray[i].emName}</h2>
              <h3 class="card-title">Manager</h3>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">ID: ${teamArray[i].id}</li>
                <li class="list-group-item">Email: ${teamArray[i].email}</li>
                <li class="list-group-item">Office Number: ${teamArray[i].officeNumber}</li>
              </ul>
            </div>
          </div>
          `
        teamArray.push(card);
        teamArray.shift();
      }
      if (teamArray[i].role === 'Engineer') {
        card = `
          <div class="card m-3">
            <div class="card-header bg-success text-light">
              <h2 class="card-title">${teamArray[i].emName}</h2>
              <h3 class="card-title">Engineer</h3>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">ID: ${teamArray[i].id}</li>
                <li class="list-group-item">Email: ${teamArray[i].email}</li>
                <li class="list-group-item">GitHub: ${teamArray[i].gitub}</li>
              </ul>
            </div>
          </div>
        `
        teamArray.push(card)
        teamArray.shift();
      }
      if (teamArray[i].role === 'Intern') {
        card = `
          <div class="card m-3">
            <div class="card-header bg-success text-light">
              <h2 class="card-title">${teamArray[i].emName}</h2>
              <h3 class="card-title">Intern</h3>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">ID: ${teamArray[i].id}</li>
                <li class="list-group-item">Email: ${teamArray[i].email}</li>
                <li class="list-group-item">School: ${teamArray[i].school}</li>
              </ul>
            </div>
          </div>
        `
        teamArray.push(card)
        teamArray.shift();
      }
    }
    console.log(teamArray);
    console.log(teamArray);
    return teamArray.join(' ');
  }

  function buildTemplate(teamArray) {
      let template  = templateStart + makeCards(teamArray) + templateEnd;
      console.log(template);
      return template; 
  }
  writeToFile(teamArray);
}
module.exports = generateWebsite;