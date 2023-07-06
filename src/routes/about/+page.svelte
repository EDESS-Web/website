<script lang="ts">
    import { onMount } from 'svelte';
    import { BuildingLibrary, CpuChip, Icon } from 'svelte-hero-icons';
    import * as THREE from 'three';

    onMount(() => {

        const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
        camera.position.z = 1;

        const scene = new THREE.Scene();

        const geometry = new THREE.SphereGeometry( 0.5, 12, 12 );
        // geometry.translate(0.5, 0, 0);
        // const material = new THREE.MeshBasicMaterial({ color: 0xBBFFFF, map: loader.load("/images/earthmin.png")});
        const material = new THREE.MeshBasicMaterial({ color: 0xFFFFFFF, wireframe: true});

        const mesh:any = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        scene.background = new THREE.Color(0x95c9fa);

        const renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setAnimationLoop( animation );

        const animBox = document.getElementById("threejs-anim1")!;
        animBox.appendChild( renderer.domElement );

        window.addEventListener( 'resize', onWindowResize, false );

        function onWindowResize(){

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );

        }

        function animation( time:any ) {

            mesh.rotation.y = time / 3000;

            renderer.render( scene, camera );

        }
    });
    
</script>

<svelte:head>
    <title>About EDESS</title>
</svelte:head>

<style lang="scss">
    *{
      margin: 0;
    }
    .logo-svg-header {
        width: 65vw;

        /* height: fit-content; */
        margin: 0 auto;
        opacity: 1;
        padding: 10vw 0
    }

    .page-sized-col {
        background-color: #ffffff;

        animation: colorup 1s ease-in forwards;
        animation-delay: 3.5s;
        height: 100vh;
    }

    @keyframes colorup {
        0% {
            background-color: #ffffff;
        }
        100% {
            background-color: #fffda1;
        }
    }

    svg {
        margin: 0 auto;

        overflow: visible;
        animation: svgout .5s ease-out forwards;
        animation-delay: 3s;
        opacity: 1;
    }

    @keyframes svgout {
        0% {
        }

        80% {
            width: 100%;
        }

        100% {
            width: 0;
            opacity: 0;
            display: none;
        }
    }

    .tagline {
      font-family: "Geologica", sans-serif;
      font-weight: 600;
      text-align: left;
      opacity: 0;
      animation: tagline 1s ease-in;
      animation-delay: 3.5s;
      animation-fill-mode: forwards;
      font-size: 3vw;
      margin-top: 0;
      margin-bottom: 1vw;
      color: rgb(0, 0, 0);
    }

    .tagline span {
      text-decoration: underline .2em rgb(255, 255, 255);
    }

    @keyframes tagline {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    .taglinesub {
      font-family: "PT Sans", sans-serif;
      font-weight: 500;
      text-align: left;
      animation: tagsub 0.5s 4s forwards ease-in;
      opacity: 0;
    }

    @keyframes tagsub {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    .logo-wordmark-letter {
      opacity: 0;
      animation: letter-anim 3.5s forwards ease-in-out;
      animation-delay: calc(var(--order) * 100ms);
      overflow: hidden;
    }

    @keyframes letter-anim {
      0% {
        opacity: 0;
        transform: translateY(-80%);
      }
      3% {
        opacity: 1;
      }
      10% {
        opacity: 1;
        transform: translateY(-25%);
        color: var(--color);
      }

      50% {
        color: black;
      }

      70% {
        color: var(--color);
      }

      80% {
        color: black;
      }

      85% {
        color: var(--color);
      }

      100% {
        opacity: 1;
        color: black;
        transform: translateY(-25%);
      }
    }

    .par-title {
      font-family: "Geologica", sans-serif;
      font-size: 3em;
      margin-bottom: 0.5em;
      color: rgb(51, 51, 51);
      text-decoration: 0.1em underline var(--color);
    }

    .par-content {
      font-family: "PT Serif", serif;
      font-size: 1.5em;
      margin-bottom: 1em;
    }

    .header-img-sub {
        object-fit: cover;
        height: 0;
        width: 0;
        animation: in-pic 1s ease-out forwards;
        animation-delay: 3.5s;
        object-position: 0% 40%;

    }

    @keyframes in-pic {
        0% {

        }

        100% {
            width: 100%;
            height: 70vh;

        }
    }

    .tagline-cont {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 5vw;
    }

    .c1 {
        padding: 0 5em;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-items: center;
        background-color: var(--color);
    }

    #threejs-anim1 {
        overflow: hidden;
        position: relative;
    }

    #three-text {
        position: absolute;
        width: 30vw;
        height: 100vh;
        padding: 0 0 0 5vw;

        top: 10vh;

        p {
            color: rgb(47, 66, 102);
            font-family: 'Geologica', sans-serif;
            font-weight: 300;
            font-size: 1.5vw;
        }
        h1 {
            color: white;
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            font-size: 5vw;
        }
    }

    .sp-ul {
        text-decoration: underline .2em rgb(255, 255, 255);
    }

    .usp-a {
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: fit-content;
        // height: 100vh;
        
    }
    
    .partners-wrapper {
        padding: 5vw;
        background-color: #95c9fa;
    }

    .par-sub {
        font-size: 2em;
        font-weight: 300;
    }

    .img-partners-wrapper {
        margin-top: 7em;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 2em;
        img {
            height: 5em;
            width: auto;
        }
    }

    .dist {
        margin-top: 1em;
        color: #232b63;
    }

    @media only screen and (max-width: 1000px)  {
        .usp-a {
            grid-template-columns: 1fr;
            .c1 {
                width: 100vw;
                box-sizing: border-box;
                h1 {
                    font-size: 2em;
                }
            }
        }

        .img-partners-wrapper {
            flex-direction: column;
            align-items: center;
            img {
                height: 5em;
                width: fit-content;
            }
        }

        .logo-svg-header {
            padding-top: 4em;
            .tagline-cont {
                .tagline {
                    font-size: 1em;
                }
            }
        }

        #three-text {
            width: 60%;
            h1 {
                font-size: 3em;
            }
            p {
                font-size: 1.3em;
                font-weight: 500;
            }   
        }
    }

</style>

<div class="page-sized-col">
    <div class="logo-svg-header" id="header">
        <div style="margin: 0 auto;">
            <svg
            id="b20be4e7-e69d-411d-991c-cfbd05cc0aec"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1096.32 442.96"
            >
            <defs>
                <style>
                .triangle-bottom {
                    fill: url(#triangle-bottom-grd);
                    transform: rotate(0deg);
                    opacity: 0;
        
                    animation: bottom 1.5s ease-out .5s forwards;
                    
                    transform-box: fill-box;
                    transform-origin: top left;
                    transform: translateX(-20vw);
                }
                .triangle-mid {
                    fill: url(#triangle-mid-grd);
        
                    animation: mid 1.5s ease-out .2s forwards;
                    transform-box: fill-box;
                    transform-origin: 0% 12%;
                    transform: translateX(-20vw);
        
                    opacity: 0;
                }
                .triangle-top {
                    fill: url(#triangle-top-grd);
                    animation: top 1.5s ease-out forwards;
                    transform-box: fill-box;
                    transform-origin: 5% 10%;
                    opacity: 0;
                    transform: translateX(-20vw);
        
                }
        
                @keyframes top {
                    
                    30% {
                    opacity: 1;
        
                    }
        
                    80%, 100% {
                    opacity: 1;
        
                    transform: rotate(0deg);
                    }
                }
        
                @keyframes bottom {
                    0% {
        
                    }
        
                    20%{
                    opacity: 1;
        
                    }
        
                    80%, 100% {
                    opacity: 1;
        
                    transform: rotate(0deg);
                    }
                }
        
                @keyframes mid {
                    30% {
                    opacity: 1;
                    
                    }
        
                    80%, 100% {
                    opacity: 1;
        
                    transform: rotate(0deg);
                    }
                }
                </style>
                <linearGradient
                id="triangle-bottom-grd"
                x1="25.41"
                y1="326.27"
                x2="392.38"
                y2="326.27"
                gradientUnits="userSpaceOnUse"
                >
                <stop offset="0" stop-color="#5ca791" />
                <stop offset="0.24" stop-color="#579e8d" />
                <stop offset="0.63" stop-color="#498481" />
                <stop offset="0.99" stop-color="#396774" />
                </linearGradient>
                <linearGradient
                id="triangle-mid-grd"
                x1="28.17"
                y1="256.67"
                x2="371.1"
                y2="256.67"
                gradientTransform="matrix(1.05, 0.47, -0.6, 1.36, 106.38, -130.16)"
                gradientUnits="userSpaceOnUse"
                >
                <stop offset="0" stop-color="#5ca791" />
                <stop offset="0.21" stop-color="#53a18c" />
                <stop offset="0.55" stop-color="#39927f" />
                <stop offset="0.99" stop-color="#107969" />
                </linearGradient>
                <linearGradient
                id="triangle-top-grd"
                x1="29.26"
                y1="207.68"
                x2="391.41"
                y2="207.68"
                gradientUnits="userSpaceOnUse"
                >
                <stop offset="0" stop-color="#7cb4a2" />
                <stop offset="0.49" stop-color="#73b09d" />
                <stop offset="0.99" stop-color="#64ab96" />
                </linearGradient>
            </defs>
            <g transform="translate(-20 -110)">
                <path
                class="triangle-bottom"
                d="M375.59,478.59c31.72,38,17.17,69.09-32.33,69.09H115.41c-49.5,0-90-40.5-90-90V149.1c0-49.5,26-58.91,57.67-20.91Z"
                transform="translate(-25.41 -104.72)"
            />
            <path
                class="triangle-mid"
                d="M128,445.23,376.9,297c20.9-12.44,19.08-43.28-3.14-53.18L68.65,107.9C46.44,98,22.29,117.26,27,141.12L83.24,425.27A30,30,0,0,0,128,445.23Z"
                transform="translate(-25.41 -104.72)"
            />
            <path
                class="triangle-top"
                d="M224.69,304.56l161-165.91c12.31-12.68,3.33-33.93-14.35-33.93H49.3C31.63,104.72,22.64,126,35,138.65L196,304.56A20,20,0,0,0,224.69,304.56Z"
                transform="translate(-25.41 -104.72)"
            />
            </g>
            
            <g class="wordmark-only">
                <path
                class="logo-wordmark-letter"
                style="--order: 1; --color: #18434a"
                fill="currentColor"
                d="M540.92,228.44H422.45V389.1s-2.29,34,34,34h84.46V380.69H481.67s-16.85.55-16.85-16.84v-17.4h59V304.87H464.49V270.32h76.43Z"
                transform="translate(-25.41 -104.72)"
            />
            <path
                class="logo-wordmark-letter"
                style="--order: 2; --color: #1d7874"
                fill="currentColor"
                d="M684.72,388.84V270.06c0-43.11-34.85-41.27-34.85-41.27H566v194h85.3C686.1,422.77,684.72,388.84,684.72,388.84ZM643.11,287.72V363.5c0,18.92-16.86,16.85-16.86,16.85H608.83V270.52s-1.38-.4,16.68-.4S643.11,287.72,643.11,287.72Z"
                transform="translate(-25.41 -104.72)"
            />
            <path
                class="logo-wordmark-letter"
                style="--order: 3; --color: #679289"
                fill="currentColor"
                d="M836.51,228.44H718V389.1s-2.29,34,34,34h84.46V380.69H777.26s-16.84.55-16.84-16.84v-17.4h59V304.87H760.08V270.32h76.43Z"
                transform="translate(-25.41 -104.72)"
            />
            <path 
                class="logo-wordmark-letter"
                style="--order: 4; --color: #f4c095"
                fill="currentColor"
                d="M981.2,228.44H909s-45.94-3.08-45.9,34c0,26.64,0,33.3,0,33.3s-.67,29.43,35,36.08c26.29,4.89,27.06,4.85,27.06,4.85s13.94,1.24,14,18.73c0,8.19.05,8.68.05,8.68s1.11,16.5-14.94,16.8c-8.6.15-61.23,0-61.23,0v42.22h84.69s33.9,3.11,33.9-33.62V339.27s0-25.63-21.13-31.14L922.33,301s-18.81-2.54-17.56-18.58c1-12.76,17.87-11.88,17.87-11.88h59Z" 
                transform="translate(-25.41 -104.72)"
            />
            <path
                class="logo-wordmark-letter"
                style="--order: 5; --color: #ee2e31"
                fill="currentColor"
                d="M1121.38,228h-72.22s-45.94-3.08-45.91,34c0,26.64,0,33.3,0,33.3s-.67,29.44,35,36.08c26.3,4.89,27.06,4.85,27.06,4.85s13.94,1.24,14,18.73c0,8.19.05,8.68.05,8.68s1.11,16.5-14.94,16.8c-8.59.16-61.22,0-61.22,0v42.22h84.68s33.9,3.11,33.9-33.62V338.81s0-25.63-21.13-31.13l-38.16-7.11S1043.7,298,1045,282c1-12.76,17.87-11.88,17.87-11.88h59Z" 
                transform="translate(-25.41 -104.72)"
            />
            </g>
            
            </svg>
        </div>
        
        <div class="tagline-cont">
            <div>
                <a href="#three-wrapper" style="text-decoration: none;"><h1 class="tagline">Supercharging 21<sup>st</sup> Century Learning Through <span>Digital Education.</span></h1></a>
                <h2 class="taglinesub">Welcome to the 21st century</h2>
              </div>
              <div>
                  <img class="header-img-sub" src="/images/about-1.jpg" alt="Teacher">
              </div>
        </div>
    </div>
</div>

<div id="three-wrapper">
    <div id="threejs-anim1">
        <div id="three-text">
            <h1>Getting To Know Us</h1>
            <p>EDESS is an educational solution provider company that caters to schools & educational institutions with the aim to improve learning & teaching for both teachers & students <span class="sp-ul">all over the world.</span></p>
        </div>
    </div>
</div>

<div class="usp-a">
    <div class="content c1 mid" style="--color: #95c9fa">
        <Icon src="{CpuChip}" width="2em" height="2em" mini class="icon-usp-1" color="white"/>
        <h1 class="par-title dist" style="--color: #ffffff">Education Technologist</h1>

        <p class="par-content">
            We specialise in learning & teaching support system, school management system, school consultation & educational technologies to help our educators.    
        </p>
    </div>    

    <div class="content c1 mid" style="--color: #95c9fa">
        <Icon src="{BuildingLibrary}" width="2em" height="2em" mini class="icon-usp-1" color="white"/>
        <h1 class="par-title dist" style="--color: #ffffff">Expert Education Developers</h1>

        <p class="par-content">
            We work together with various Higher Education Institutions to development content for curriculum development & teacher's development.    
        </p>
    </div>    
</div>

<div class="partners-wrapper" id="partners">
    <h1 class="par-title mid dist">Our Education Partners</h1>
    <h2 class="par-title mid par-sub">We work with the best in the field to provide good quality content to our stakeholders.</h2>

    <div class="img-partners-wrapper">
        <img src="/logos/UTM.png" alt="Partner">
        <img src="/logos/UKM.png" alt="Partner">
        <img src="/logos/UTHM.png" alt="Partner">
        <img src="/logos/UPSI.png" alt="Partner">
        <img src="/logos/USM.png" alt="Partner">
    </div>
</div>