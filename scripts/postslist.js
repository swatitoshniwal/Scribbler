document.getElementById("expand").onclick = function () {
    window.location.href = '\post.html';
};
document.getElementById("expand1").onclick = function () {
    window.location.href = '\post.html';
};
document.getElementById("expand2").onclick = function () {
    window.location.href = '\post.html';
};
document.getElementById("expand3").onclick = function () {
    window.location.href = '\post.html';
};
document.getElementById("expand4").onclick = function () {
    window.location.href = '\post.html';
};

$(".fa-trash").click(function(){
    $(this).addClass("clicked");
    console.log("clicked");
});
$(".yesButton").click(function(){
    $(".clicked").parents(".post").remove();
    console.log("removed");
})