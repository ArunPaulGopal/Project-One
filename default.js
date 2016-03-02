

//Toggling the video

searchr.addEventListener('click',function(e) {
    var bvs = document.getElementById('BVS');
    bvs.classList.toggle('hide');
  });




//Comments Box


submit.addEventListener('click',function(e) {
  var submit = document.getElementById('submit');
  var commentbox = document.getElementById('comment');
  var commenttext = commentbox.value;
  var attr = document.createElement('a');
  var image = document.createElement('img');
  image.setAttribute('src','profile.jpg');
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
  title: "Result 1",
  uploadinfo: "UploadGuy 1 1/12/16",
  views:  571,
  description: "This is my first description of a video",
  likes:  871,
  img: 'logo.jpg'
},
{
  title: "Result 2",
  uploadinfo: "UploadGuy 1 1/12/16",
  views:  571,
  description: "This is my first description of a video",
  likes:  871,
  img: 'logo.jpg'
},
{
  title: "Result 3",
  uploadinfo: "UploadGuy 1 1/12/16",
  views:  571,
  description: "This is my first description of a video",
  likes:  871,
  img: 'logo.jpg'
},

]

function myFunction(object){


  //images

  var media = document.createElement('div')
  media.className= ('media');
  var attribute = document.createElement('a');
  var medialeft = document.createElement('div');
  medialeft.className= ("media-left");
  var image = document.createElement('img');
  image.setAttribute('src',object.img);
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

searchr.addEventListener('click',function(e) {
  for (var i=0; i<videoresults.length; i++){
    myFunction(videoresults[i]);
  }


//TO FINISH: ADD SEARCH KEYWORD ID AND USE THAT TO SERVE AS THE IF STATEMENT FOR RUNNING THINGS

});
