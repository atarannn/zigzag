function playVideo() {
  var poster = document.querySelector('.poster');
  var videoIframe = document.getElementById('video-iframe');

  poster.style.display = 'none';

  var videoSrc = videoIframe.getAttribute('src');
  videoIframe.setAttribute('src', videoSrc + '&autoplay=1');
}
