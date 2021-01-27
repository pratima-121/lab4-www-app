$(function () {
    let postId;
    const baseURL = "https://jsonplaceholder.typicode.com/posts/";

    $('#submit').click(getPost);

    function getPost() {
        postId = $('#postId').val();

        let endpoint = baseURL + postId;
        $.getJSON(endpoint, function (data) {
            $('#title').text(data.title);
            $('#content').text(data.body);
            $('#postId').val("");
        })
        .fail(function() { alert("Post not found!"); });
    };
});