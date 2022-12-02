var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose()

/* GET home page. */
router.get('/', function (req, res, next) {
    var db = new sqlite3.Database('catBlog.sqlite3', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
        (err) => {
            if (err) {
                console.log("Getting error " + err);
                exit(1);
            }
            //Query if the table exists if not lets create it on the fly!
            db.all(`SELECT name FROM sqlite_master WHERE type='table' AND name='catBlog'`,
                (err, rows) => {
                    if (rows.length === 1) {
                        console.log("Table exists!");
                        // db.all(`drop table catBlog`, (err, rows) => {
                        //             console.log("droping " + rows.length + " records");
                        //             res.render('index', { title: 'Cat Blog', data: rows });
                        //         });
                        db.all(`SELECT id, title, entry FROM catBlog`,
                            (err, rows) => {
                                console.log("returning " + rows.length + " records");
                                res.render('index', { title: 'Cat Blog', data: rows });
                            });
                    } else {
                        console.log("Creating table and inserting some sample data");
                        db.exec(`create table catBlog (
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            title text NOT NULL, 
                            entry text NOT NULL,
                            img blob);
                            insert into catBlog (title, entry, img)
                            values ('This is great title, 'This is a great Entry', NULL),
                            ('Oh my goodness blogging is fun');`,
                            () => {
                                db.all(`SELECT id, title, entry FROM catBlog`, (err, rows) => {
                                    res.render('index', { title: 'Cat Blog', data: rows });
                                });
                            });
                    }
                });
        });
});

module.exports = router;
