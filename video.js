let triggersRF = document.getElementsByClassName("videoClassRF");
let triggersML = document.getElementsByClassName("videoClassML");
let closeVideo = document.getElementById("closeVideo");
let videoRFDiv = document.getElementById("video-popRF");
let videoMLDiv = document.getElementById("video-popML");

for(let i=0; i < triggersRF.length; i++)
{
  triggersRF[i].addEventListener('click', function pop (e)
  {
    videoRFDiv.style.display = "flex";
  });
}

for(let i=0; i < triggersML.length; i++)
{
  triggersML[i].addEventListener('click', function pop (e)
  {
    videoMLDiv.style.display = "flex";
  });
}

closeVideo.addEventListener('click', function close (e)
{
  videoRFDiv.style.display = "none";
});