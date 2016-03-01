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



  //descriptions


  var mediabody = document.createElement('div');
  mediabody.className= ("media-body");
  var paragraph = document.createElement('p');
  var content = object.description;
  var text = document.createTextNode(content);


  paragraph.appendChild(text);
  mediabody.appendChild(paragraph);
  media.appendChild(mediabody);



  results.appendChild(media);




//headers



}

var results = document.getElementById('resultsview');
console.log(results);
results.addEventListener('click',function(e) {
    myFunction(videoresults[0]);
});
