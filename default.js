// Search Results/Descriptions

function myFunction(object){

  //global
  var results = document.getElementById('resultsview');



  //images
  var attribute = document.createElement('a');
  var medialeft = document.createElement('media-left');
  medialeft.className= ("media-left");
  var image = document.createElement('img');
  var inode = document.createTextNode(icontent);
  var icontent = object.img;

  image.appendChild(inode);
  attribute.appendChild(image);
  medialeft.appendChild(attribute);
  results.appendChild(medialeft);


  //descriptions


  var media = document.createElement('media');
  media.className= ("media");
  var mediabody = document.createElement('media-body');
  mediabody.className= ("media");
  var paragraph = document.createElement('p');
  var content = object.description;
  var text = document.createTextNode(content);


  paragraph.appendChild(text);
  mediabody.appendChild(paragraph);
  results.appendChild(mediabody);




//headers



}

results.addEventListener('click',function(e) {
    myFunction(videoresults[0]);
});


















/* YOUTUBE API */
// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 3. This function creates an <iframe> (and YouTube player) after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '900',
          width: '1500',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
// 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }
/* 5. The API calls this function when the player's state changes. The function indicates that when playing a video (state=1),
    the player should play for six seconds and then stop.*/
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
        function stopVideo() {
          player.stopVideo();
        }
