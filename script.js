$(".button1").click(function() {
    $(".words1").show();
    $(".button1").text("Thank you!");
    $("body").css("color", "#eaff00");
});

$(".words1").hide();

$(".img1").hide();

$(".img2").hide();

$(".words1").hover(function() {
    $(".img1").show();
    $(".words1").text("Now double click image");
});

$(".img1").dblclick(function() {
    $(".img2").show();
    $(".img1").hide();
    $(".words1").text("hover over the castle");
    $(".words1").css("background-color", "aqua");
});

$(".img2").hover(function() {
    $(".words1").text("Your Princess is in another castle!");
    $(".Weeb").show();
    $(".img2").hide();
    $(".img1").hide();
    $(".Words2").show();
});

$(".Weeb").click(function() {
    $(".Finale").toggle();
    $(".Weeb").hide();
    $(".words1").hide();
    $(".Words2").hide();
    $(".button1").hide();
    $("img2").hide();
    $(".img1").hide();
});