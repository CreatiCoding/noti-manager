var driver = require("node-phantom-simple");

driver.create({ path: require("phantomjs").path }, (err, browser) =>
  browser.createPage((err, page) =>
    page.open("http://www.woowahan.com/#/recruit/tech", (err, status) => {
      console.log("opened site? ", status);
      setTimeout(
        () =>
          page.evaluate(
            () => $("body").html(),
            (err, result) => {
              console.log(result);
              browser.exit();
            }
          ),
        5000
      );
    })
  )
);
