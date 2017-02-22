let $imgCt = $('.carousel');
var $preBtn = $('.btnpre');
const $thumbnail = $('.thumbnail')
var $nextBtn = $('.btnnext');
let timer;
const $firstImg= $imgCt.find('li').first();
const $lastImg = $imgCt.find('li').last();

var curPageIndex = 0;
const imgLength = $imgCt.children().length;

$imgCt.prepend($lastImg.clone());
$imgCt.append($firstImg.clone());


$imgCt.width($firstImg.width()*$imgCt.children().length);
$imgCt.css('left','-1000px');
autoplay();

$preBtn.on('click',function(e){
	stopAuto();
	e.preventDefault();
	playPre();
	remainplay()
});
$nextBtn.on('click',function(e){
	stopAuto();
	e.preventDefault();
	playNext();
	remainplay();
});
$thumbnail.find('li').on('click',function(){
	stopAuto();
	var curIndex = $(this).index();
	$imgCt.css({'left':-(curIndex*$firstImg.width())});
	remainplay();
})

function playNext(){
	$imgCt.animate({left:'-=1000'},
		function(){
			curPageIndex++;
			thumbnail(curPageIndex);
			if(curPageIndex===imgLength){
				$imgCt.css({'left':'-1000px'});
				curPageIndex=0;
			}
		})
} 

function playPre(){
	$imgCt.animate({left:'+=1000'},
		function(){
			curPageIndex--;
			thumbnail(curPageIndex);
			if(curPageIndex<0){
				$imgCt.css({'left':-(imgLength*$firstImg.width())});
				curPageIndex=imgLength-1;
			}
		})
} 
function autoplay(){
	 timer = setInterval(function(){playNext();},4000);
}
function stopAuto() {
            clearInterval(timer);
        }
function remainplay(){
	setTimeout(function(){autoplay();},2000);
}
function thumbnail(index) {
            $thumbnail.children().removeClass('active');
            $thumbnail.children().eq(index).addClass('active');
        }

