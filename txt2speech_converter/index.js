let speech = new SpeechSynthesisUtterance();

document.querySelector("button").addEventListener("click", () => {
    console.log("bol rha h ky?")
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
    console.log("ab bola ky?")
})