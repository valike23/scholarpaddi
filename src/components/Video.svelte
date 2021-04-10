
<script lang="ts">
import { onMount } from "svelte";
    let isPlayState = false;

    let video: HTMLVideoElement;
    export let sources;
    const play = () =>{
        video.play();
        isPlayState = true;
    }
    const pause = () =>{
        video.pause();
        isPlayState = false;
    }
    onMount(()=>{
        video = document.querySelector('video');
        video.src = sources[0].src;
        video.controls = false;
    })
</script>
<svelte:head>
    <link rel="stylesheet" href="css/w3.css">
</svelte:head>
<div class="my-container">
    <div class="c-video">
        <!-- svelte-ignore a11y-media-has-caption -->
        <video  class="video">
            
        </video>
        
        <div class="controls">
            <div class="orange-bar">
                <div class="orange-juice">
                    
                </div>
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
        <div class="w3-display-container w3-green" style="height:100%">
            <div class="w3-display-topleft w3-red area" >Top Left</div>
            <div class="w3-display-topright w3-yellow area" >Top Right</div>
            <div class="w3-display-bottomleft w3-blue area">Bottom Left</div>
            <div class="w3-display-bottomright w3-purple area">Bottom Right</div>
            <div class="w3-display-left w3-pink area">Left</div>
            <div class="w3-display-right area w3-teal">Right</div>
            <div class="w3-display-middle w3-cyan area text-center pt-3">
                {#if isPlayState}
                    <span on:click="{pause}" class="fa fa-pause"></span>
                    {:else}
                    <span on:click="{play}" class="fa fa-play"></span>
                {/if}
            </div>
            <div class="w3-display-topmiddle area w3-aqua">Top Mid</div>
            <div class="w3-display-bottommiddle w3-sand area">Bottom Mid</div>
          </div>
    </div>
</div>





<style>
  
    .area span {
        font-size: 10vw;
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
        width: 200px;
        background-color: orangered
    }
</style>