let triggersRF = document.getElementsByClassName("videoClassRF");
let triggersML = document.getElementsByClassName("videoClassML");
let triggersSO = document.getElementsByClassName("videoClassSO");
let closeVideoRF = document.getElementById("closeVideoRF");
let closeVideoML = document.getElementById("closeVideoML");
let closeVideoSO = document.getElementById("closeVideoSO");
let videoRFDiv = document.getElementById("video-popRF");
let videoMLDiv = document.getElementById("video-popML");
let videoSODiv = document.getElementById("video-popSO");
let RFVideo = document.getElementById('RFVideo');
let MLVideo = document.getElementById('MLVideo');
let SOVideo = document.getElementById('SOVideo');

for (let i = 0; i < triggersRF.length; i++) {
  triggersRF[i].addEventListener('click', function pop(e) {
    videoRFDiv.style.display = "flex";
  });
}

for (let i = 0; i < triggersML.length; i++) {
  triggersML[i].addEventListener('click', function pop(e) {
    videoMLDiv.style.display = "flex";
  });
}

for (let i = 0; i < triggersSO.length; i++) {
  triggersSO[i].addEventListener('click', function pop(e) {
    videoSODiv.style.display = "flex";
  });
}

closeVideoRF.addEventListener('click', function close(e) {
  videoRFDiv.style.display = "none";
  RFVideo.pause();
});

closeVideoML.addEventListener('click', function close(e) {
  videoMLDiv.style.display = "none";
  MLVideo.pause();
});

closeVideoSO.addEventListener('click', function close(e) {
  videoSODiv.style.display = "none";
  SOVideo.pause();
});

