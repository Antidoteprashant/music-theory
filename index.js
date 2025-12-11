function showSection(id) {
var sections = document.querySelectorAll('section');
for(var i=0; i<sections.length; i++) {
sections[i].classList.remove('active');
}
document.getElementById(id).classList.add('active');
}

var highlightBtn = document.getElementById('highlight-btn');
if(highlightBtn) {
highlightBtn.onclick = function() {
document.getElementById('home').classList.toggle('highlighted');
};
}

var noteBtn = document.getElementById('random-note-btn');
var noteDisplay = document.getElementById('random-note-display');
if(noteBtn) {
noteBtn.onclick = function() {
var notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
noteDisplay.textContent = notes[Math.floor(Math.random() * notes.length)];
};
}