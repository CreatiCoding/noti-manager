const driver = require("node-phantom-simple");
const self = {
  requestGet: url => {
    return new Promise(res => {
      driver.create({ path: require("phantomjs").path }, (err, browser) =>
        browser.createPage((err, page) =>
          page.open(url, (err, status) => {
            page.includeJs(
              "http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js",
              err => {
                console.log("site[" + url + "]: ", status);
                setTimeout(
                  () =>
                    page.evaluate(
                      function() {
                        return $("body").html();
                      },
                      (err, result) => {
                        res(result);
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
    });
  }
};

//export default self;
module.exports = self;
