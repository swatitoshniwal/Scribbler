var author = document.getElementById("author");
var title = document.getElementById("heading");
var content = document.getElementById("content");
var numberOflikes = 0;

window.onload = function() {
    // Fetch data from Session storage to fetch the details of the clicked post
    author.innerHTML = sessionStorage.getItem("author");
    title.innerHTML = sessionStorage.getItem("heading");
    content.innerHTML = sessionStorage.getItem("content");
};

document.addEventListener(
    "click",
    function(e) {
        if (hasClass(e.target, "saved")) {
            // edit
            e.target.classList.remove("saved");
            e.target.classList.add("unsaved");
            e.target.innerHTML = 'Save <i class="fa fa-save"></i>';
            title.setAttribute("contenteditable", true);
            title.classList.add("editable");
            content.setAttribute("contenteditable", true);
            content.classList.add("editable");
        } else if (hasClass(e.target, "unsaved")) {
            // save button clicked
            e.target.classList.remove("unsaved");
            e.target.classList.add("saved");
            e.target.innerHTML = 'Edit <i class="fa fa-edit"></i>';
            title.setAttribute("contenteditable", false);
            title.classList.remove("editable");
            content.setAttribute("contenteditable", false);
            content.classList.remove("editable");

            sessionStorage.setItem("postTitle", title.innerText);
            sessionStorage.setItem("postContent", content.innerText);
        } else if (hasClass(e.target, "like-button")) {
            // like
            numberOflikes++;
            e.target.innerHTML = '<i class="fa fa-thumbs-up"></i> Liked';
            if (numberOflikes == 1) {
                document.getElementById("likeText").innerHTML = "1 person likes this!";
            } else if (numberOflikes > 1) {
                document.getElementById("likeText").innerHTML =
                    numberOflikes + " people like this!";
            }
        } else if (hasClass(e.target, "comment-button")) {
            // comment
            var commentText = document.getElementById("commentBox").value.trim();
            if (commentText !== "") {
                // comments sorted by time
                document.getElementById("commentsWrapper").innerHTML =
                    "<p>" + commentText + "</p>" +
                    document.getElementById("commentsWrapper").innerHTML;
            }
            // Empty string in comment box after comment posted
            document.getElementById("commentBox").value = "";
        }
    },
    false
);
function hasClass(elem, className) {
    return elem.classList.contains(className);
}