const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");

router.get("/", (req, res) => {
    try {
        con.query("SELECT * FROM products", (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});
router.get("/:id", (req, res) => {
    try {
        con.query(
            `SELECT * FROM products WHERE product_id='${req.params.id}'`,
            (err, result) => {
                if (err) throw err;
                res.send(result);
            }
        );
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

module.exports = router;