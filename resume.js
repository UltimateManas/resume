$(function(){
    console.log("jQuery Loaded");
    $.getJSON("./profile.json",function(data){
        console.log(data);
    });
});
