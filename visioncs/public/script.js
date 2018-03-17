
//for apply

$(document).ready(function() {
    // var doc = $(document);
    $(".footer").css("top",($(document).height()-100));

    var $choice_uni = $(".choice_uni");
    var $school = $("#school");

    $choice_uni.click(function(){
        $(this).siblings().removeClass("applyon");
        $(this).addClass("applyon");
        var sh_name = $(this).children().attr("value");
        $school.text(sh_name);    
}); 
//for fresh application form
    var $fresh_list = $("tr:not(:first-child)");
    var $licheck,$this;
    $fresh_list.hover(
        function(){
            $(this).css("background-color","#fdf0d5");
            $(this).css("cursor","pointer");
        },
        function(){
            $(this).css("background-color","white");
        });
        
    $fresh_list.click(function(){
        $licheck = $(".licheck");
        $this = $(this);
        if($licheck.length >= 3){
            $licheck.removeClass("licheck");    
            $(".fresh_article").addClass("lets_hide");
        }
        $this.find("td").addClass("licheck");
        $this.next().children().removeClass("lets_hide"); 
    });
    
    var $part = $('#part');
    var $say = $('#say');
    var $personimg = null;
    var indexnumber = 0;
    
    var say = {
        1:'리얼 괜찮은 동아리'
        ,2:'유일한 막내'
        ,3:' I’M A VALUE CREATOR. 세상에없는 선한 가치를 고민합니다. '
        ,4:'비전의 돈줄을 맡고 있습니당 ^_^ 꺄르륵'
        ,5:'사랑은 동사다'
        
    };
    
    $('.personbox').click(function(){
        $(".imgon").removeClass('imgon');
        $personimg = $(this).children('img');
        $personimg.addClass('imgon');
        indexnumber = $(this).index();
        $part.html($personimg.attr('value'));
        $say.html(say[indexnumber]);
    });
    
});