var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose()

router.get('/', function (req, res, next) {
    res.render('edit', {title:'Edit Entry'});
});

router.post('/', (req, res, next) => {
    var db = new sqlite3.Database('catBlog.sqlite3', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
        (err) => {
            if (err) {
                console.log("Getting error " + err);
                exit(1);
            }
            console.log("inserting " + req.body.blogTitle + " " + req.body.blogEntry);
            db.exec(`INSERT INTO catBlog (title, entry, img)
                values ('${req.body.blogTitle}', '${req.body.blogEntry}', '${req.body.blogEntry}');`)
            //redirect to homepage
            res.redirect('/');
        }
    );
})

module.exports = router;