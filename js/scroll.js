$(document).ready(function() {
    //Обработка нажатия на кнопку "Вверх"
    $("#up").click(function() {
        //Необходимо прокрутить в начало страницы
        let curPos = $(document).scrollTop();
        let scrollTime = curPos / 1.73;
        $("body,html").animate({ "scrollTop": 0 }, scrollTime);
    });

    //Обработка нажатия на кнопку "Вниз"
    $("#down").click(function() {
        //Необходимо прокрутить в конец страницы
        let curPos = $(document).scrollTop();
        let height = $("body").height();
        let scrollTime = (height - curPos) / 1.73;
        $("body,html").animate({ "scrollTop": height }, scrollTime);
    });
});// JavaScript File