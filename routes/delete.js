var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose()

router.get('/', function (req, res, next) {
    res.render('delete', {title:'Delete'});
});

router.post('/', (req, res, next) => {
    var db = new sqlite3.Database('catBlog.sqlite3', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
        (err) => {
            if (err) {
                console.log("Getting error " + err);
                exit(1);
            }
            console.log("deleting " + req.body.blogId);
            db.exec(`DELETE FROM catBlog WHERE id='${req.body.blogId}';`);
            res.redirect('/');
        }
    );
})

module.exports = router;