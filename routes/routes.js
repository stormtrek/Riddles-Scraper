let riddles = require("../riddles.js");

let appRouter = function(app) {
    app.get("/riddle", (req, res) => {
        let getRiddle = riddles.getRandomRiddle();
        getRiddle.then((data) => {
            if (data["success"]) {
                return res.send({"status": "ok", "riddle": data["riddle"], "answer": data["answer"]});
            } else {
                return res.send({"status": "error", "message": data["message"]});
            }
        })
    });

}

module.exports = appRouter;