//Importing JSON from FILE
let transcript_json = null;
function loadJSON(callback) {   

  var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
  xobj.open('GET', 'transcript.json', true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
        // if (xobj.readyState == 4 && xobj.status == "200") {
        //   callback(xobj.responseText);
        // }

        if (xobj.readyState == 4){
        if( xobj.status == "200") {
          callback(xobj.responseText);
        }
        else{
          //In case any browser doesn't support CORS Request
          transcript_json = { "results": [ { "alternatives": [ { "timestamps": [ [ "he", 0.43, 0.81 ], [ "was", 0.81, 0.97 ], [ "frustrated", 0.97, 1.4 ], [ "by", 1.4, 1.5 ], [ "the", 1.5, 1.59 ], [ "website", 1.59, 2.08 ] ], "confidence": 0.905, "transcript": "he was frustrated by the website " } ], "final": true }, { "alternatives": [ { "timestamps": [ [ "but", 3.69, 3.88 ], [ "you", 3.88, 3.96 ], [ "still", 3.96, 4.19 ], [ "low", 4.19, 4.39 ], [ "less", 4.39, 4.6 ], [ "frustrated", 4.6, 5.09 ], [ "once", 5.09, 5.26 ], [ "we", 5.26, 5.33 ], [ "found", 5.33, 5.63 ], [ "out", 5.63, 5.84 ], [ "that", 5.84, 5.94 ], [ "he", 5.94, 6.0 ], [ "was", 6.0, 6.12 ], [ "saving", 6.12, 6.63 ] ], "confidence": 0.704, "transcript": "but you still low less frustrated once we found out that he was saving " } ], "final": true }, { "alternatives": [ { "timestamps": [ [ "nine", 7.85, 8.07 ], [ "hundred", 8.07, 8.29 ], [ "Bucks", 8.29, 8.49 ], [ "a", 8.49, 8.56 ], [ "month", 8.56, 8.9 ] ], "confidence": 0.996, "transcript": "900 Bucks a month " } ], "final": true }, { "alternatives": [ { "timestamps": [ [ "one", 9.82, 9.99 ], [ "of", 9.99, 10.07 ], [ "health", 10.07, 10.31 ], [ "insurance", 10.31, 10.83 ] ], "confidence": 0.301, "transcript": "one of health insurance " } ], "final": true }, { "alternatives": [ { "timestamps": [ [ "and", 15.52, 15.79 ], [ "John's", 15.79, 16.18 ], [ "right", 16.18, 16.62 ] ], "confidence": 0.695, "transcript": "and John's right " } ], "final": true }, { "alternatives": [ { "timestamps": [ [ "the", 17.49, 17.58 ], [ "website", 17.58, 17.91 ], [ "is", 17.91, 17.99 ], [ "going", 17.99, 18.12 ], [ "to", 18.12, 18.18 ], [ "get", 18.18, 18.33 ], [ "fixed", 18.33, 18.76 ] ], "confidence": 0.83, "transcript": "the website is going to get fixed " } ], "final": true }, { "alternatives": [ { "timestamps": [ [ "and", 22.32, 22.76 ], [ "the", 23.05, 23.19 ], [ "law", 23.19, 23.48 ], [ "works", 23.48, 24.2 ] ], "confidence": 0.929, "transcript": "and the law works " } ], "final": true }, { "alternatives": [ { "timestamps": [ [ "that's", 25.34, 25.54 ], [ "why", 25.54, 25.73 ], [ "we", 25.73, 25.93 ], [ "fought", 25.93, 26.4 ], [ "so", 26.4, 26.6 ], [ "hard", 26.6, 26.87 ], [ "to", 26.87, 26.95 ], [ "pass", 26.95, 27.26 ], [ "this", 27.26, 27.44 ], [ "law", 27.44, 27.63 ], [ "the", 27.63, 27.77 ], [ "safe", 27.77, 28.31 ] ], "confidence": 0.876, "transcript": "that's why we fought so hard to pass this law the safe " } ], "final": true }, { "alternatives": [ { "timestamps": [ [ "folks", 28.93, 29.22 ], [ "like", 29.22, 29.41 ], [ "John", 29.41, 29.69 ], [ "money", 29.69, 30.06 ] ], "confidence": 0.959, "transcript": "folks like John money " } ], "final": true } ], "result_index": 0, "speaker_labels": [ { "from": 0.43, "to": 0.81, "speaker": 0, "confidence": 0.5, "final": false }, { "from": 0.81, "to": 0.97, "speaker": 0, "confidence": 0.5, "final": false }, { "from": 0.97, "to": 1.4, "speaker": 0, "confidence": 0.5, "final": false }, { "from": 1.4, "to": 1.5, "speaker": 0, "confidence": 0.5, "final": false }, { "from": 1.5, "to": 1.59, "speaker": 0, "confidence": 0.5, "final": false }, { "from": 1.59, "to": 2.08, "speaker": 0, "confidence": 0.5, "final": false }, { "from": 3.69, "to": 3.88, "speaker": 0, "confidence": 0.44, "final": false }, { "from": 3.88, "to": 3.96, "speaker": 0, "confidence": 0.44, "final": false }, { "from": 3.96, "to": 4.19, "speaker": 0, "confidence": 0.44, "final": false }, { "from": 4.19, "to": 4.39, "speaker": 0, "confidence": 0.44, "final": false }, { "from": 4.39, "to": 4.6, "speaker": 0, "confidence": 0.44, "final": false }, { "from": 4.6, "to": 5.09, "speaker": 0, "confidence": 0.44, "final": false }, { "from": 5.09, "to": 5.26, "speaker": 0, "confidence": 0.44, "final": false }, { "from": 5.26, "to": 5.33, "speaker": 0, "confidence": 0.44, "final": false }, { "from": 5.33, "to": 5.63, "speaker": 0, "confidence": 0.44, "final": false }, { "from": 5.63, "to": 5.84, "speaker": 0, "confidence": 0.44, "final": false }, { "from": 5.84, "to": 5.94, "speaker": 0, "confidence": 0.44, "final": false }, { "from": 5.94, "to": 6.0, "speaker": 0, "confidence": 0.44, "final": false }, { "from": 6.0, "to": 6.12, "speaker": 0, "confidence": 0.44, "final": false }, { "from": 6.12, "to": 6.63, "speaker": 0, "confidence": 0.44, "final": false }, { "from": 7.85, "to": 8.07, "speaker": 2, "confidence": 0.522, "final": false }, { "from": 8.07, "to": 8.29, "speaker": 2, "confidence": 0.522, "final": false }, { "from": 8.29, "to": 8.49, "speaker": 2, "confidence": 0.522, "final": false }, { "from": 8.49, "to": 8.56, "speaker": 2, "confidence": 0.522, "final": false }, { "from": 8.56, "to": 8.9, "speaker": 2, "confidence": 0.522, "final": false }, { "from": 9.82, "to": 9.99, "speaker": 2, "confidence": 0.438, "final": false }, { "from": 9.99, "to": 10.07, "speaker": 2, "confidence": 0.438, "final": false }, { "from": 10.07, "to": 10.31, "speaker": 2, "confidence": 0.438, "final": false }, { "from": 10.31, "to": 10.83, "speaker": 2, "confidence": 0.438, "final": false }, { "from": 15.52, "to": 15.79, "speaker": 2, "confidence": 0.327, "final": false }, { "from": 15.79, "to": 16.18, "speaker": 2, "confidence": 0.327, "final": false }, { "from": 16.18, "to": 16.62, "speaker": 2, "confidence": 0.327, "final": false }, { "from": 17.49, "to": 17.58, "speaker": 0, "confidence": 0.383, "final": false }, { "from": 17.58, "to": 17.91, "speaker": 0, "confidence": 0.383, "final": false }, { "from": 17.91, "to": 17.99, "speaker": 0, "confidence": 0.383, "final": false }, { "from": 17.99, "to": 18.12, "speaker": 0, "confidence": 0.383, "final": false }, { "from": 18.12, "to": 18.18, "speaker": 0, "confidence": 0.383, "final": false }, { "from": 18.18, "to": 18.33, "speaker": 0, "confidence": 0.383, "final": false }, { "from": 18.33, "to": 18.76, "speaker": 0, "confidence": 0.383, "final": false }, { "from": 22.32, "to": 22.76, "speaker": 3, "confidence": 0.392, "final": false }, { "from": 23.05, "to": 23.19, "speaker": 1, "confidence": 0.386, "final": false }, { "from": 23.19, "to": 23.48, "speaker": 1, "confidence": 0.386, "final": false }, { "from": 23.48, "to": 24.2, "speaker": 1, "confidence": 0.386, "final": false }, { "from": 25.34, "to": 25.54, "speaker": 1, "confidence": 0.338, "final": false }, { "from": 25.54, "to": 25.73, "speaker": 1, "confidence": 0.338, "final": false }, { "from": 25.73, "to": 25.93, "speaker": 1, "confidence": 0.338, "final": false }, { "from": 25.93, "to": 26.4, "speaker": 1, "confidence": 0.338, "final": false }, { "from": 26.4, "to": 26.6, "speaker": 1, "confidence": 0.338, "final": false }, { "from": 26.6, "to": 26.87, "speaker": 1, "confidence": 0.338, "final": false }, { "from": 26.87, "to": 26.95, "speaker": 1, "confidence": 0.338, "final": false }, { "from": 26.95, "to": 27.26, "speaker": 1, "confidence": 0.338, "final": false }, { "from": 27.26, "to": 27.44, "speaker": 1, "confidence": 0.338, "final": false }, { "from": 27.44, "to": 27.63, "speaker": 1, "confidence": 0.338, "final": false }, { "from": 27.63, "to": 27.77, "speaker": 1, "confidence": 0.338, "final": false }, { "from": 27.77, "to": 28.31, "speaker": 1, "confidence": 0.338, "final": false }, { "from": 28.93, "to": 29.22, "speaker": 0, "confidence": 0.301, "final": false }, { "from": 29.22, "to": 29.41, "speaker": 0, "confidence": 0.301, "final": false }, { "from": 29.41, "to": 29.69, "speaker": 0, "confidence": 0.301, "final": false }, { "from": 29.69, "to": 30.06, "speaker": 0, "confidence": 0.301, "final": true } ] };
        }
      }
  
  };
  xobj.send(null); 
}

  loadJSON(function(response) {
    transcript_json = JSON.parse(response);
    console.log(transcript_json);
  });


// let transcript = [0.43, 3.69, 7.85, 9.82, 15.52, 17.49, 22.32, 25.34, 28.93];
//LOADING TRANSCRIPT_TIMESTAMP DYNAMICALLY FOR EACH SENTENCE

let transcript = [];
let temp_array;
transcript_json.results.forEach(function(sentence){
  temp_array = sentence['alternatives'][0]['timestamps'][0].sort( function (a,b) { return a === b ? 0 : a < b ? -1: 1} );
  transcript.push(temp_array[0]);
});


let transciptContainer = document.querySelector('#transcript-container');

//MAKING <P> ELEMENTS DYNAMICALLY AND ADDING CONTENT THROUGH THE LOADED JSON 
transcript_json['results'].forEach(function(elem,index){
  let transcript_node = document.createElement("p");
  transcript_node.id="p" + (index + 1);
  transcript_node.classList.add("transcript");
  transcript_node.textContent += elem['alternatives'][0]['transcript'];
  transciptContainer.appendChild(transcript_node);
});

function formatMilliseconds(milliseconds) {
  let hours = Math.floor(milliseconds / 3600000);
  milliseconds = milliseconds % 3600000;
  let minutes = Math.floor(milliseconds / 60000);
  milliseconds = milliseconds % 60000;
  let seconds = Math.floor(milliseconds / 1000);
  milliseconds = Math.floor(milliseconds % 1000);

  return (hours > 0 ? hours : '0') + ':' +
    (minutes < 10 ? '0' : '') + minutes + ':' +
    (seconds < 10 ? '0' : '') + seconds + ':' +
    (milliseconds < 100 ? '0' : '') + (milliseconds < 10 ? '0' : '') + milliseconds;
}


let player = {
  btnPlay: document.querySelector('.player__play'),
  btnStop: document.querySelector('.player__stop'),
  btnPrevious: document.querySelector('.player__previous'),
  btnNext: document.querySelector('.player__next'),
  btnVolumeDown: document.querySelector('.player__volume-down'),
  btnVolumeUp: document.querySelector('.player__volume-up'),
  timeElapsed: document.querySelector('.player__time-elapsed'),
  timeTotal: document.querySelector('.player__time-total'),
  volume: document.querySelector('.player__volume-info'),
  transcript_elements: document.querySelectorAll('.transcript'),
  play_pause_icon: document.querySelector('#play_pause_icon')
};
let audio = null;
let colorChangedIndex = null;

function getIndexTranscript(curPos) {
  return Math.max.apply(Math, transcript.filter(function (x) { return x <= curPos }));
}

soundManager.setup({
  useFastPolling: true,
  useHighPerformance: true,
  onready: function () {
    audio = soundManager.createSound({
      id: 'audio',
      url: 'audio.wav',
      whileloading: function () {
        player.timeTotal.textContent = formatMilliseconds(audio.durationEstimate);
      },
      whileplaying: function () {
        player.timeElapsed.textContent = formatMilliseconds(audio.position);
        let transcriptTime = getIndexTranscript(audio.position / 1000);
        let index = transcript.indexOf(transcriptTime);
        if (index == -1) {
          index = 0;
        }
        if (colorChangedIndex != null) {
          player.transcript_elements[colorChangedIndex].style.color = "black";
        }
        player.transcript_elements[index].style.color = "red";
        colorChangedIndex = index;
      },
      onload: function () {
        player.timeTotal.textContent = formatMilliseconds(audio.duration);
      },
      onfinish: function () {
        let event;
        try {
          event = new Event('click');
        } catch (ex) {
          event = document.createEvent('MouseEvent');
          event.initEvent('click', true, false);
        }
        player.btnStop.dispatchEvent(event);
      }
    });
  }
});



player.btnPlay.addEventListener('click', function () {
  if (audio === null) {
    return;
  }

  if (audio.playState === 0 || audio.paused === true) {
    audio.play();
    player.play_pause_icon.classList.remove('fa-play');
    player.play_pause_icon.classList.add('fa-pause');
  } else {
    audio.pause();
    player.play_pause_icon.classList.remove('fa-pause');
    player.play_pause_icon.classList.add('fa-play');
  }
});

player.btnStop.addEventListener('click', function () {
  if (audio === null) {
    return;
  }
  if (colorChangedIndex != null) {
    player.transcript_elements[colorChangedIndex].style.color = "black";
  }
  audio.stop();
  document.querySelector('.player__time-elapsed').textContent = formatMilliseconds(0);
  player.play_pause_icon.classList.remove('fa-pause');
  player.play_pause_icon.classList.add('fa-play');
});

player.btnVolumeDown.addEventListener('click', function () {
  if (audio === null) {
    return;
  }

  let volume = audio.volume - 10 < 0 ? 0 : audio.volume - 10;
  audio.setVolume(volume);
  player.volume.textContent = volume;
});

player.btnVolumeUp.addEventListener('click', function () {
  if (audio === null) {
    return;
  }

  let volume = audio.volume + 10 > 100 ? 100 : audio.volume + 10;
  audio.setVolume(volume);
  player.volume.textContent = volume;
});

player.btnPrevious.addEventListener('click', function () {
  if (audio === null) {
    return;
  }

  let position = audio.position - 3000 < 0 ? 0 : audio.position - 3000;
  audio.setPosition(position);
  player.timeElapsed.textContent = formatMilliseconds(audio.position);
});

player.btnNext.addEventListener('click', function () {
  if (audio === null) {
    return;
  }

  let position = audio.position + 3000 > audio.duration ? audio.duration : audio.position + 3000;
  if (position === audio.duration) {
    let event;
    try {
      event = new Event('click');
    } catch (ex) {
      event = document.createEvent('MouseEvent');
      event.initEvent('click', true, false);
    }
    player.btnStop.dispatchEvent(event);
  } else {
    audio.setPosition(position);
    player.timeElapsed.textContent = formatMilliseconds(audio.position);
  }
});

Object.keys(player.transcript_elements).forEach(function (key) {
  player.transcript_elements[key].addEventListener('click', function () {
    if (audio === null ) {
      return;
    }
    
    let stringId = player.transcript_elements[key]['id'];
    stringId = stringId.substr(1);
    let id = parseInt(stringId);
    audio.setPosition((transcript[id - 1]) * 1000);
    player.timeElapsed.textContent = formatMilliseconds(audio.position);
    if(audio.playState === 0 || audio.paused === true){
      player.btnPlay.click();
    }
  });
});

Object.keys(player.transcript_elements).forEach(function (key) {
  player.transcript_elements[key].addEventListener('mouseover', function () {
    player.transcript_elements[key].style.cursor = "pointer";
  });
});