$(document).ready(function(){
  $('#logo').click(function(){
    $(this).fadeOut("slow");
  })
  // SEARCH RESULTS: Data
  var videoresults = [
  {
    title: "Neil Gaiman: 2012 Commencement Speech",
    uploadinfo: "Secret Art Society  12/12/12",
    views:  "39 million",
    description: "A reminder not to forget why you do what you do.",
    likes:  871,
    img: 'images/neil-gaiman.jpg'
  },
  {
    title: "Will Smith: Running and Reading",
    uploadinfo: "TheFreshPrince 1/12/15",
    views:  "42 million",
    description: "Simple truths from a beloved actor.",
    likes:  871,
    img: 'images/will-smith.jpg'
  },
  {
    title: "Inside the Superhman World of the Iceman",
    uploadinfo: "VICE 2/26/15",
    views:  "98 million",
    description: "Question what you believe is possible.",
    likes:  871,
    img: 'images/wim-hof.jpg'
  },
  {
    title: "Steve Jobs: 2005 Stanford Commencement",
    uploadinfo: "APPLE INC. 2/26/14",
    views:  "95 million",
    description: "He wasn't the nicest guy, but he sure was passionate.",
    likes:  871,
    img: 'images/steve-jobs.jpg'
  }
  ];
  //COMMENTS: Box Data
  var commenthistory = [
    {
      comment: "Much Amaze.So much feeling.",
      img: 'images/doge.jpeg'
    },
    {
      comment: "Is he an artist?",
      img: 'images/troll.jpg'
    },
    {
      comment: "I always make great art!",
      img: 'images/baby.jpg'
    }
  ]
  // COMMENTS: Function to build the history
  function commentBuilder(object) {
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
    var history = document.getElementById('history')
    media.setAttribute('class','media');
    medialeft.appendChild(image);
    paragraph.appendChild(node);
    mediabody.appendChild(paragraph);
    media.appendChild(medialeft);
    media.appendChild(mediabody);
    history.appendChild(media);
  };
  // COMMENTS: Call the history builder function when user searches
  searchr.addEventListener('click',function(e) {
      for (var i=0; i<commenthistory.length; i++){
        commentBuilder(commenthistory[i]);
      }
    });
  // COMMENTS: Function that builds new comments by the user
  submit.addEventListener('click',function(e) {
    // Create variables to be appended
    var submit = document.getElementById('submit');
    var commentbox = document.getElementById('comment');
    var commenttext = commentbox.value;
    var attr = document.createElement('a');
    var image = document.createElement('img');
    image.setAttribute('src','images/profile.jpg');
    image.setAttribute('class','img-circle');
    var text = document.createTextNode(commenttext);
    var para = document.createElement('p');
    var history = document.getElementById('history');
    var mediabody = document.createElement('div');
    mediabody.className = ('media-body');
    var medialeft = document.createElement('div');
    medialeft.className = ('media-left');
    var media = document.createElement('div');
    media.className = ('media');
    // Append variables
    para.appendChild(text);
    attr.appendChild(image);
    mediabody.appendChild(para);
    medialeft.appendChild(attr);
    media.appendChild(medialeft);
    media.appendChild(mediabody);
    history.appendChild(media);
  });
  // SEARCH RESULTS: Function for creation
  function myFunction(object){
    // Getting variables ready for images
    var media = document.createElement('div')
    media.className= ('media');
    var attribute = document.createElement('a');
    attribute.setAttribute('href','#speech');
    var medialeft = document.createElement('div');
    medialeft.className= ("media-left");
    var image = document.createElement('img');
    image.setAttribute('src',object.img);
    image.setAttribute('id','toggleclass');
    image.setAttribute('class','img-rounded');
    var inode = document.createTextNode(icontent);
    var icontent = object.img;
    // Appending image variables
    image.appendChild(inode);
    attribute.appendChild(image)
    medialeft.appendChild(attribute);
    media.appendChild(medialeft);
    // Body: Getting variables ready for Title, Description, Username,Upload Date, Likes, and Views
    var uploadinfo = document.createElement('p');
    var ucontent = object.uploadinfo;
    var utext = document.createTextNode(ucontent);
    var title = document.createElement('h1');
    title.className=("media-heading");
    var tcontent = object.title;
    var ttext = document.createTextNode(tcontent);
    var mediabody = document.createElement('div');
    mediabody.className= ("media-body");
    var paragraph = document.createElement('p');
    var content = object.description;
    var text = document.createTextNode(content);
    // Appending body variables
    uploadinfo.appendChild(utext);
    paragraph.appendChild(text);
    title.appendChild(ttext);
    mediabody.appendChild(title);
    mediabody.appendChild(paragraph);
    mediabody.appendChild(uploadinfo);
    media.appendChild(mediabody);
    results.appendChild(media);
  };
  var results = document.getElementById('results');
  // SEARCH RESULTS: Execute the function upon search.
  // Also added in Video Toggling functionality here.
  searchr.addEventListener('click',function(e) {
    var searchbox = document.getElementById('searchtext');
    var searchtext = searchbox.value;
    if (searchtext.toLowerCase() === "motivation") {
      for (var i=0; i<videoresults.length; i++){
        myFunction(videoresults[i]);
        // Removes class, was originally toggle
      var toggleclass = document.getElementById('toggleclass');
      toggleclass.addEventListener('click',function(e) {
        var speech = document.getElementById('speech');
        speech.classList.remove('hide');
        });
      }
    }
  });
});
