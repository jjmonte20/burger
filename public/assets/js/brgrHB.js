$(function(){
    $(".eatBurger").on("click", function(event) {
        console.log("button works");
        var id = $(this).data("id");
        var eat = $(this).data("eat");

        var newEatState = {
            eaten: eat
        };

        // send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function() {
                console.log("changed eaten to", eat);
                // reloading the page
                location.reload();
                
            }
        );
    });
}); 