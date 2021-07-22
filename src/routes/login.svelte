

<script lang="ts">
    import type { Iregister } from "../controllers/accounts";
    import axios  from 'axios';
    import {goto} from '@sapper/app';
    import {onMount} from 'svelte';
    let win: any;
    onMount(()=>{
        win = window;
    })

    let user:Iregister = {};
    let remember = false;
    let loader = false;
    const LOGIN = () =>{
        loader = true;
        let form = new FormData();
        form.append('data', JSON.stringify(user));
        axios.put('api/accounts/register', form).then((res: any)=>{
            loader = false;
            res = res.data;
            if(res == "user doesnt exist") {
                    win.iziToast.error({
                        title: 'Error!',
                        message: res,
                        position: 'topRight'
                    })
                }
            else if(res == "password incorrect") {
                win.iziToast.error({
                    title: 'Error!',
                    message: res,
                    position: 'topRight'
                })
              
            }
            else {
               if(res.id) {
                win.iziToast.success({
                    title: 'OK!',
                    message: 'Login Successful',
                    position: 'topRight',
                    onClosed: ()=>{
                        sessionStorage.setItem('user', JSON.stringify(res));
                        if(win.history.length > 2){
                            win.history.back();
                        }
                        else {
                            location.href = "/";
                        }
                    }
                })
               }
               else {
                win.iziToast.error({
                    title: 'Error!',
                    message: "Something went wrong",
                    position: 'topRight'
                })
               }
               
            }
            
            
        
        })
    }
</script>
<svelte:head>
	<title>scholarPaddi: Login </title>
</svelte:head>
<!-- svelte-ignore a11y-missing-attribute -->
	<div class="inner-banner">
        <div class="opacity">
            <div class="container">
                <h2>Login</h2>
                <ul>
                    <li><a href="/" class="tran3s">Home</a></li>
                    <li>/</li>
                    <li>Login</li>
                </ul>
            </div> <!-- /.container -->
        </div> <!-- /.opacity -->
    </div> <!-- /.inner-banner -->

    

    <!-- Sign-Up Modal -->
    <div class="signUpModal theme-modal-box">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-body">
                    <h3>Login with Social Networks</h3>
                    <ul class="clearfix">
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <li class="float-left"><a ><i class="fa fa-facebook" aria-hidden="true"></i> facebook</a></li>
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <li class="float-left"><a><i class="fa fa-google-plus" aria-hidden="true"></i> Google</a></li>
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <li class="float-left"><a ><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a></li>
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <li class="float-left"><a><i class="fa fa-linkedin" aria-hidden="true"></i> Linkedin</a></li>
                    </ul>
                    <form on:submit|preventDefault="{LOGIN}">
                        <h3>Login with Site Account</h3>
                        <div class="wrapper">
                            <input bind:value="{user.user_name}"  type="text" placeholder="Username">
                            <input bind:value="{user.password}" type="password" placeholder="Password">
                            <ul class="clearfix">
                                <li class="float-left">
                                    <input bind:checked="{remember}" type="checkbox" id="remember">
                                    <label for="remember">Remember Me</label>
                                </li>
                                <!-- svelte-ignore a11y-invalid-attribute -->
                                <li class="float-right"><a href="#" class="s-color">Lost Your Password?</a></li>
                            </ul>
                            <button  class="p-bg-color hvr-trim">Login</button>
                        </div>
                    </form>

<div><a href="/signup" class="p-color tran3s">Not an account? Sign Up</a></div>
                </div> <!-- /.modal-body -->
            </div> <!-- /.modal-content -->
        </div> <!-- /.modal-dialog -->
    </div> <!-- /.signUpModal -->


<div class="mdl-spinner mdl-js-spinner " class:is-active="{loader}" style="z-index: 100; left:50%; margin-top:40vh"></div>