let triggers = document.getElementsByClassName("videoClass");
let closeVideo = document.getElementById("closeVideo");
let videoDiv = document.getElementById("video-pop");

for(let i=0; i < triggers.length; i++)
{
  triggers[i].addEventListener('click', function pop (e)
  {
    videoDiv.style.display = "flex";
  });
}

closeVideo.addEventListener('click', function close (e)
{
  videoDiv.style.display = "none";
});