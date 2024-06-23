let speech=new SpeechSynthesisUtterance();
let voice=[];
let voiceSelect=document.querySelector("select");

window.speechSynthesis.onvoiceschanged=()=>{
    voice=speechSynthesis.getVoices();
    for(let i=0;i<voice.length;i++){
        let option=document.createElement("option");
        option.value=voice[i].name;
        option.innerText=`${voice[i].name} ${voice[i].lang}`;
        voiceSelect.appendChild(option);
    }
};

voiceSelect.addEventListener("change",()=>{
    speech.voice=voice.find(voice=>voice.name===voiceSelect.value);
});
document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});