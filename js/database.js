var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose()

/* GET home page. */
router.get('/', function (req, res, next) {
    var db = new sqlite3.Database('mydb.sqlite3', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
        (err) => {
            if (err) {
                console.log("Getting error " + err);
                exit(1);
            }
            //Query if the table exists if not lets create it on the fly!
            db.all(`SELECT name FROM sqlite_master WHERE type='table' AND name='Animals'`,
                (err, rows) => {
                    if (rows.length === 1) {
                        console.log("Table exists!");
                        db.all(`SELECT id, txt FROM Animals`,
                            (err, rows) => {
                                console.log("returning " + rows.length + " records");
                                res.render('index', { title: 'Favorite Animals', data: rows });
                            });
                    } else {
                        console.log("Creating table and inserting some sample data");
                        db.exec(`create table Animals (
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            txt text NOT NULL);
                            insert into Animals (txt)
                            values ('This is a great Animals'),
                            ('Oh my goodness blogging is fun');`,
                            () => {
                                db.all(`SELECT id, txt FROM Animals`, (err, rows) => {
                                    res.render('index', { title: 'Favorite Animals', data: rows });
                                });
                            });
                    }
                });
        });
});

router.post('/add', (req, res, next) => {
    var db = new sqlite3.Database('mydb.sqlite3', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
        (err) => {
            if (err) {
                console.log("Getting error " + err);
                exit(1);
            }
            console.log("inserting " + req.body.txt);
            db.exec(`INSERT INTO Animals (txt)
                values ('${req.body.txt}');`)
            //redirect to homepage
            res.redirect('/');
        }
    );
})

router.post('/delete', (req, res, next) => {
    var db = new sqlite3.Database('mydb.sqlite3', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
        (err) => {
            if (err) {
                console.log("Getting error " + err);
                exit(1);
            }
            // console.log("deleting " + req.body.id);
            db.exec(`DELETE FROM Animals WHERE id='${req.body.id}';`);
            res.redirect('/');
        }
    );
})

module.exports = router;
