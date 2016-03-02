





//Comments Box


submit.addEventListener('click',function(e) {
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

  para.appendChild(text);
  attr.appendChild(image);
  mediabody.appendChild(para);
  medialeft.appendChild(attr);
  media.appendChild(medialeft);
  media.appendChild(mediabody);
  history.appendChild(media);

})


// Search Results/Descriptions

var videoresults = [
{
  title: "Neil Gaiman: 2012 Commencement Speech",
  uploadinfo: "Secret Art Society  12/12/12",
  views:  "39 million",
  description: "A reminder not to forget why you do what you do",
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
  description: "Question what you believe is possible",
  likes:  871,
  img: 'images/wim-hof.jpg'
},

]

function myFunction(object){


  //images

  var media = document.createElement('div')
  media.className= ('media');
  var attribute = document.createElement('a');
  attribute.setAttribute('href','#player');
  var medialeft = document.createElement('div');
  medialeft.className= ("media-left");
  var image = document.createElement('img');
  image.setAttribute('src',object.img);
  image.setAttribute('id','toggleclass');
  image.setAttribute('class','img-rounded');
  var inode = document.createTextNode(icontent);
  var icontent = object.img;

  image.appendChild(inode);
  attribute.appendChild(image);
  medialeft.appendChild(attribute);
  media.appendChild(medialeft);



  //body: Upload info, Descriptions,Title, Likes,etc.

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

  uploadinfo.appendChild(utext);
  paragraph.appendChild(text);
  title.appendChild(ttext);
  mediabody.appendChild(title);
  mediabody.appendChild(paragraph);
  mediabody.appendChild(uploadinfo);
  media.appendChild(mediabody);

  results.appendChild(media);

}

var results = document.getElementById('resultsview');


//Toggling the video added inside of the function so that toggle is appended after the results are listed
//Search will only execute for keyword motivation

searchr.addEventListener('click',function(e) {
  var searchbox = document.getElementById('searcht');
  var searchtext = searchbox.value;
  if (searchtext.toLowerCase() === "motivation") {
    for (var i=0; i<videoresults.length; i++){
      myFunction(videoresults[i]);

    var toggleclass = document.getElementById('toggleclass');
    toggleclass.addEventListener('click',function(e) {
      var ng = document.getElementById('ng');
      ng.classList.toggle('hide');
      });
    }
  }
});
