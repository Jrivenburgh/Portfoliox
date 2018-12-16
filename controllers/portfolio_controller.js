const express = require("express");

const router = express.Router();


// Create all our routes and set up logic within those routes where required.


router.get("/", (req, res) => {


    // Must be placed in an object varible to be accessed correctly, shows up as objects otherwise
    const hbsObject = {
      style: "index",
      jsFile:"main",
      title:"Joshua Rivenburgh"
    };

    console.log(hbsObject);
    
    res.render("index", hbsObject);

});



router.get('/Projects', (req, res) => {


    const hbsObject = {
      style: "projects",
      jsfile:"project",
      title:"Projects",
    };

      res.render("project",hbsObject);
});

router.get('/contact', (req, res) => {


  const hbsObject = {
    style: "contact",
    jsfile:"contact",
    title:"Contact Me",
  };

    res.render("contact",hbsObject);
});

// Export routes for server.js to use.
module.exports = router;
