const startButton=document.querySelector("#start");
const recognition=new webkitSpeechRecognition();

recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const synth=window.speechSynthesis;


let utter = new SpeechSynthesisUtterance("Hi, how are you?");

utter.onend=()=>{
    console.log("voice recognition ended, restarting...");
    recognition.start();
};


startButton.addEventListener("click", () => {
    recognition.start();
    //synth.speak(utter);
});

recognition.onresult = function(e)  {

    const transcript=e.results[e.results.length-1][0].transcript.trim()
    //transcript = transcript.split(" ")[0];
    test = transcript.split(" ")[0];
    
    if (test === "hey") {
        recognition.stop();
        utter.text="Hi, how are you?";
        synth.speak(utter);
        console.log("hi, how are you?");
    }
}

