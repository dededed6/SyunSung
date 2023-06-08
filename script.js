var container;
var D = 1;
var today = 0;
var daybox = document.getElementById("daybox");
var dateText = document.getElementById("date");
var dayText = document.getElementById("day");

var scrollCenter = (daybox.scrollWidth - daybox.clientWidth) / 2;

window.onload=function() {
    daybox.scrollTo({left: scrollCenter, behavior:"auto"});
    var date = new Date();
    today = getDateDiff("2023-04-17", date);
    container = document.getElementsByTagName('div')[2];
    changeDday(today);
}

function changeDday(i) {
        setTimeout(function() {
            if(i > 0) {
                var abc = Number(dayText.innerText.split('일')[0]) + 1;
                dayText.innerText = abc + "일";
                dateText.innerText = new Date();
                changeDday(i - 1);
            }
            if(i < 0) {
                var abc = Number(dayText.innerText.split('일')[0]) - 1;
                if(abc < 1 ) return;
                dayText.innerText = abc + "일";
                dateText.innerText = new Date();
                changeDday(i + 1);
            }
        }, 10);
}

const getDateDiff = (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    
    const diffDate = date1.getTime() - date2.getTime();
    
    return Math.ceil(Math.abs(diffDate / (1000 * 60 * 60 * 24))); // 밀리세컨 * 초 * 분 * 시 = 일
}

$(document).on("click", "#btn", function(){
    var idx = $(this).index();
    
    alert('버튼 {}을 눌렀습니다.'.replace('{}', idx))
});

var cooltime = 0;
function onScroll() {
    var time = new Date().getTime();
    if (time > cooltime) {
        var scrollPosition = Math.round((daybox.scrollLeft - scrollCenter) / 6);
        changeDday(scrollPosition);

        cooltime = time + 1000 / (1+Math.abs(scrollPosition));
    }
    daybox.scrollTo({left: scrollCenter, behavior:"smooth"});
}