
<script lang="ts">
    import { onMount } from "svelte";
    import type { Iads, Iquestion, Iquiz, Isource, Itrack } from "../Models/auxilary";
    let isPlayState = false;
    let videoTimer: HTMLInputElement;
    let video: HTMLVideoElement;
    let adImage: string;
    let myWindow: any;
    let playContainer: HTMLDivElement;
    let adsContainer: HTMLDivElement;
    let quizContainer: HTMLDivElement;
    let secondContainer: HTMLDivElement;
    let explanation: HTMLDivElement;
    let progress: HTMLProgressElement;
    let isSecDivActive: boolean = false;
    let showAd: boolean = false;
    let showQuiz: boolean = false;
    let currentQuestion: Iquestion = {};
    let isCorrect: boolean = false;
    let isAnswered: boolean = false;
    let currentQuiz: Array<Iquestion> = [];
    let currentAnswer: string = "";
    let adDuration: number = 0;

    export let sources: Array<Isource>;
    export let ads: Array<Iads>;
    export let quizs: Array<Iquiz>;
    export let tracks: Array<Itrack>;
    const markQuestion = () => {
        explanation.style.display = 'block';
        isAnswered = true;
        if(currentAnswer == currentQuestion.answer){
            isCorrect = true;
        }
        else {
            isCorrect = false;
        }
    }
    const gotoNextQuestion = () => {
        explanation.style.display = 'none';
        isCorrect = false;
        isAnswered = false;
        currentAnswer = "";
        document.querySelectorAll('input[type="radio"]').forEach((ele: any) =>{
            ele.checked = false;
        })
        if(progress.value == progress.max) {
            //reset parameters and play video
            isSecDivActive = false;
            showQuiz = false;
            currentQuiz = [];
            currentQuestion = {};
            video.play();

        }
        else {
            currentQuestion = currentQuiz[progress.value];
            ++progress.value;
            console.log(currentQuiz);
            
            
        }

    }
    const toogleAnswer = (opt: string) => {
        if(opt == currentAnswer){
            currentAnswer = ""
        }
        else{
            currentAnswer = opt;
        }
    }
    const play = () =>{
        video.play();
        isPlayState = true;
    }
    const pause = () =>{
        video.pause();
        isPlayState = false;
    }
   

    const updateTimer = () => {
        video.currentTime = videoTimer.value as unknown as number;
    }
    const fastForwards = (time: number = 0) => {
        video.currentTime += time;
       
        console.log('time: ',video.currentTime);
    }
    const fastBackwards = (time: number = 0) => {
        video.currentTime -= time;
        console.log('time: ',video.currentTime);
    }
    
   
    
    onMount(()=>{
        console.log(window);
        //initialize values
        videoTimer = document.getElementById('input') as unknown as HTMLInputElement;
        video = document.querySelector('video');
        videoTimer.value = "0";
        video.src = sources[0].src;
        videoTimer.min = "0";
        myWindow = window;
        let template: string = document.getElementById('template').innerHTML;
        let caption: string = document.getElementById('caption').innerHTML;
        // myWindow.tippy('#gear', {
        //     content: template,
        //     allowHTML: true,
        //     delay: [300, 100],
        //     interactive: true,
        //     trigger: 'click',
        //     zIndex: 900000000
        // });
        // myWindow.tippy('#cap', {
        //     content: caption,
        //     allowHTML: true,
        //     delay: [300, 100],
        //     interactive: true,
        //     trigger: 'click',
        // });
        explanation = document.querySelector('#explantion') as unknown as HTMLDivElement;
        playContainer = document.getElementById('playContainer') as unknown as HTMLDivElement;
        adsContainer = document.getElementById('adsContainer') as unknown as HTMLDivElement;
        secondContainer = document.getElementById('secondContainer') as unknown as HTMLDivElement;
        quizContainer = document.getElementById('quizContainer') as unknown as HTMLDivElement;
        progress = document.querySelector('progress');
        secondContainer.style.height = video.clientHeight as unknown as string;
        quizContainer.style.overflowY = "scroll";

        explanation.style.display = 'none';
        
        //playContainer is active.... while adsContainer and quizContainer is inactive
        //initialize container close
        video.oncanplay = () =>{
            videoTimer.max = video.duration.toString();
        }
    
        
        
        video.ontimeupdate = () =>{
            let time = Math.floor(video.currentTime);
            let adsTime = ads[0].time as unknown as number;
            if(time <  adsTime && time )
            videoTimer.value = video.currentTime as unknown as string;
            quizs.forEach(quiz => {
                console.warn(time, quiz.time);
                if(quiz.time as unknown as number == time) {
                    video.pause();
                    isSecDivActive = true;
                    showQuiz = true;
                    progress.max = quiz.questions.length;
                    progress.value = 1;
                    currentQuestion = quiz.questions[0];
                    currentQuiz = quiz.questions;
                    quizs.shift();
                    
                }
            });
            ads.forEach(ad => {
                console.warn(time, ad.time);
                if(ad.time as unknown as number == time) {
                    adImage = ad.img;
                    video.pause();
                    isSecDivActive = true;
                    showAd = true;
                    adDuration = 10;
                    let  interval = setInterval(()=>{
                        --adDuration;
                        if(adDuration <= 0) {
                            console.log('monitoring set time interval');
                            isSecDivActive = false;
                            showAd = false;
                            adDuration = 0;
                            clearInterval(interval);
                            video.play();
                            
                        }
                    }, 1000)
                    ads.shift();
                    
                }
            });
           
            
        }
        
       
    })
</script>
<svelte:head>
    <link rel="stylesheet" href="css/w3.css">
    <link rel="stylesheet" href="toast/toast.css">
    <script defer src="https://unpkg.com/@popperjs/core@2"></script>
    <script defer src="https://unpkg.com/tippy.js@6"></script>
    <script src="toast/toast.js" defer></script>
</svelte:head>
<div class="my-container">
    <div class="c-video">
        <!-- svelte-ignore a11y-media-has-caption -->
        <video  class="video" controls="{false}">
            
        </video>
        <div id="secondContainer" class:active={isSecDivActive} class:inactive={!isSecDivActive} class="ads original-effect mt-3 mt-sm-0 mt-sm-0 mt-n5 ">
            <div  class:show="{showAd}" class="ad w3-display-container w3-red" style="background-image: url('{adImage}'); background-size: cover">
                <div class="w3-display-bottomright skip ">video contd in {adDuration}</div>
            </div>
            <div class:show={showQuiz}  class="ad" id="quizContainer">
                <div class="w3-container">
                    
                    <progress></progress>
                      
                    <div class="question-area mt-3">
                        <br>
                        <p style="text-align:center"><strong>{currentQuestion.quiz}</strong></p>
                        <div class="options">
                            <div class="row">
                                <div class="col-6">
                                    <input on:change="{()=>{toogleAnswer(currentQuestion.option1)}}" name="quiz" type="radio"><span >{currentQuestion.option1}</span>
                                </div>
                                <div class="col-6">
                                    <input on:change="{()=>{toogleAnswer(currentQuestion.option2)}}" name="quiz" type="radio"><span >{currentQuestion.option2}</span>
                                </div>
                                <div class="col-6">
                                    <input on:change="{()=>{toogleAnswer(currentQuestion.option3)}}" name="quiz" type="radio"><span>{currentQuestion.option3}</span>
                                </div>
                                <div class="col-6">
                                    <input on:change="{()=>{toogleAnswer(currentQuestion.option4)}}" name="quiz" type="radio"><span>{currentQuestion.option4}</span>
                                </div>
                             </div>
                          </div>
                          <div>
                              <br>
                              <div>
                                  {#if isAnswered}
                                     <button on:click="{gotoNextQuestion}" class="btn btn-primary float-right">Next</button>
                                     {:else}
                                     
                                     <button on:click="{markQuestion}" class="btn btn-success float-right">submit</button>
                                  {/if}
                              </div>
                              
                              <div id='explantion' class="w3-card mt-5">
                                 <p class:w3-border-green={isCorrect} class:w3-border-red={!isCorrect} class="w3-border w3-border-green p-2">
                                     <strong>
                                         {#if isCorrect}
                                            correct!!!
                                            {:else}
                                            incorrect!!!
                                        {/if}
                                    </strong>
                                     <br>
                                     <span>
                                         {currentQuestion.explantion}
                                     </span>
                                 </p>
                              </div>
                          </div>
                      </div>
                </div>
            </div>
            <div id="playContainer" class="w3-display-container" style="height:100%; z-index: 999;">
                <div class="w3-display-topleft  area" ></div>
                <div class="w3-display-topright area" ></div>
                <div class="w3-display-bottomleft area"></div>
                <div class="w3-display-bottomright area"></div>
                <div class="w3-display-left  area" on:dblclick="{()=>{fastBackwards(20)}}"></div>
                <div class="w3-display-right area " on:dblclick="{()=>{fastForwards(20)}}"></div>
                <div class="w3-display-middle area text-center pt-3">
                    {#if isPlayState}
                        <span on:click="{pause}" class="fa fa-pause"></span>
                        {:else}
                        <span on:click="{play}" class="fa fa-play"></span>
                    {/if}
                </div>
                <div class="w3-display-topmiddle area "></div>
                <div class="w3-display-bottommiddle area"></div>
              </div>
        </div>
        <br><br><br>
        <div class="controls">
            <div class="orange-bar">
                <input id="input" on:change="{updateTimer}"  class="orange-juice" type="range">
            </div>
            <div class="row" style="width:100%">
                <div class="buttons col-6">
                    {#if isPlayState}
                        <button  on:click="{pause}"><span class="fa fa-pause-circle-o"></span></button>
                        {:else}
                        <button on:click="{play}"><span class="fa fa-play-circle-o"></span></button>
                    {/if}
                </div>
                <div class="buttons col-6 text-right">
                    <button id='gear' class="float-right ml-2 ">
                        <span class="fa fa-cog"></span>
                    </button> 
                    <button id='cap' class="float-right ml-2">
                        <span class="fa fa-cc"></span>
                    </button> 
                </div>
                
                
            </div>
        </div>
    </div>
   
</div>


<div id="template" style="display: none;">
    <div style="opacity:1" class="p-2">
        {#each sources as src}
            <div class="pb-2">{src.size} <span class="fa fa-check float-right"></span></div>
        {/each}
    </div>
    
</div>
<div id="caption" style="display: none;">
    <div class="p-2" style="opacity:unset">
        <div class="pb-2">none <span class="fa fa-check float-right"></span></div>
        {#each tracks as track}
            <div class="pb-2">{track.label} <span class="fa fa-check float-right"></span></div>
        {/each}
    </div>
    
</div>

<style>
   progress{
        width: 100%;
    }
    
    .skip {
        background-color: black;
        color: white;
        min-width: 50px;
        min-height: 30px;
        height: 60px;
        width: 140px;
    }
  
    .area span {
        font-size: 10vw;
    }
    .ad {
        height: 100%;
        width: 100%;
        display: none;
    }
    .show {
        display: block !important
    }
   
    .area {
        
        height: 33.2%;
        width: 33.2%
    }
    .my-container {
        display: flex;
        background: white;
        justify-content: center;
        align-items: center;
    }
    .video {
        width: 100%;
    }
    .c-video {
        width: 100%;
        position: relative;
    }
   
    .original-effect{
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        max-height: 500px;
        top: 0;
        position: absolute;
        background-color: whitesmoke;

    }
    .active {
        opacity: 1;
    }
    .inactive {
        opacity: 0;
    }
    .inactive:hover {
        opacity: 0.7;
    }
    .controls {
        display: flex;
        position: absolute;
        bottom: 0;
        opacity: 0.79;
        width: 100%;
        flex-wrap: wrap;
        background: rgba(0,0,0.7);
       
    }

    .buttons  {
        background: none;
        border: 0;
        outline: 0;
        cursor: pointer
    }
    .buttons button {
        background: none;
        border: 0;
        outline: 0;
        cursor: pointer;
        color: white;
        font-size: 30px;
    }
    
    .orange-bar {
        height: 10px;
        top: 0;
        left: 0;
        width:100%;
        background: black;
    }
    .orange-juice {
        height: 10px;
        
        color: orangered
    }
</style>