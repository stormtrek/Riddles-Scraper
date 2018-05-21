let riddles = require("../riddles.js");

let appRouter = function(app) {
    app.get("/riddle", function(req, res) {
        riddles.getNewRiddle(function(riddle) {
            if (riddle) {
                return res.send({"status": "ok", "riddle": riddle});
            } else {
                return res.send({"status": "error"});
            }
        });
    });

}

module.exports = appRouter;