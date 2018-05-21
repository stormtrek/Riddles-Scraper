let request = require('request');
let JSSoup = require('jssoup').default;;

function getNewRiddle(cb) {
    let pages = 22;
    let page = Math.floor(Math.random() * pages) + 1;
    
    let riddle = request("https://riddles.fyi/page/" + page.toString(), (err, res, body) => {
        let soup = new JSSoup(body);
    
        let posts = soup.findAll("article");
        let post = posts[Math.floor(Math.random() * posts.length)]

        soup = new JSSoup(post);

        let riddle = soup.find("h2", "entry-title").text;

        cb(riddle);
    });
}

exports.getNewRiddle = getNewRiddle;

