(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle("modal-open");
  }
})();

var record = document.getElementById("record").autoplay;
record.autoplay = true;

var source = "record.mp3";
var audio = new Audio(); // use the constructor in JavaScript, just easier that way
audio.addEventListener("load", function() {
  audio.play();
}, true);
audio.src = source;
audio.autoplay = true; // add this

$("#playBtn").click(function() {
  audio.play();
});

$("#pauseBtn").click(function() {
  audio.pause();
});

$("#stopBtn").click(function() {
  audio.pause();
  audio.currentTime = 0;
});



// audioElement = new Audio('record.mp3');
// audioElement.addEventListener("canplay", function() {
//   audioElement.play();
// }, false);
// audioElement.addEventListener('ended', function () {
//         this.currentTime = 0;
//         this.play();
// }, false);

// $('#music').on('click', function(e) {
//     e.preventDefault();
//     var volIcon = $(this).find('i');
//     volIcon.toggleClass('fa-volume-up fa-volume-off');
//     if (volIcon.hasClass('fa-volume-off')) {
//         audioElement.pause();
//     } else {
//         audioElement.play();
//     }
// });