$(function () {
  console.log("jQuery Loaded");
  $.getJSON("./profile.json", function (data) {
    var html = "";
    for (var proj of data.projects) {
      html += "<li><div><h3>" + proj.Name + "</h3>";
      var tbl = "<table><tbody>";
      for (var prop in proj) {
        if (prop != "Name") {
          tbl += "<tr><th>" + prop + "</th><td>" + proj[prop] + "</td></tr>";
        }
      }
      tbl += "</tbody></table>";
      html += tbl;
      html += "</div></li>";
      console.log(proj);
    }
    $("#ulPros").html(html);
  });
});
