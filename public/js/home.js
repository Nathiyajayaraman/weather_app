$(document).ready(function () {
    $("#searchBtn").click(function () {
        var value = $("#name").val();
        console.log(value);

        if (value == "") {
            alert("Please enter the city name");
            return;
        }
        alert("Sucess");
    });
});
