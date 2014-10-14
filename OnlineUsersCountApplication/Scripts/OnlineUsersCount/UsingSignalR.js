function GetOnlineUsersCount() {
    // Reference the auto-generated proxy for the hub.  
    var userActivity = $.connection.userActivityHub;

    // Create a function that the hub can call back to display messages.
    userActivity.client.updateUsersOnlineCount = function (count) {
        // Add the count to the page. 
        $("#userCount").html(count);
    };

    $.connection.hub.start();
};