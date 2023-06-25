<script lang="ts">
    import { onMount } from "svelte";
    import { CheckCircle, CpuChip, ComputerDesktop, Icon, BuildingLibrary, Bookmark, BookOpen, AcademicCap, ChatBubbleBottomCenter } from "svelte-hero-icons";

    onMount(() => {
        const hero:HTMLElement = document.getElementById('header')!;
        const main:HTMLElement = document.getElementById('main-content')!;
        
        window.addEventListener('scroll', () => {
            var h = ((hero.getBoundingClientRect().bottom * 1) / window.innerHeight);
            main.style.opacity = (String) (1 - h);
            // hero.style.opacity = h * 0.5;
            // if(hero.getBoundingClientRect().bottom / )
        });
    });
    
</script>

<svelte:head>
    <title>EDESS</title>
    <meta property="og:title" content="EDESS Asia" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://my.site.com" />
    <meta property="og:image" content="http://localhost:5173/EDESS%20ICON%20NEW.png" />
    <meta property="og:description" content="The leading player in Malaysian Education Technology" />
    <meta name="theme-color" content="#ff9c33">
</svelte:head>

<style lang="scss">
    navbar {
        position: sticky;
    }

    .logo-svg-header {
        width: 45vw;
        height: 100vh; 
        // height: fit-content;
        margin: auto;
        opacity: 1;
    }

    .header-hero{
        position: relative;
        z-index: 0;
        background-color: #95c9fa;
        background-image: url("/half-circles.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }

    .tagline {
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        text-align: center;
        opacity: 0;
        animation: tagline 2s ease-in;
        // animation-delay: 2s;
        animation-fill-mode: forwards;
        font-size: 4vw;
        padding-top: 17vw;
        margin-bottom: .3vw;
        color: #ffffff;
        .sp-gl {
            text-decoration: underline .2em #f9dbbb;
            animation: letter-anim 3s ease-out;
            animation-delay: calc(var(--order) * 100ms);
        }
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
        font-family: "Geologica", sans-serif;
        font-weight: 500;
        text-align: center;
        animation: tagsub 0.5s forwards ease-in;
        // animation-delay: 3s;
        opacity: 0;
        color: #30526e;

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
            // opacity: 0;
            // transform: translateY(-80%);
        }
        3% {
            // opacity: 1;
        }
        10% {
            // opacity: 1;
            // transform: translateY(-25%);
            text-decoration-color: var(--color);
            color: var(--color);
        }

        50% {
            text-decoration-color: #f9dbbb;
            color: rgb(255, 255, 255);
        }

        70% {
            text-decoration-color: var(--color);
            color: var(--color);
        }

        80% {
            text-decoration-color: #f9dbbb;

            color: rgb(255, 255, 255);
        }

        85% {
            text-decoration-color: var(--color);
            color: var(--color);
        }

        100% {
            text-decoration-color: #f9dbbb;

            opacity: 1;
            color: rgb(255, 255, 255);
            // transform: translateY(-25%);
        }
    }

    

    .content {
        opacity: 0;
    }

    .verif-points {
        font-family: 'Geologica', sans-serif;
        margin-top: 7vw;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        font-size: 0.8em;
        gap: 2em;
        h3{
            color: #4d4d4d;
            font-weight: 400;
        }
        width: fit-content;
        padding: 2em 2em;
        background-color: #ffffff;
        border-radius: 1em;
    }

    @media only screen and (max-width: 1000px)  {
        .verif-points {
            grid-template-columns: 1fr;
        }
    }

    #main-content {
        background-color: #e9f4ff;
    }
   
    .container-blue {
        .usp-1 {
            background-color: white;
            box-shadow: -1em 1em #a2c2f3;
        }
    }


    .pg-sized {
        border-radius: 1em;
        margin: 0 auto;
        width: 80vw;
        display: grid;
        grid-template-columns: 4fr 1fr;
        background-color: var(--color);
        .pg-big-title {
            padding: 4em 5vw;
            height: fit-content;
            
            .pg-block-content {
                h1 {
                    margin: 0;
                    width: fit-content;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 2em;
                    margin-bottom: .3em;
                    transition: font-size .2s ease-in;

                }
                h2 {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 1.2vw;
                    font-weight: 400;
                    margin-bottom: 2em;

                    transition: font-size .2s ease-in;
                }
            }
        }

        img {
            border-top-right-radius: 1em;
            border-bottom-right-radius: 1em;

            width: 100%;
            height: 100%;

            object-fit: cover;
            object-position: 0% 100%;
            animation: fade-in 1s .5s forwards ease-in;
        }
    }

    .products {
        padding: 5em 0 3em 0;

        max-width: 100vw;
        display: flex;
        flex-direction: column;
        gap: 2em;
    }

    hr {
        border-top: 4px solid rgb(48, 55, 73);
        margin: 0 5vw;
    }

    .c2 {
        background-color: #e9f4ff;
    }
</style>

<div>

</div>

<div class="header-hero" id="header-hero" style="--show-over: true">
    <div class="logo-svg-header" id="header">
        <div>
            <h1 class="tagline">Teaching, made <span class="sp-ul"><span class="sp-gl" style="--color: #f9dbbb; --order: 1">e</span><span class="sp-gl" style="--color: #ea906c; --order: 2">a</span><span class="sp-gl" style="--color: #ff9a26; --order: 3">s</span><span class="sp-gl" style="--color: #b31312; --order: 4">y</span>.</span></h1>
            <h2 class="taglinesub">Welcome to the 21st century</h2>
        </div>
        <div class="verif-points">
            <div class="verif">
                <Icon src="{CheckCircle}" mini class="icon-usp-ch" />
                <h3>Customer Relationship Management (CRM)</h3>
            </div>
            <div class="verif">
                <Icon src="{CheckCircle}" mini class="icon-usp-ch" />
                <h3>Portfolio & Deal Management (PDM)</h3>
            </div>
            <div class="verif">
                <Icon src="{CheckCircle}" mini class="icon-usp-ch" />
                <h3>Investor & Fund Management (IFM)</h3>
            </div>
        </div>
    </div>
</div>

<div id="main-content" class="content" style="padding: 5vw 15vw 3vw 15vw; --color: #c2e1ff;">
    <div id="who-we-are" class="section">
        <h1 class="par-title mid" style="--color: #232b63">Who We Are</h1>

        <div class="usp-container container-blue">
            <div class="usp-1">
                <Icon src="{CpuChip}" mini class="icon-usp-1" color="#232b63"/>
                <h1>Educational Technologists</h1>
                <a href="/services/edtech" class="buttoncta1" style="--color: #ea906c;">Travel to the 21st Century</a>
            </div>
            <div class="usp-1">
                <Icon src="{ComputerDesktop}" mini class="icon-usp-1" color="#232b63"/>
                <h1>Digital Education Experts</h1>
                <a href="/services/edtech" class="buttoncta1" style="--color: #ff9a26;">Digitalise Your Child's Learning</a>
            </div>
            <div class="usp-1">
                <Icon src="{BuildingLibrary}" mini class="icon-usp-1" color="#232b63"/>
                <h1>School Management Experts</h1>
                <a href="/services/edtech" class="buttoncta1" style="--color: #f9dbbb;">Digitalise Your Child's Learning</a>
            </div>
        </div>
    </div>
</div>

<div class="section" style="padding: 5vw 15vw 3vw 15vw;">
    <h1 class="par-title mid" style="--color: #ff9a26">We're Trusted By</h1>

    <div class="trusted-by">
        <img src="/logos/JAINJ.png" alt="logo" class="trusted-by-logo">
        <img src="/logos/IKRAMMUSLEH.png" alt="logo" class="trusted-by-logo">
        <img src="/logos/KAFA.png" alt="logo" class="trusted-by-logo">
        <h1>SRITI</h1>
        <h1>Tahfiz</h1>
    </div>
</div>

<div class="section cont-1" style="padding: 5vw 15vw 3vw 15vw; --color: #e9f4ff;; margin-bottom: 0;">
    <h1 class="par-title mid" style="--color: #ff9a26">What We Can Do For You</h1>
    <div class="usp-container">
        <div class="feature-1 usp-1" style="text-align: left;">
            <Icon src="{Bookmark}" mini class="icon-feature-1" />
            <h1>Islamic Curriculum-Ready</h1>
        </div>
        <div class="feature-1 usp-1" style="text-align: left;">
            <Icon src="{Bookmark}" mini class="icon-feature-1" />
            <h1>School Management Operation System-Ready</h1>
        </div>
        <div class="feature-1 usp-1" style="text-align: left;">
            <Icon src="{Bookmark}" mini class="icon-feature-1" />
            <h1>Digital Classroom-Ready</h1>
        </div>
    </div>
</div>

<div class="section products">
    <h1 class="par-title mid" style="--color: #232b63">Our Products</h1>

    <div class="page-scroller" id="albayen" style="--color: #b3c4ff;">
        <div class="pg-sized">
            <div class="pg-big-title">
                <div class="pg-block-content">
                    <h1>Al-Bayen: Learning & Teaching Support System,</h1><h2>Customised curriculum for your school.</h2>
                    <div class="buttoncta3">
                        <a href="/products#albayen">Learn more</a>
                    </div>
                </div>
            </div>
            <img src="/images/products-1.jpg" alt="A student learning through a computer">
        </div>
    </div>
    <div class="page-scroller">
        <div class="pg-sized" id="whizzykids" style="--color: #fff6b3;">
            <div class="pg-big-title">
                <div class="pg-block-content">
                    <h1>Whizzy Kids: Helping Kindergartens To Shape Our Future Generations</h1><h2>Developing The Toddler's Brain As Early As 3 Years Old.</h2>
                    <div class="buttoncta3">
                        <a href="/products#whizzykids">Learn more</a>
                    </div>
                </div>
            </div>
            <img src="/images/products-2.jpg" alt="A student learning through a computer">
        </div>
    </div>
    <div class="page-scroller">
        <div class="pg-sized" id="mindloops" style="--color: #b3b6ff;">
            <div class="pg-big-title">
                <div class="pg-block-content">
                    <h1>Mind Loops: Supplementing Your Child's Education and More</h1><h2>Introducing our Digital Magazine & Educational Portal. Developed by educators for educators, families & students.</h2>
                    <div class="buttoncta3">
                        <a href="/products#mindloops">Learn more</a>
                    </div>
                </div>
            </div>
            <img src="/images/products-3.jpg" alt="A student learning through a computer">
        </div>
    </div>
</div>

<div class="c2" style="padding: 5vw 15vw 3vw 15vw; --color: #c2e1ff;">
    <div class="section">
        <h1 class="par-title mid" style="--color: #232b63">Our Services</h1>

        <div class="usp-container container-blue">
            <div class="usp-1">
                <Icon src="{BookOpen}" mini class="icon-usp-1" color="#232b63"/>
                <h1>Curriculum Development</h1>
                <a href="/services/curriculum" class="buttoncta1" style="--color: #ea906c;">Learn more</a>
            </div>
            <div class="usp-1">
                <Icon src="{AcademicCap}" mini class="icon-usp-1" color="#232b63"/>
                <h1>Teacher's Development and Training</h1>
                <a href="/services/teachers" class="buttoncta1" style="--color: #ff9a26;">Learn more</a>
            </div>
            <div class="usp-1">
                <Icon src="{ChatBubbleBottomCenter}" mini class="icon-usp-1" color="#232b63"/>
                <h1>Education Consultation</h1>
                <a href="/services/consultation" class="buttoncta1" style="--color: #ff9a26;">Learn more</a>
            </div>
        </div>
    </div>
</div>