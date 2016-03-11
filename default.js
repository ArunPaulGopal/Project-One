$(document).ready(function(){
//Make logo dissapear when clicked, first jquery test
  $('#logo').click(function(){
    $(this).fadeToggle('fast');
  })
// RECOMMENDATIONS: SECTION START
  // RECOMMENDATIONS: Data
  var recoresults = [
    {
      recotitle: "How to Stay Calm",
      img: 'images/ted.png',
      id: "R1",
      url: "https://www.youtube.com/embed/8jPQjjsBbIc",
      toggleid: "toggleR1",
      href: "#R1",
      description: "Lorem ipsum opeis dai crabba babba"
    },
    {
      recotitle: "Why Do We Fall - Motivational Video",
      img: 'images/fall.jpg',
      id: "R2",
      url: "https://www.youtube.com/embed/mgmVOuLgFB0",
      toggleid: "toggleR2",
      href: "#R2",
      description: "Lorem ipsum opeis dai crabba babba"
    },
    {
      recotitle: "The Pale Blue Dot - A Space Odyssey",
      img: 'images/space.jpg',
      id: "R3",
      url: "https://www.youtube.com/embed/XH7ZRF6zNoc",
      toggleid: "toggleR3",
      href: "#R3",
      description: "Lorem ipsum opeis dai crabba babba"
    },
    {
      recotitle: "The Great Bear Documentary",
      img: 'images/bear.jpg',
      id: "R4",
      url: "https://www.youtube.com/embed/kjRAWql2A3E",
      toggleid: "toggleR4",
      href: "#R4",
      description: "Lorem ipsum opeis dai crabba babba"
    },
    /* CAN ADD MORE RECOMMENDATIONS IN FUTURE
    {
      recotitle: "How to Stay Calm",
      img: 'images/ted.png',
      id: "R5",
      url: "https://www.youtube.com/embed/8jPQjjsBbIc",
      toggleid: "toggleR5",
      href: "#R5",
      description: "Lorem ipsum opeis dai crabba babba"
    },
    {
      recotitle: "Why Do We Fall - Motivational Video",
      img: 'images/fall.jpg',
      id: "R6",
      url: "https://www.youtube.com/embed/mgmVOuLgFB0",
      toggleid: "toggleR6",
      href: "#R6",
      description: "Lorem ipsum opeis dai crabba babba"
    },
    {
      recotitle: "The Pale Blue Dot - A Space Odyssey",
      img: 'images/space.jpg',
      id: "R7",
      url: "https://www.youtube.com/embed/XH7ZRF6zNoc",
      toggleid: "toggleR7",
      href: "#R7",
      description: "Lorem ipsum opeis dai crabba babba"
    },
    {
      recotitle: "The Great Bear Documentary",
      img: 'images/bear.jpg',
      id: "R8",
      url: "https://www.youtube.com/embed/kjRAWql2A3E",
      toggleid: "toggleR8",
      href: "#R8",
      description: "Lorem ipsum opeis dai crabba babba"
    }
    */
  ];
  // RECOMMENDATIONS: Function to build the grid
    //Get variables ready to be appended
    //ID will be in the array, use that property to set the right ID for link
    function recommendBuilder(object) {
      var text = object.description;
      var textparagraph = document.createElement('p');
      var textnode = document.createTextNode(text);
      var attribute = document.createElement('a');
      attribute.setAttribute('href',object.href);
      var buttontext = document.createTextNode('Watch Now!');
      var button = document.createElement('button');
      button.setAttribute('id',object.toggleid);
      button.setAttribute('class','btn btn-primary');
      var buttonparagraph = document.createElement('p');
      buttonparagraph.setAttribute('class','text-center');
      var titlecontent = object.recotitle;
      var title = document.createElement('h4');
      title.setAttribute('class','media-heading');
      var titletext = document.createTextNode(titlecontent);
      var image = document.createElement('img');
      image.setAttribute('src',object.img);
      image.setAttribute('class','img-rounded thumbnail');
      var target = document.getElementById('recoresults');
      var thumbnail = document.createElement('div');
      thumbnail.setAttribute('class','thumbnail');
      var caption = document.createElement('div');
      caption.setAttribute('class','caption');
      var columndiv = document.createElement('div');
      columndiv.setAttribute('class','col-sm-6 col-md-4');
      //Append variables to the recommendations ID
      textparagraph.appendChild(textnode);
      button.appendChild(buttontext);
      attribute.appendChild(button);
      title.appendChild(titletext);
      buttonparagraph.appendChild(attribute);
      caption.appendChild(title);
      caption.appendChild(textparagraph);
      caption.appendChild(buttonparagraph);
      thumbnail.appendChild(image);
      thumbnail.appendChild(caption);
      columndiv.appendChild(thumbnail);
      target.appendChild(columndiv);
    };
  //RECOMMENDATIONS: Function to build the videos and allow user to watch
  function recoVideos(object) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('class','embed-responsive-item');
    iframe.setAttribute('src',object.url);
    var videoDiv = document.createElement('div');
    videoDiv.setAttribute('class','col-md-12 embed-responsive embed-responsive-16by9');
    var videorow = document.createElement('div');
    videorow.setAttribute('class','row hide');
    videorow.setAttribute('id',object.id);
    var recorow = document.getElementById('recoview');
    //Append variables and create hidden videos
    videoDiv.appendChild(iframe);
    videorow.appendChild(videoDiv);
    recorow.appendChild(videorow);
  };
  //RECOMMENDATIONS: Run result function right away rather than upon click
      for (var i=0; i<recoresults.length; i++){
        recommendBuilder(recoresults[i]);
        recoVideos(recoresults[i]);
      };
  //RECOMMENDATIONS: Toggle behavior set after functions run
      $('#toggleR1').click(function(){
        $('#R1').toggleClass("hide");
        $('#R2').addClass("hide");
        $('#R3').addClass("hide");
        $('#R4').addClass("hide");
      });
      $('#toggleR2').click(function(){
        $('#R2').toggleClass("hide");
        $('#R1').addClass("hide");
        $('#R3').addClass("hide");
        $('#R4').addClass("hide");
      });
      $('#toggleR3').click(function(){
        $('#R3').toggleClass("hide");
        $('#R1').addClass("hide");
        $('#R2').addClass("hide");
        $('#R4').addClass("hide");
      });
      $('#toggleR4').click(function(){
        $('#R4').toggleClass("hide");
        $('#R1').addClass("hide");
        $('#R2').addClass("hide");
        $('#R3').addClass("hide");
      });
// COMMENTS: SECTION START
  //COMMENTS: Box Data
  var commenthistory = [
    {
      comment: "Much Amaze.So much feeling.",
      img: 'images/doge.jpeg',
      commentid: "speechrow"
    },
    {
      comment: "Is he an artist?",
      img: 'images/troll.jpg',
      commentid: "speechrow"
    },
    {
      comment: "I always make great art!",
      img: 'images/baby.jpg',
      commentid: "speechrow"
    },
    {
      comment: "Much Cold.So much excite.",
      img: 'images/doge.jpeg',
      commentid: "icerow"
    },
    {
      comment: "Much Deep.So much happy.",
      img: 'images/doge.jpeg',
      commentid: "seneccarow"
    },
    {
      comment: "Much intense.So much Apple.",
      img: 'images/doge.jpeg',
      commentid: "jobsrow"
    },
    {
      comment: "Doge is I.",
      img: 'images/doge.jpeg',
      commentid: "jobsrow"
    }
  ]
  // COMMENTS: Function to build the history
  //Indents below indicate components that are needed to build final variables.
  function commentBuilder(object) {
    //Build variables for comment history
    var image = document.createElement('img');
    image.setAttribute('src',object.img);
    image.setAttribute('class','img-circle thumbnail');
    var medialeft = document.createElement('div');
    medialeft.setAttribute('class','media-left');
    var text = object.comment;
    var node = document.createTextNode(text);
    var paragraph = document.createElement('p');
    var mediabody = document.createElement('div');
    mediabody.setAttribute('class','media-body');
    var media = document.createElement('div');
    media.setAttribute('class','media');
    var target = document.getElementById(object.commentid);
    var divrow = document.createElement('div');
    divrow.setAttribute('class','col-md-3');
    var panel = document.createElement('div');
    panel.setAttribute('class','panel panel-primary');
    var panelbody = document.createElement('div');
    panelbody.setAttribute('class','panel-body');
    //Append comment history variables
    medialeft.appendChild(image);
    paragraph.appendChild(node);
    mediabody.appendChild(paragraph);
    media.appendChild(medialeft);
    media.appendChild(mediabody);
    panelbody.appendChild(media);
    panel.appendChild(panelbody);
    divrow.appendChild(panel);
    target.appendChild(divrow);
  };
  // COMMENTS: Function that builds new comments by the user
  submit.addEventListener('click',function(e) {
    // Create variables to be appended
    var submit = document.getElementById('submit');
    var commentbox = document.getElementById('comment');
    var commenttext = commentbox.value;
    var text = document.createTextNode(commenttext);
    var attr = document.createElement('a');
    var image = document.createElement('img');
    image.setAttribute('src','images/profile.jpg');
    image.setAttribute('class','img-circle thumbnail');
    var para = document.createElement('p');
    var mediabody = document.createElement('div');
    mediabody.className = ('media-body');
    var medialeft = document.createElement('div');
    medialeft.className = ('media-left');
    var media = document.createElement('div');
    media.className = ('media');
    var columndiv = document.createElement('div');
    columndiv.setAttribute('class','col-md-3');
    // Uses the data from video selected by user to help navigate comment to correct area
    var target = document.getElementById('submit').getAttribute('data-comments');
    var appendto = document.getElementById(target);
    var panel = document.createElement('div');
    panel.setAttribute('class','panel panel-primary');
    var panelbody = document.createElement('div');
    panelbody.setAttribute('class','panel-body');
    // Append variables
    para.appendChild(text);
    attr.appendChild(image);
    mediabody.appendChild(para);
    medialeft.appendChild(attr);
    media.appendChild(medialeft);
    media.appendChild(mediabody);
    panelbody.appendChild(media);
    panel.appendChild(panelbody);
    columndiv.appendChild(panel);
    appendto.appendChild(columndiv);
  });
  //COMMENTS: Turn thumbs blue when clicked
    $('.thumb').click(function(){
      $(this).toggleClass("blue");
    })
// SEARCH RESULTS: SECTION START
    // SEARCH RESULTS: Data
    var searchterms = ["ice","speech","jobs","stoic"];
    var videoresults = [
      {
        title: "Inside the Superhman World of the Iceman",
        uploadinfo: "VICE:  2/26/15",
        views:  "98 million",
        description: "Question what you believe is possible.",
        likes:  871,
        img: 'images/wim-hof.jpg',
        videoid: "iceman",
        url: "https://www.youtube.com/embed/VaMjhwFE1Zw",
        buttonid: "toggleiceman",
        rowid: "icerow",
        index: "ice",
        starid: false,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Neil Gaiman: 2012 Commencement Speech",
        uploadinfo: "Secret Art Society:  12/12/12",
        views:  "39 million",
        description: "A reminder not to forget why you do what you do.",
        likes:  871,
        img: 'images/neil-gaiman.jpg',
        videoid: "speech",
        url: "https://www.youtube.com/embed/plWexCID-kA",
        buttonid: "togglespeech",
        rowid: "speechrow",
        index: "speech",
        starid: false,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Steve Jobs: 2005 Stanford Commencement",
        uploadinfo: "APPLE INC.:  2/26/14",
        views:  "95 million",
        description: "Apple's former CEO on following intuition.",
        likes:  871,
        img: 'images/steve-jobs.jpg',
        videoid: "stevejobs",
        url: "https://www.youtube.com/embed/D1R-jKKp3NA",
        buttonid: "togglejobs",
        rowid: "jobsrow",
        index: "speech",
        starid: false,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Senecca: Health, Happiness, and Stoicism",
        uploadinfo: "Philosopher:  1/1/16",
        views:  "100 million",
        description: "Happiness: A skill and mindset to achieve.",
        likes:  1258,
        img: 'images/senecca.jpg',
        videoid: "senecca",
        url: "https://www.youtube.com/embed/EYWEAa-D5vM",
        buttonid: "togglesenecca",
        rowid: "seneccarow",
        index: "stoic",
        starid: false,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ];
  // SEARCH RESULTS: Create hidden videos upon search
  function videoBuilder(object){
    // Create variables for video data
    var iframe = document.createElement('iframe');
    iframe.setAttribute('class','embed-responsive-item');
    iframe.setAttribute('src',object.url);
    var videoDiv = document.createElement('div');
    videoDiv.setAttribute('class','col-md-9 embed-responsive embed-responsive-16by9');
    videoDiv.setAttribute('id',object.videoid);
    var videos = document.getElementById('videos');
    var videorow = document.createElement('div');
    videorow.setAttribute('class','row hide');
    videorow.setAttribute('id',object.rowid);
    // Append variables and create hidden videos
    videoDiv.appendChild(iframe);
    videorow.appendChild(videoDiv);
    videos.appendChild(videorow);
  };
  // SEARCH RESULTS: Function for creation
  function resultBuilder(object){
    // Getting variables ready for images
    var image = document.createElement('img');
    image.setAttribute('src',object.img);
    image.setAttribute('class','img-rounded thumbnail');
    var medialeft = document.createElement('div');
    medialeft.className= ("media-left");
    var media = document.createElement('div');
    media.className= ('media');
    // Appending image variables
    medialeft.appendChild(image);
    media.appendChild(medialeft);
    // Body: Getting variables ready for Title, Description, Username,Upload Date, Likes, and Views
    var buttontext = document.createTextNode('Watch Now!');
    var button = document.createElement('button');
    button.setAttribute('id',object.buttonid);
    button.setAttribute('class','btn btn-primary');
    var attribute = document.createElement('a');
    attribute.setAttribute('href','#videos');
    var uploadcontent = object.uploadinfo;
    var uploadtext = document.createTextNode(uploadcontent);
    var uploadinfo = document.createElement('p');
    var titlecontent = object.title;
    var titletext = document.createTextNode(titlecontent);
    var title = document.createElement('h3');
    title.className=("media-heading");
    var content = object.description;
    var text = document.createTextNode(content);
    var paragraph = document.createElement('p');
    var mediabody = document.createElement('div');
    mediabody.className= ("media-body");
    var panel = document.createElement('div');
    panel.setAttribute('class','panel panel-primary');
    var panelbody = document.createElement('div');
    panelbody.setAttribute('class','panel-body');
    var panelfooter = document.createElement('div');
    panelfooter.setAttribute('class','panel-footer text-center');
    var textparagraph = document.createElement('p');
    var textfiller = object.text;
    var textnode = document.createTextNode(textfiller);
    // Appending body variables
    button.appendChild(buttontext);
    attribute.appendChild(button);
    uploadinfo.appendChild(uploadtext);
    paragraph.appendChild(text);
    textparagraph.appendChild(textnode);
    title.appendChild(titletext);
    mediabody.appendChild(title);
    mediabody.appendChild(uploadinfo);
    mediabody.appendChild(paragraph);
    mediabody.appendChild(textparagraph);
    media.appendChild(mediabody);
    panelbody.appendChild(media);
    panel.appendChild(panelbody);
    panelfooter.appendChild(attribute);
    panel.appendChild(panelfooter);
    results.appendChild(panel);
  };
  var results = document.getElementById('results');
  //Upon search, use function to build hidden videos
  searchresults.addEventListener('click',function(e) {
    $('#videos').empty();
      for (var i=0; i<videoresults.length; i++){
        videoBuilder(videoresults[i]);
      }
      // Show comments add box only after first search to keep the loading page cleaner, and hide recommendations when going into results
      $('#commentpanel').removeClass('hide');
      $('#recorow').addClass('hide');
      $('#resultspanel').removeClass('hide');
    });
  // SEARCH RESULTS: Execute the function upon search.
  // Also added in Video Toggling functionality here.
  searchresults.addEventListener('click',function(e) {
    var searchbox = document.getElementById('searchtext');
    var searchtext = searchbox.value;
    if (searchtext.toLowerCase() === "motivation") {
      $('#results').empty();
      for (var i=0; i<videoresults.length; i++) {
        resultBuilder(videoresults[i]);
      }
    }
    else if (searchtext == "") {
      $('#results').empty();
      $('#results').append("<h1 class='text-center'>Please use a non blank search term to find videos!</h1>");
      $('#results').append("<img src='images/404.jpg' class='center-block'>");
    }
    else {
        $('#results').empty();
        var position = _.indexOf(searchterms,searchtext);
        resultBuilder(videoresults[position]);
      }
    // Toggle video functionality, also ensures only one video can be viewed at a time.
    // Data attributes added so that comments can be built to the correct videos
    var submit= document.getElementById('submit');
    $('#toggleiceman').click(function(){
      $('#icerow').toggleClass("hide");
      $('#jobsrow').addClass("hide");
      $('#speechrow').addClass("hide");
      $('#seneccarow').addClass("hide");
      $('#videopanel').removeClass("hide");
      submit.setAttribute('data-comments','icerow');
    });
    $('#togglespeech').click(function(){
      $('#speechrow').toggleClass("hide");
      $('#jobsrow').addClass("hide");
      $('#icerow').addClass("hide");
      $('#seneccarow').addClass("hide");
      $('#videopanel').removeClass("hide");
      submit.setAttribute('data-comments','speechrow');
    });
    $('#togglejobs').click(function(){
      $('#jobsrow').toggleClass("hide");
      $('#icerow').addClass("hide");
      $('#speechrow').addClass("hide");
      $('#seneccarow').addClass("hide");
      $('#videopanel').removeClass("hide");
      submit.setAttribute('data-comments','jobsrow');
    });
    $('#togglesenecca').click(function(){
      $('#seneccarow').toggleClass("hide");
      $('#jobsrow').addClass("hide");
      $('#speechrow').addClass("hide");
      $('#icerow').addClass("hide");
      $('#videopanel').removeClass("hide");
      submit.setAttribute('data-comments','seneccarow');
    });
  });
  // COMMENTS: Call the comment history builder function when user searches
  searchresults.addEventListener('click',function(e) {
      for (var i=0; i<commenthistory.length; i++){
        commentBuilder(commenthistory[i]);
      }
    });
});
/*
//PLAYLIST BRAINSTORM
STAR BEHAVIOR
  1. When a star is clicked, toggles being filled or blank. (Style only)
  2. When a star is toggled, it sets starid property in the videoresults array of objects to true. By default, all videos are "False".
  3. If the star is toggled again, it should set the starid to false.
PLAYLIST button
  1. When the playlist button is clicked, everything else should be hidden.
  2. A function should then be run to only grab videoresults where starid = true.
  3. Those results should then be appended to the page similar to other video screens.


//PLAYLIST: SECTION START

  //PLAYLIST: Function to have a star toggle visual behavior as well as have the property of the object change.

  function starClicker(object){



  }
  //PLAYLIST: Event Listener so that when a star is clicked, above function is run


  //PLAYLIST: Function to append the specified videoresults to the page. Also hides anything else on the screen. (Results or Recommendations)

  function playlistBuilder(object) {

}


  //PLAYLIST: Event Listener so that when Playlist button is clicked, above function is run.
*/
