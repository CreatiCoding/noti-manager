const driver = require("node-phantom-simple");

driver.create({ path: require("phantomjs").path }, (err, browser) =>
  browser.createPage((err, page) =>
    page.open("http://www.woowahan.com/#/recruit/tech", (err, status) => {
      page.includeJs(
        "http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js",
        err => {
          console.log("opened site? ", status);
          setTimeout(
            () =>
              page.evaluate(
                function() {
                  console.log($);
                  return $("body").html();
                },
                (err, result) => {
                  console.log(result);
                  browser.exit();
                }
              ),
            5000
          );
        }
      );
    })
  )
);
