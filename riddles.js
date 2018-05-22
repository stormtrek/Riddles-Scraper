let request = require("request");
let JSSoup = require("jssoup").default;

function getNewRiddle() {
  let pages = 22;
  let page = Math.floor(Math.random() * pages) + 1;

  return new Promise((resolve, reject) => {
    request
      .get(
        "https://riddles.fyi/page/" + page.toString(),
        { timeout: 2000 },
        (err, res, body) => {
          try {
            if (err) {
              resolve({ success: false, message: err.code });
            }

            let soup = new JSSoup(body);

            let posts = soup.findAll("article");
            let post = posts[Math.floor(Math.random() * posts.length)];

            soup = new JSSoup(post);

            let riddle = soup.find("h2", "entry-title").text;

            resolve({ success: true, message: riddle });
          } catch (err) {
            resolve({ success: false, message: "something went wrong" });
          }
        }
      )
      .on("error", err => {
        resolve({ success: false, message: err.code });
      });
  });
}

exports.getNewRiddle = getNewRiddle;
