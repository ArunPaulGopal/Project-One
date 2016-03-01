// Search Results/Descriptions

var videoresults = [
{
  title: "Result 1",
  uploadname: "UploadGuy 1",
  uploaddate: "1/12/16",
  views:  571,
  description: "This is my first description of a video",
  likes:  871,
  dislikes: 322,
  img: 'logo.jpg'
},
{
  title: "Result 2",
  uploadname: "UploadGuy 2",
  uploaddate: "1/12/16",
  views:  571,
  description: "This is my first description of a video",
  likes:  871,
  dislikes: 322,
  img: 'logo.jpg'
},
{
  title: "Result 3",
  uploadname: "UploadGuy 3",
  uploaddate: "1/12/16",
  views:  571,
  description: "This is my first description of a video",
  likes:  871,
  dislikes: 322,
  img: 'logo.jpg'
},

]

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
