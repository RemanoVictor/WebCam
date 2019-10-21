
let playBtn = document.querySelector(".playBtn");
let stopBtn = document.querySelector(".stopBtn");

function start() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        console.log('getUserMedia supported.');
        navigator.mediaDevices.getUserMedia(
                // constraints - only audio needed for this app
                {
                    audio: true,
                    video: true

                })

            // Success callback
            .then(function (stream) {

                let video = document.querySelector("video");

                if ("srcObject" in video) {
                    video.srcObject = stream;
                } else {
                    video.src = window.URL.createObjectURL(stream);
                }

                video.onloadmetadata = function (ev) {
                    video.play();
                };

                let start = document.getElementById("startBtn");
                let stop = document.getElementById("stopBtn");
                let vidSave = doocument.getElementById("vid2");
                let mediaRecorder = new mediaRecorder(stream);
                let chunks = [];
                

            })

            // Error callback
            .catch(function (err) {
                console.log('The following getUserMedia error occured: ' + err);
            });
    } else {
        console.log('getUserMedia not supported on your browser!');
    }
}


