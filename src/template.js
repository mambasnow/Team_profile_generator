const genTemplate = function(str){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Portfolio</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
    </style>
    </head>
    <body>
    <div class="header">
    <div class="jumbotron bg-secondary">
       <h1 class="display-4 text-white text-center"> Employees</h1>
    </div>
    </div>
    <div class="container-body container-fluid">
       <div class="row">
            ${str} 
        </div>
    </div>
    <script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>  
    </body>
    </html>`
}



const genCard = function (employArray) {

    let roleInfo;

    if (employArray.role === "Manager") {roleInfo = `Office #: ${employArray.officeNumber}`} ; 
    if (employArray.role === "Engineer") {roleInfo = `Github Username: ${employArray.github}`};
    if (employArray.role === "Intern") {roleInfo = `School: ${employArray.school}`};

    return `<div class="card">
                <div class="card-header">
                <h2>${employArray.name}</h2>  
                <h2><i class="far fa-user"></i> ${employArray.role}</h2>
                </div>
                <div class="card-body">
                <ul>
                    <li>ID: ${employArray.id}</li>
                    <li>Email: ${employArray.email}</li>
                    <li>${roleInfo} </li>
                </ul>
                </div>
                </div>`
}




exports.genTemplate = genTemplate;
exports.genCard = genCard;