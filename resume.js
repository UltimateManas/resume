$(function () {
  console.log("jQuery Loaded");
  $.getJSON("./profile.json", function (data) {
    console.log(data);
    fillUL(data.summary, "ulSum");
    fillTable(data.skills,"divSkills");
    fillProjects(data.projects, "ulPros");
    fillUL(data.exps, "ulExps");
  });

  function fillSummary() {}

  function fillUL(data, targetEleId) {
    var html = "";
    for (let i = 0; i < data.length; i++) {
      html += "<li>" + data[i] + "</li>";
    }
    $("#" + targetEleId).html(html);
  }

  function fillTable(data, targetEleId) {
    var html = "";
    for (var proj of data) {
      var tbl = "<table><tbody>";
      for (var prop of Object.keys(proj)) {
        tbl += "<tr><th>" + prop + ":</th><td>" + proj[prop] + "</td></tr>";
      }
      tbl += "</tbody></table>";
      html += tbl;
    }
    $("#" + targetEleId).html(html);
  }

  function fillProjects(data, targetEleId) {
    var html = "";
    for (var proj of data) {
      html += "<li><div><h3>" + proj.Name + "</h3>";
      var tbl = "<table><tbody>";
      for (var prop of Object.keys(proj)) {
        if (prop != "Name") {
          tbl += "<tr><th>" + prop + ":</th><td>" + proj[prop] + "</td></tr>";
        }
      }
      tbl += "</tbody></table>";
      html += tbl;
      html += "</div></li>";
    }
    $("#" + targetEleId).html(html);
  }

  $("#linkDownload").click(function () {
    const element = document.getElementById("resumeBody");
    html2pdf().from(element).save();
  });
});
