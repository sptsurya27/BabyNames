var fs = require('fs');

fs.readFile('./baby-names.csv', function(err, data) {
    if(err) {
        console.log(err);
        throw err
    }
    var parsedData = data.toString('utf-8')
    var result = parsedData.split('\n').slice(1).map(function(intel) {
     var pieceOfData = intel.split(',')
     return {
         birthYear: parseInt(pieceOfData[0]),
         gender: pieceOfData[1],
         ethniticty: pieceOfData[2],
         name: pieceOfData[3],
         count: parseInt(pieceOfData[4]),
         rank: parseInt(pieceOfData[5]),
     }
    }).sort(function(a, b){
    if (a.count < a.count) return 1
    })
    console.log(result[0])
})