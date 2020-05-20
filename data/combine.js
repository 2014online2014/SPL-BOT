const fs = require('fs');

const history1 = require("./history.json");
const history2 = require("./history20200221.json");
const history3 = require("./history20200301.json");
const history4 = require("./history20200309.json");

const newHistory = history1.concat(history2).concat(history3).concat(history4)

fs.writeFile(`./data/newHistory.json`, JSON.stringify(newHistory), function (err) {
    if (err) {
        console.log(err);
    }
});
