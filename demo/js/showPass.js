/**
 * Created by Alastair on 28/10/2014.
 */
function showPassword() {

    var key_attr = $('#key').attr('type');

    if(key_attr != 'text') {

        $('.checkbox').addClass('show');
        $('#key').attr('type', 'text');

    } else {

        $('.checkbox').removeClass('show');
        $('#key').attr('type', 'password');

    }

}
/*

$(document).ready(function(){
    */
/*$('form').one('mouseenter', function() {
        var t = new Tour({
            backdrop: true
        });

        var parent = $('.form-signin').parent().parent().parent();

        var parentClass = parent.attr('class');

        t.addStep({
            element: parent,
            onShown: function(){
                $("<div id=myDiv>hello</div>").inserBefore('.container');
            }
        });
        t.restart();
    });*//*

});*/
