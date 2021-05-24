const cron = require('node-cron');
let shell = require('shelljs');
 
setInterval(function(){ alert("Still running"); }, 10000);

cron.schedule("00 10 * * *", function() {
    console.log("Scheduler running...");
    if(shell.exec("node index.js").code !== 0){
        console.log("Something went wrong");
    }

});
