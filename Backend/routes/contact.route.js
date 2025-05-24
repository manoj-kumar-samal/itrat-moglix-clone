const express = require('express');
const router = express.Router();
const Contact=require("../controllers/contact.controller.js")


router.post("/contact",Contact.contact)


module.exports = router;
