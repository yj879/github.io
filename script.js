/* 이 코드 안에는 codepen의 Naoya(@nxworld)님이 public code로 공유 중인 demo:CSS scroll down button(https://codepen.io/nxworld/pen/OyRrGy)을 참고 및 수정한 내용이 포함되어 있음을 밝힙니다.
codepen의 public code는 기본적으로 MIT license를 따르며, MIT license는 license 및 저작권 명시를 조건으로 상업적 이용, 배포, 수정 등을 허가하고 있습니다.
자세한 내용은 폴더 안의 license.txt 문서를 참고해 주십시오. */

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});









