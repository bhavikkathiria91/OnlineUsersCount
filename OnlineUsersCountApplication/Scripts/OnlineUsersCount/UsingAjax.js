// A function that would get online visitor count from server.
function GetOnlineUsersCount() {
    $.ajax({
        type: "GET",
        url: GlobalUrlPath + 'api/OnlineUsersCountApi',
        async: false,
        success: function (data) {
            SetOnlineUsersCount(data);
        },
        error: function () {
            alert("Error: " + xhr.status + " " + xhr.statusText);
        }
    });
}

// Add the count to the page. 
function SetOnlineUsersCount(data) {
    $("#userCount").html(data);
}

// Notify the server about window close event.
function NotifyWindowClose() {
    $(window).bind("beforeunload", function () {
        $.ajax({
            type: "GET",
            url: GlobalUrlPath + 'api/NotifyWindowCloseApi'
        });
    })
}