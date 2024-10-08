const button = document.querySelector("button");
const text = document.querySelector("textarea");
const voiceSelect = document.querySelector("select")

let speech = new SpeechSynthesisUtterance();

let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i)=> {
        voiceSelect.options[i] = new Option(voice.name, i)
    })
}

button.addEventListener("click", e=> {
    speech.text = text.value;
    window.speechSynthesis.speak(speech)
})