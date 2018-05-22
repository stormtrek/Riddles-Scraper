let riddles = require("../riddles.js");

let appRouter = function(app) {
    app.get("/riddle", (req, res) => {
        let getRiddle = riddles.getNewRiddle();
        getRiddle.then(function(data) {
            if (data["success"]) {
                return res.send({"status": "ok", "riddle": data["message"]});
            } else {
                return res.send({"status": "error", "message": data["message"]});
            }
        })
    });

}

module.exports = appRouter;