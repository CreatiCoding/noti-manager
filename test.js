const parser = require("./parser");

parser.requestGet("http://www.woowahan.com/#/recruit/tech").then(d => {
  console.log(d.substr(d.indexOf("프론트"), d.indexOf("프론트") + 100));
  d = d.substr(d.indexOf("프론트"));
  console.log(d.substr(d.indexOf("프론트"), d.indexOf("프론트") + 100));
  d = d.substr(d.indexOf("프론트"));
  console.log(d.substr(d.indexOf("프론트"), d.indexOf("프론트") + 100));
  d = d.substr(d.indexOf("프론트"));
});
