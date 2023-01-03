$(document).ready(function () {
    $("#searchBtn").click(function () {
        $("#pTag").text("Loading...");
        var city = $("#city").val();

        if (city == "") {
            alert("Please enter the city name");
            return;
        }
        
        $.ajax({
            url:`/api/weather?city=${city}`,
            type: 'GET',
            success: function(res){
                console.log(res);
                $("#pTag").text(res);
                $("#city").val("");
            }
        })
    });
});
