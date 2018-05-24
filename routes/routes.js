let riddles = require("../riddles.js");

let appRouter = function(app) {
    app.get("/riddle", (req, res) => {
        riddles.getRandomRiddle()
        .then((result) => {
            return res.send(result);
        })
        .catch((err) => {
            return res.send({error: "something went wrong"});
        })
    });
}

module.exports = appRouter;