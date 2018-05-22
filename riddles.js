let request = require('request');
let JSSoup = require('jssoup').default;

function getRandomRiddle() {
    let pages = 22;
    let page = Math.floor(Math.random() * pages) + 1;

    return new Promise((resolve, reject) => {
        request("https://riddles.fyi/page/" + page.toString(), {timeout: 2000}, (err, res, body) => {
            try {
                if (err) {
                    resolve({"success": false, "message": err.code})
                }

                let soup = new JSSoup(body);
        
                let posts = soup.findAll("article");
                let post = posts[Math.floor(Math.random() * posts.length)]
                
                soup = new JSSoup(post);
        
                let riddle = soup.find("h2", "entry-title").text;
                let answer = soup.find("div", "su-spoiler-content").text;

                resolve({"success": true, "riddle": riddle, "answer": answer});
            } 
            catch (err) {
                resolve({"success": false, "message": "something went wrong"});
            }
        })
    })
}

exports.getRandomRiddle = getRandomRiddle;