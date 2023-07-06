<script lang="ts">
    import { Icon, ChevronDown, Bars3BottomRight } from "svelte-hero-icons";
    import '../app.scss'
    import { page } from '$app/stores'
    
    import { afterUpdate } from "svelte";

    const absPages:Array<String> = ["/", "/about", "/careers"] 

    let pos:string;
    afterUpdate(() => {
        let currPath = $page.url.pathname;
        pos = absPages.includes(currPath.substring(currPath.lastIndexOf('/'))) ? "absolute" : "relative";

        const links = document.getElementsByClassName("nav-href");

        // making it so that the navbar actually highlights the main path in navbar and its selected subpaths (idk what to call it)
        [...links].forEach(element => {
            if(
                element.getAttribute("href") == currPath || 
                element.getAttribute("href") == currPath.substring(0, currPath.lastIndexOf('/')) || 
                (
                    // check if this nav item cant be navigated to / page doesnt exist like "/services/" 
                    element.classList.contains("cannot-nav-to") && 
                    element.getAttribute("href")!.substring(0, currPath.lastIndexOf('/'))
                )
                ) {
                // highlight nav item
                element.classList.add("active");
            }
            else {
                element.classList.remove("active");
            }
        });

        var hamburger = document.getElementById("hamburger")!;
        var navbg = document.getElementById("nav-bg")!;
        var menu = document.getElementById("navham")!;

        // show hamburger menu for mobile
        hamburger.addEventListener("click", function() {
            menu.classList.toggle("show");
            if(menu.classList.contains("show")){
                menu.style.display = "block";
                navbg.style.backgroundColor = "white";
            }
            else {
                menu.style.display = "none";
                navbg.style.backgroundColor = "transparent";
            }
        });
        window.addEventListener("resize", function() {
            if (window.innerWidth > 1100) {
                menu.classList.remove("show");
                hamburger.style.display = "none";
                // navbg.style.backgroundColor = "transparent";

                menu.style.display = "flex";
                } else {
                hamburger.style.display = "block";
                menu.style.display = "none";
            }   
        });
    });

    

    
    // Handle window resize
    

    // function openMenu() {
    //     var element = document.getElementById("navham")!;
    //     element.classList.toggle("navhamshow");
    //     if(element.classList.contains("navhamshow")){
    //         element.style.display = "block"
    //     }
    //     else {
    //         element.style.display = "none"
    //     }
    //     console.log("TEST")
    // }
</script>

<svelte:head>
	<link rel="icon" href="favicon.ico" />
    <title>EDESS</title>
</svelte:head>

<style lang="scss">
    .nav-bg {
        position: sticky;
        top: 0;
        z-index: 1;

        width: 100%;
        height: fit-content;
        // background-color: white;
        margin: 0 auto;
        background-color: transparent;
        transition: background-color .2s ease-in;
        &:hover{
            background-color: #ffffff;
        }
    }
    .navbar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-items: center;
        justify-content: center;
        gap: 2vw;
        .logo-ham {
            display: flex;
            flex-direction: row;
            gap: 2vw;
            
            align-items: center;
            justify-items: center;
            justify-content: center;
        }
    }

    nav {
        padding: 1em 1em;
        width: fit-content;
        margin: 0 auto;
        .nav-main-list {
            padding-left: 0;
            display: flex;
            flex-direction: row;
            list-style-type: none;
            align-items: center;
            justify-items: center;
            gap: 2vw;
            .nav-li {
                padding: 1em 0;
            }
            .nav-card-has-extra {
                &:hover{
                    .nav-card-extra{
                        max-height: 500px;
                        display: inline-block;
                        &:hover {
                            display: inline-block;
                        }
                        background-color: white;
                        padding: 0 2vh 0 0;
                        top: 4em;
                        ul {
                            list-style-type: none;
                        }
                        .extra-nav-item {
                            margin-bottom: 1em;

                            a {
                                text-decoration: none;
                                color: rgb(80, 80, 80);
                            }
                        }
                    }
                }
            }
        }
    }

    .nav-icon {
        width: 1.5em;
        height: auto;
        margin-right: 1.5em;
    }

    .nav-card-extra {
        display: none;
        position: absolute;
        z-index: 2;
        ul {
            padding-top: 1vh; 

            li {
                font-family: 'Geologica', sans-serif;
                font-size: 1em;
                font-weight: 500;
                color: rgb(80, 80, 80);
            }
        }
    }

    .nav-card-has-extra {
        display: flex;
        flex-direction: column;
    }

    .footer-wordmark {
        width: 10vw;
        height: auto;
    }
    
    footer {
        padding: 3vw 5vw 1vw 5vw;
        margin: 0 auto;
        border-top: 0.2em solid rgb(104, 104, 104);
    }

    .footer-nav {
        margin-top: 2vw;
        padding-left: 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        list-style-type: none;
        gap: 1vw;

        li {
            padding: 1em 0;
        }
    }

    .footer-nav-extra {
        ul {
            list-style-type: none;
            padding-left: 0;
            li {
                padding: 1em 0;
                a {
                    color: rgb(95, 95, 95);
                }
            }
        }
    }

    #hamburger {
        display: none;
    }

    .footer-contact {
        h3 {
            font-family: 'Geologica', sans-serif;
            font-size: 1em;
            font-weight: 400;
        }

        border-left: #ff9a26 .3em solid;
        padding: 3em 5em;
    }

    .footer-divider {
        display: grid;
        grid-template-columns: 2.5fr 1fr;
    }

    @media only screen and (max-width: 1100px)  {
        .nav-bg .navbar {
            #hamburger {
                display: block;
            }
            display: block;

            .nav-main-list {
                display: none;
                .nav-card-has-extra {
                    position: relative;

                    &:hover {
                        position: relative;

                    }
                }
                .nav-card-extra {
                    display: flex;
                    position: relative;
                    
                    
                    background-color: white;
                    padding: 0 2vh 0 0;

                    ul {
                        list-style-type: none;
                    }
                    .extra-nav-item {
                        margin-bottom: 1em;

                        a {
                            text-decoration: none;
                            color: rgb(80, 80, 80);
                        }
                    }
                }
            }
        }

        .navbar .show {
            display: block !important;
            background-color: white;
            width: 100vw;
            .nav-li {
            }
            .nav-card-extra {
                position: relative;
                margin-top: 0;
            }
        }

        footer {
            display: none;
        }
    }
</style>
<div class="nav-bg" id="nav-bg" style="position: {pos};" data-sveltekit-reload>
    <nav class="navbar">
        <div class="logo-ham">
            <a href="/"><img class="nav-icon" src="/icon.png" alt="The EDESS logo"></a>
            <div id="hamburger"><Icon src="{ Bars3BottomRight }" width=1.5em height=2em/></div>
        </div>
        <ul class="nav-main-list" id="navham">
            <li class="nav-li nav-card-has-extra">
                <a href="/about" class="hoverable-link dropdown-nav nav-href" id="about-dd" style="--color: #f9dbbb">About <Icon src="{ChevronDown}" width="1em" height="fit-content" stroke-width="3"/></a>
                <div class="nav-card-extra">
                    <ul>
                        <li class="nav-li extra-nav-item hoverable-link" style="--color: #f9dbbb"><a class="nav-href" href="/about">Getting To Know Us</a></li>
                        <li class="nav-li extra-nav-item hoverable-link" style="--color: #f9dbbb"><a class="nav-href" href="/about#partners">Our Partners</a></li>
                        <li class="nav-li extra-nav-item hoverable-link" style="--color: #f9dbbb"><a class="nav-href" href="/about/careers">Careers</a></li>
                    </ul>
                </div>
            </li>
            <li class="nav-li">
                <a href="/products" class="hoverable-link nav-href" id="product-dd" style="--color: #ffa07a">Our Products</a>
            </li>
            <li class="nav-li nav-card-has-extra">
                <a href="/services/edtech" class="hoverable-link dropdown-nav nav-href cannot-nav-to" id="services-dd" style="--color: #ff9a26">Our Services and Solutions <Icon src="{ChevronDown}" width="1em" height="fit-content" stroke-width="3"/></a>
                <div class="nav-card-extra">
                    <ul>
                        <li class="nav-li extra-nav-item hoverable-link" style="--color: #ff9a26"><a class="nav-href" href="/services/edtech">Education Technologies</a></li>
                        <li class="nav-li extra-nav-item hoverable-link" style="--color: #ff9a26"><a class="nav-href" href="/services/consultation">Education Consultation</a></li>
                        <li class="nav-li extra-nav-item hoverable-link" style="--color: #ff9a26"><a class="nav-href" href="/services/curriculum">Curriculum Development</a></li>
                        <li class="nav-li extra-nav-item hoverable-link" style="--color: #ff9a26"><a class="nav-href" href="/services/teachers">Teacher's Development</a></li>
                        <li class="nav-li extra-nav-item hoverable-link" style="--color: #ff9a26"><a class="nav-href" href="/services/management">School Management & Operation</a></li>
                    </ul>
                </div>
            </li>
            <li class="nav-li ">
                <a href="/csr" class="hoverable-link nav-href" style="--color: #b31312">Corporate Social Responsability</a>
            </li>
            <li class="nav-li ">
                <a href="/blog" class="hoverable-link nav-href" style="--color: #0c134f">Blog</a>
            </li>
            <li class="nav-li ">
                <a href="/contact" class="hoverable-link nav-href" style="--color: #2b2a4c">Contact Us</a>
            </li>
        </ul>
    </nav>
</div>
<slot />

<footer>
    <div>
        <img src="/edesswordmark.png" alt="EDESS Logo" class="footer-wordmark">
        <div class="footer-divider">
            <ul class="footer-nav">
                <li class="nav-li nav-card-has-extra">
                    <a href="/about" class="hoverable-link dropdown-nav" id="about-dd" style="--color: #f9dbbb">About</a>
                    <div class="footer-nav-extra">
                        <ul>
                            <li class="nav-li extra-nav-item hoverable-link" style="--color: #f9dbbb"><a href="/about">Getting To Know Us</a></li>
                            <li class="nav-li extra-nav-item hoverable-link" style="--color: #f9dbbb"><a href="/about#partners">Our Partners</a></li>
                            <li class="nav-li extra-nav-item hoverable-link" style="--color: #f9dbbb"><a href="/about/careers">Careers</a></li>
                        </ul>
                    </div>
                </li>
                <li class="nav-li nav-card-has-extra">
                    <a href="/products" class="hoverable-link dropdown-nav" id="product-dd" style="--color: #ffa07a">Our Products</a>
                    <div class="footer-nav-extra">
                        <ul>
                            <li class="nav-li extra-nav-item hoverable-link" style="--color: #ffa07a"><a href="/products#albayen">Al Bayen</a></li>
                            <li class="nav-li extra-nav-item hoverable-link" style="--color: #ffa07a"><a href="/products#whizzykids">Whizzy Kids</a></li>
                            <li class="nav-li extra-nav-item hoverable-link" style="--color: #ffa07a"><a href="/products#mindloops">Mind Loops</a></li>
                        </ul>
                    </div>
                </li>
                <li class="nav-li nav-card-has-extra">
                    <a href="/services" class="hoverable-link dropdown-nav" id="services-dd" style="--color: #ff9a26">Our Services and Solutions</a>
                    <div class="footer-nav-extra">
                        <ul>
                            <li class="nav-li extra-nav-item hoverable-link" style="--color: #ff9a26"><a href="/services/edtech">Education Technologies</a></li>
                            <li class="nav-li extra-nav-item hoverable-link" style="--color: #ff9a26"><a href="/services/consultation">Education Consultation</a></li>
                            <li class="nav-li extra-nav-item hoverable-link" style="--color: #ff9a26"><a href="/services/curriculum">Curriculum Development</a></li>
                            <li class="nav-li extra-nav-item hoverable-link" style="--color: #ff9a26"><a href="/services/teachers">Teacher's Development</a></li>
                            <li class="nav-li extra-nav-item hoverable-link" style="--color: #ff9a26"><a href="/services/management">School Management & Operation</a></li>
                        </ul>
                    </div>
                </li>
                <li class="nav-li ">
                <a href="/csr" class="hoverable-link" style="--color: #b31312">Corporate Social Responsability</a>
                </li>
                <li class="nav-li ">
                <a href="/blog" class="hoverable-link" style="--color: #0c134f">Blog</a>
                </li>
                <li class="nav-li ">
                <a href="/contact" class="hoverable-link" style="--color: #2b2a4c">Contact Us</a>
                </li>
            </ul>
            <div class="footer-contact">
                <h3 style="margin-bottom: 3em;">Tel. <span style="text-decoration: underline #ff9a26 .2em;">+607 550 0077</span></h3>
                <h3><span style="text-decoration: underline #ff9a26 .2em;">Address:</span><br>
                    201, Industry Centre Building, <br>
                    ICC, UTM Technovation Park, <br>
                    Jalan Pontian Lama, <br>
                    81300 Skudai, Johor</h3>
            </div>
        </div>
    </div>
</footer>