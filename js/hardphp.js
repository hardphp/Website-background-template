$(function () {
    var headerheight = 57;
    var siderbarwidth = 220;

    var siderbar=$("#siderbar");
    var content=$("#content");
    siderbar.height($(window).height()-headerheight);
    content.height($(window).height()-headerheight);
    content.width($(window).width()-siderbarwidth);
    $(window).resize(function(){
        siderbar.height($(window).height()-headerheight);
        content.height($(window).height()-headerheight);
        content.width($(window).width()-siderbarwidth);
    });
});
