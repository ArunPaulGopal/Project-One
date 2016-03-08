$(document).ready(function(){
//Make logo dissapear when clicked, first jquery test
  $('#logo').click(function(){
    $(this).fadeOut("slow");
  })
// RECOMMENDATIONS: SECTION START
  // RECOMMENDATIONS: Data
  var recommendations = [
    {
      title: "Recommendation 1",
      description: "TBD",
      img: 'images/logo.jpg',
      id: "R1"
    },
    {
      title: "Recommendation 2",
      description: "TBD",
      img: 'images/logo.jpg',
      id: "R2"
    },
    {
      title: "Recommendation 3",
      description: "TBD",
      img: 'images/logo.jpg',
      id: "R3"
    }
  ]
  // RECOMMENDATIONS: Function to build the grid
    //Get variables ready to be appended
    //ID will be in the array, use that property to set the right ID for link
    function recommendBuild(object) {
      var paragraph = document.createElement('p');
      var paragraphtext = document.createTextNode(textcontent);
      var textcontent = object.description;
      var title = document.createElement('h3');
      var titletext = document.createTextNode(titlecontent);
      var titlecontent = object.title;
      var image = document.createElement('img');
      image.setAttribute('src',object.img);
      image.setAttribute('class','img-rounded');
      var media = document.createElement('div');
      media.setAttribute('class','media');
      var mediabody = document.createElement('div');
      media.setAttribute('class','media-body');
      var medialeft = document.createElement('div');
      media.setAttribute('class','media-left');
    }
    //Append variables to the recommendations ID

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
    image.setAttribute('class','img-circle');
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
    //Append comment history variables
    medialeft.appendChild(image);
    paragraph.appendChild(node);
    mediabody.appendChild(paragraph);
    media.appendChild(medialeft);
    media.appendChild(mediabody);
    divrow.appendChild(media);
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
    image.setAttribute('class','img-circle');
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
    // Append variables
    para.appendChild(text);
    attr.appendChild(image);
    mediabody.appendChild(para);
    medialeft.appendChild(attr);
    media.appendChild(medialeft);
    media.appendChild(mediabody);
    columndiv.appendChild(media);
    appendto.appendChild(columndiv);
  });
  //COMMENTS: Turn thumbs blue when clicked
    $('.thumb').click(function(){
      $(this).toggleClass("blue");
    })
// SEARCH RESULTS: SECTION START
    // SEARCH RESULTS: Data
    var videoresults = [
      {
        title: "Inside the Superhman World of the Iceman",
        uploadinfo: "VICE 2/26/15",
        views:  "98 million",
        description: "Question what you believe is possible.",
        likes:  871,
        img: 'images/wim-hof.jpg',
        videoid: "iceman",
        url: "https://www.youtube.com/embed/VaMjhwFE1Zw",
        buttonid: "toggleiceman",
        rowid: "icerow"
      },
      {
        title: "Neil Gaiman: 2012 Commencement Speech",
        uploadinfo: "Secret Art Society  12/12/12",
        views:  "39 million",
        description: "A reminder not to forget why you do what you do.",
        likes:  871,
        img: 'images/neil-gaiman.jpg',
        videoid: "speech",
        url: "https://www.youtube.com/embed/plWexCID-kA",
        buttonid: "togglespeech",
        rowid: "speechrow"
      },
      {
        title: "Steve Jobs: 2005 Stanford Commencement",
        uploadinfo: "APPLE INC. 2/26/14",
        views:  "95 million",
        description: "Apple's former CEO on following intuition.",
        likes:  871,
        img: 'images/steve-jobs.jpg',
        videoid: "stevejobs",
        url: "https://www.youtube.com/embed/D1R-jKKp3NA",
        buttonid: "togglejobs",
        rowid: "jobsrow"
      },
      {
        title: "Senecca: Health, Happiness, and Stoicism",
        uploadinfo: "Philosopher 1/1/16",
        views:  "100 million",
        description: "Happiness: A skill and mindset to achieve.",
        likes:  1258,
        img: 'images/senecca.jpg',
        videoid: "senecca",
        url: "https://www.youtube.com/embed/EYWEAa-D5vM",
        buttonid: "togglesenecca",
        rowid: "seneccarow"
      }
    ];
  // SEARCH RESULTS: Create hidden videos upon search
  function videoBuilder(object){
    //Create variables for video data
    var iframe = document.createElement('iframe');
    iframe.setAttribute('class','embed-responsive-item');
    iframe.setAttribute('src',object.url);
    var videoDiv = document.createElement('div');
    videoDiv.setAttribute('class','col-md-9 embed-responsive embed-responsive-16by9');
    videoDiv.setAttribute('id',object.videoid);
    var videos = document.getElementById('videos');
    var videorow = document.createElement('div');
    videorow.setAttribute('class','row hide')
    videorow.setAttribute('id',object.rowid)
    //Append variables and create hidden videos
    videoDiv.appendChild(iframe);
    videorow.appendChild(videoDiv);
    videos.appendChild(videorow);
  };
  // SEARCH RESULTS: Function for creation
  function resultBuilder(object){
    // Getting variables ready for images
    var image = document.createElement('img');
    image.setAttribute('src',object.img);
    image.setAttribute('class','img-rounded');
    var medialeft = document.createElement('div');
    medialeft.className= ("media-left");
    var media = document.createElement('div')
    media.className= ('media');
    // Appending image variables
    medialeft.appendChild(image);
    media.appendChild(medialeft);
    // Body: Getting variables ready for Title, Description, Username,Upload Date, Likes, and Views
    var buttonparagraph = document.createElement('p');
    var buttontext = document.createTextNode('Watch Now!');
    var button = document.createElement('button');
    button.setAttribute('id',object.buttonid);
    button.setAttribute('class','btn btn-primary btn-lg');
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
    // Appending body variables
    buttonparagraph.appendChild(buttontext);
    button.appendChild(buttonparagraph);
    attribute.appendChild(button);
    uploadinfo.appendChild(uploadtext);
    paragraph.appendChild(text);
    paragraph.appendChild(attribute);
    title.appendChild(titletext);
    mediabody.appendChild(title);
    mediabody.appendChild(uploadinfo);
    mediabody.appendChild(paragraph);
    media.appendChild(mediabody);
    results.appendChild(media);
  };
  var results = document.getElementById('results');
  //Upon search, use function to build hidden videos
  searchresults.addEventListener('click',function(e) {
      for (var i=0; i<videoresults.length; i++){
        videoBuilder(videoresults[i]);
      }
      // Show comments after initial search to keep the loading page clean
      $('#comments').removeClass('hide');
      $('#recommendations').addClass('hide');
    });
  // SEARCH RESULTS: Execute the function upon search.
  // Also added in Video Toggling functionality here.
  searchresults.addEventListener('click',function(e) {
    var searchbox = document.getElementById('searchtext');
    var searchtext = searchbox.value;
    if (searchtext.toLowerCase() === "motivation") {
      for (var i=0; i<videoresults.length; i++){
        resultBuilder(videoresults[i]);
    }
    }
    // Toggle video functionality, also ensures only one video can be viewed at a time.
    // Data attributes added so that comments can be built to the correct videos
    var submit= document.getElementById('submit');
    $('#toggleiceman').click(function(){
      $('#icerow').toggleClass("hide");
      $('#jobsrow').addClass("hide");
      $('#speechrow').addClass("hide");
      $('#seneccarow').addClass("hide");
      submit.setAttribute('data-comments','icerow');
    });
    $('#togglespeech').click(function(){
      $('#speechrow').toggleClass("hide");
      $('#jobsrow').addClass("hide");
      $('#icerow').addClass("hide");
      $('#seneccarow').addClass("hide");
      submit.setAttribute('data-comments','speechrow');
    });
    $('#togglejobs').click(function(){
      $('#jobsrow').toggleClass("hide");
      $('#icerow').addClass("hide");
      $('#speechrow').addClass("hide");
      $('#seneccarow').addClass("hide");
      submit.setAttribute('data-comments','jobsrow');
    });
    $('#togglesenecca').click(function(){
      $('#seneccarow').toggleClass("hide");
      $('#jobsrow').addClass("hide");
      $('#speechrow').addClass("hide");
      $('#icerow').addClass("hide");
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
