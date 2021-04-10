
<script lang="ts">
import { onMount } from "svelte";
    let isPlayState = false;
    let videoTimer: HTMLInputElement;
    let video: HTMLVideoElement;
    let adImage: string;
    export let sources;
    export let ads;
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
        //initialize values
        videoTimer = document.getElementById('input') as unknown as HTMLInputElement;
        video = document.querySelector('video');
        videoTimer.value = "0";
        video.src = sources[0].src;
        videoTimer.min = "0";
        video.oncanplay = () =>{
            videoTimer.max = video.duration.toString();
        }
    
        
        
        video.ontimeupdate = () =>{
            let time = Math.floor(video.currentTime);
            videoTimer.value = video.currentTime as unknown as string;
            ads.forEach(element => {
                console.log(time, element.time);
                if(element.time == time){
                    video.pause();
                    adImage = element.img;
                    let ele: HTMLElement = document.getElementsByClassName('ads')[0] as unknown as HTMLElement;
                    console.log(ele);
                    let timeOut = setTimeout(()=>{
                        ele.style.opacity = '0';
                        video.play();
                    },7000)
                    ele.style.opacity = "1";
                    ads.shift();
                    return;
                }
            });
        }
        
       
    })
</script>
<svelte:head>
    <link rel="stylesheet" href="css/w3.css">
</svelte:head>
<div class="my-container">
    <div class="c-video">
        <!-- svelte-ignore a11y-media-has-caption -->
        <video  class="video" controls="{false}">
            
        </video>
        
        <div class="controls">
            <div class="orange-bar">
                <input id="input" on:change="{updateTimer}"  class="orange-juice" type="range">
            </div>
            <div class="buttons">
                {#if isPlayState}
                    <button on:click="{pause}"><span class="fa fa-pause-circle-o"></span></button>
                    {:else}
                        <button on:click="{play}"><span class="fa fa-play-circle-o"></span></button>
                {/if}
                
            </div>
        </div>
    </div>
    <div class="ads mt-sm-0 mt-n5 ">
        <div class="ad w3-red" style="background-image: url('{adImage}'); background-size: contain">

        </div>
        <div class="w3-display-container w3-hide" style="height:100%">
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
</div>





<style>
  
    .area span {
        font-size: 10vw;
    }
    .ad {
        height: 100%;
        width: 100%;
    }
   
    .area {
        
        height: 33.2%;
        width: 33.2%
    }
    .my-container {
        display: flex;
        background: #ccc;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .video {
        width: 100%;
    }
    .c-video {
        width: 100%;
        max-width: 800px;
        position: relative;
        overflow: hidden;
    }
    .c-video:hover .controls {
        transform: translateY(0);
    }
    .ads{
        width: 100%;
        max-width: 800px;
        height: 100%;
        opacity: 0;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        max-height: 400px;
        top: 0;
        opacity: 0;
        
        position: absolute;

    }
    .ads:hover {
        opacity: 0.7;
    }
    .controls {
        display: flex;
        position: absolute;
        bottom: 0;
        opacity: 0.85;
        width: 100%;
        flex-wrap: wrap;
        background: rgba(0,0,0.7);
        transform: translateY(100%) translateY(-5px);
        transition: all 0.2s;
       
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
        
        background-color: orangered
    }
</style>