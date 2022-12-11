$(function () {
  console.log("jQuery Loaded");
  $.getJSON("./profile.json", function (data) {
    fillProjects(data,"ulPros");
    fillExps(data, "ulExps");
  });

  function fillProjects(data, targetEleId){
    var html = "";
    for (var proj of data.projects) {
      html += "<li><div><h3>" + proj.Name + "</h3>";
      var tbl = "<table><tbody>";
      for (var prop of proj) {
        if (prop != "Name") {
          tbl += "<tr><th>" + prop + ":</th><td>" + proj[prop] + "</td></tr>";
        }
      }
      tbl += "</tbody></table>";
      html += tbl;
      html += "</div></li>";
    }
    $("#"+targetEleId).html(html);
  }

  function fillExps(data, targetEleId){
    var html = "";
    for (var exp in data.exps) {
      html+="<li>"+exp+"</li>";
    }
    $("#"+targetEleId).html(html);
  }

  $("#linkDownload").click(function(){
    const element = document.getElementById('resumeBody');
        html2pdf()
            .from(element)
            .save();
  });
});
