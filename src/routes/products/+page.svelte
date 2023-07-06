<script lang="ts">
    import { Bookmark, Icon } from "svelte-hero-icons";
</script>

<svelte:head>
    <title>Products - EDESS</title>
    <meta property="og:title" content="Our Products - EDESS Asia" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://my.site.com" />
    <meta property="og:image" content="http://localhost:5173/EDESS%20ICON%20NEW.png" />
    <meta property="og:description" content="The leading player in Malaysian Education Technology" />
    <meta name="theme-color" content="#ff9c33">
</svelte:head>

<style lang="scss">
    .page-scroller-wrapper {
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
        scroll-behavior: smooth;
        overflow-y: hidden;
        scroll-snap-type: x mandatory;
        
    }

    .page-scroller-wrapper::-webkit-scrollbar{
        display: none;
    }

    .pg-sized {
        width: 100vw;
        height: 100vh;

        display: grid;
        grid-template-columns: 1fr 1fr;

        // background-color: #b3c4ff;
        background-color: var(--color);
        .pg-big-title {
            padding: 10vh 5vw;
            
            .pg-block-content {
                h1 {
                    margin: 0;
                    width: fit-content;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 3.5vw;
                    margin-bottom: 2vh;
                    transition: font-size .2s ease-in;

                }
                h2 {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 1.2vw;
                    font-weight: 400;
                    transition: font-size .2s ease-in;
                }
                .usp-cards {
                    margin-top: 3vh;
                    grid-template-columns: 1fr 1fr 1fr;
                    display: grid;
                    max-height: 0;
                    overflow: hidden;

                    transition: max-height .2s ease-in;

                    .usp-2 {
                        width: 10vw;
                        padding: 1vw;
                        background-color: #ffffff;
                        border-radius: 1em;
                        .usp-title {
                            font-size: 1vw;
                        }

                        h2 {
                            font-size: .9vw;
                        }
                    }
                }

                .hover-hint {
                    background-color: #1b1464;
                    color: #ffffff;
                    width: fit-content;
                    padding: .2em;
                }

                &:hover {
                    .hover-hint {
                        display: none;
                    }
                    h1 {
                        font-size: 2vw;
                    }
                    h2 {
                        font-size: 1vw;
                    }
                    .usp-cards{
                        max-height: 500px;
                    }
                }
            }
        }

        img {
            opacity: 0;
            width: 50vw;
            height: 100vh;

            object-fit: cover;
            object-position: 0% 100%;
            animation: fade-in 1s .5s forwards ease-in;
        }
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
    #button-scroller {
        margin: 2vw 0;
        width: 16vw
    }

    .inner-triangle-is-focused{
        fill:#2e3192;
        transition: fill .2s ease-in;
        &:hover {
            fill: white;
        }
    }
    .outer-triangle-is-focused, .outer-triangle-not-focused {
        fill:none;
    }

    .inner-triangle-not-focused {
        fill:rgba(46, 49, 146, 0.1);
        transition: fill .2s ease-in;

        &:hover {
            fill: white;
        }
    }
    
    .outer-triangle-is-focused {
        stroke:#fff;
    }
    .outer-triangle-is-focused, .outer-triangle-not-focused {
        stroke-miterlimit:10;
        stroke-width:10px;
    }
    .outer-triangle-not-focused {
        stroke:#1b1464;
    }

    .page-actionable {
        display: flex;
        flex-direction: row;
        gap: 2vw;
        justify-content: center;
        justify-items: center;
        align-items: center;
    }

    .cta-hover {
        position: relative;
        z-index: 0;
        .cta-button-wrapper {
            opacity: 0;
            position: absolute;
            z-index: 1;
            width: 100%;
            height: 100%;
            background-color: rgba(23, 43, 59, 0.7);
            transition: opacity .2s ease-in;
            .ca-clear {
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-items: center;
                justify-content: center;
                h1 {
                    color: white;
                    margin: 1vw;
                }
            }
        }

        &:hover {
            .cta-button-wrapper {
                opacity: 1;
            }
        }
    }

    @media only screen and (max-width: 1100px)  {
        .page-scroller {

            .pg-sized {
                max-height: 100vh;

                grid-template-columns: 1fr;
                grid-template-rows: 1fr .1fr;

                .pg-big-title {
                    padding: 2em 1em;
                    .pg-block-content {
                        .hover-hint {
                            font-size: .5em;
                            margin-bottom: .2em;
                        }
                        h1 {
                            font-size: 1em;
                            margin-bottom: .5em;
                        }
                        h2 {
                            font-size: 1em;
                        }
                        .usp-cards {
                            grid-template-columns: 1fr;
                            gap: 1em;

                            .usp-2 {
                                border-radius: 1em;
                                width: 100%;
                                box-sizing: border-box;
                                padding: 1em 1em;
                                .usp-title {
                                    font-size: 1em;
                                }

                                h2 {
                                    font-size: 1em;
                                }
                            }
                        }
                        &:hover {
                            .usp-cards{
                                max-height: 800px;
                            }
                        }
                    }
                }
                .cta-hover {
                    img {
                        width: 100%;
                        height: max-content;
                    }
                    height: max-content;
                    box-sizing: border-box;
                }
            }
        }
    }
</style>

<div class="page-scroller-wrapper">
    <div class="page-scroller" id="albayen" style="--color: #b3c4ff;">
        <div class="pg-sized">
            <div class="pg-big-title">
                <div class="pg-block-content">
                    <h2 class="hover-hint">Hover to learn more</h2>
                    <h1>Al-Bayen: Learning & Teaching Support System,</h1><h2>Customised curriculum for your school.</h2>
                    <div class="usp-cards">
                        <div class="usp-2" style="text-align: left;">
                            <Icon src="{Bookmark}" mini class="icon-feature-1" />
                            <h1 class="usp-title">Curriculum Development</h1>
                            <h2>Unlike any other LMS, we help our clients to develop the learning and teaching materials according to the school curriculum.</h2>
                        </div>
                        <div class="usp-2" style="text-align: left;">
                            <Icon src="{Bookmark}" mini class="icon-feature-1" />
                            <h1 class="usp-title">Teacher's Training & Development</h1>
                            <h2>Educators are our frontliners when it comes to teaching. To ensure they get the support they need, we provide consultation & curriculum & co-curriculum development for them. </h2>
                        </div>
                        <div class="usp-2" style="text-align: left;">
                            <Icon src="{Bookmark}" mini class="icon-feature-1" />
                            <h1 class="usp-title">Data Driven Assessment</h1>
                            <h2>We understand that one curriculum doesn't fit all – so we customise it for you to use either the national curriculum or any other curriculums.</h2>
                        </div>
                    </div>
                </div>
                <svg id="button-scroller" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 664.74 372.03">
                    <a href="#albayen"><polygon class="inner-triangle-is-focused" points="320.79 186.82 0 1.61 0 372.03 320.79 186.82"/></a>
                    <polygon class="outer-triangle-is-focused" points="263.03 186.82 24.76 49.25 24.76 324.38 263.03 186.82"/>
                    <a href="#whizzykids"><polygon class="inner-triangle-not-focused" points="493.77 185.21 172.98 0 172.98 370.42 493.77 185.21"/></a>
                    <polygon class="outer-triangle-not-focused" points="436.01 185.21 197.74 47.64 197.74 322.77 436.01 185.21"/>
                    <a href="#mindloops"><polygon class="inner-triangle-not-focused" points="664.74 186.82 343.95 1.61 343.95 372.03 664.74 186.82"/></a>
                    <polygon class="outer-triangle-not-focused" points="606.98 186.82 368.71 49.25 368.71 324.38 606.98 186.82"/>
                </svg>
            </div>
            <div class="cta-hover">
                <div class="cta-button-wrapper">
                    <div class="ca-clear">
                        <h1>Like to know more?</h1>
                        <div class="buttoncta2"><a href="https://www.albayen.com" target="_blank">Explore Al Bayen for your school</a></div>
                    </div>
                </div>
                <img src="/images/products-1.jpg" alt="A student learning through a computer">
            </div>
        </div>
    </div>
    <div class="page-scroller">
        <div class="pg-sized" id="whizzykids" style="--color: #fff6b3;">
            <div class="pg-big-title">
                <div class="pg-block-content">
                    <h2 class="hover-hint">Hover to learn more</h2>
                    <h1>Whizzy Kids: Helping Kindergartens To Shape Our Future Generations</h1><h2>Developing The Toddler's Brain As Early As 3 Years Old.</h2>
                    <div class="usp-cards">
                        <div class="usp-2" style="text-align: left;">
                            <Icon src="{Bookmark}" mini class="icon-feature-1" />
                            <h1 class="usp-title">Humanising Education For Toddlers</h1>
                            <h2>Priotising the toddler's brain development by providing humanise education through our Learning & Teaching Support System</h2>
                        </div>
                        <div class="usp-2" style="text-align: left;">
                            <Icon src="{Bookmark}" mini class="icon-feature-1" />
                            <h1 class="usp-title">Personalised Curriculum For Kindergarten</h1>
                            <h2>Whether it’s national curriculum or any other, our LTSS can support any curriculum</h2>
                        </div>
                        <div class="usp-2" style="text-align: left;">
                            <Icon src="{Bookmark}" mini class="icon-feature-1" />
                            <h1 class="usp-title">Empowering Teachers To Educate</h1>
                            <h2>We believe that a toddler's learning capability starts with a good educator. We support teachers to improve their teaching techniques by implementing 21st century learning</h2>
                        </div>
                    </div>
                </div>
                <svg id="button-scroller" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 664.74 372.03">
                    <a href="#albayen"><polygon class="inner-triangle-not-focused" points="320.79 186.82 0 1.61 0 372.03 320.79 186.82"/></a>
                    <polygon class="outer-triangle-not-focused" points="263.03 186.82 24.76 49.25 24.76 324.38 263.03 186.82"/>
                    <a href="#whizzykids"><polygon class="inner-triangle-is-focused" points="493.77 185.21 172.98 0 172.98 370.42 493.77 185.21"/></a>
                    <polygon class="outer-triangle-is-focused" points="436.01 185.21 197.74 47.64 197.74 322.77 436.01 185.21"/>
                    <a href="#mindloops"><polygon class="inner-triangle-not-focused" points="664.74 186.82 343.95 1.61 343.95 372.03 664.74 186.82"/></a>
                    <polygon class="outer-triangle-not-focused" points="606.98 186.82 368.71 49.25 368.71 324.38 606.98 186.82"/>
                </svg>
            </div>
            <div class="cta-hover">
                <div class="cta-button-wrapper">
                    <div class="ca-clear">
                        <h1>Learn more about Whizzy Kids</h1>
                        <div class="buttoncta2"><a href="https://www.albayen.com" target="_blank">Help My Kindergarten</a></div>
                    </div>
                </div>
                <img src="/images/products-2.jpg" alt="A student learning through a computer">
            </div>
        </div>
    </div>
    <div class="page-scroller">
        <div class="pg-sized" id="mindloops" style="--color: #b3b6ff;">
            <div class="pg-big-title">
                <div class="pg-block-content">
                    <h2 class="hover-hint">Hover to learn more</h2>
                    <h1>Mind Loops: Supplementing Your Child's Education and More</h1><h2>Introducing our Digital Magazine & Educational Portal. Developed by educators for educators, families & students.</h2>
                    <div class="usp-cards">
                        <div class="usp-2" style="text-align: left;">
                            <Icon src="{Bookmark}" mini class="icon-feature-1" />
                            <h1 class="usp-title">More than just academics</h1>
                            <h2>Learning isn't just limited to academics – it's also about general knowledge & living skills to survive and excel in what we do</h2>
                        </div>
                        <div class="usp-2" style="text-align: left;">
                            <Icon src="{Bookmark}" mini class="icon-feature-1" />
                            <h1 class="usp-title">Strengthening Family Ties</h1>
                            <h2>Family institution plays a major role in shaping our society & community. By doing family bonding activities and getting to know one another, family can strengthen their relationships</h2>
                        </div>
                        <div class="usp-2" style="text-align: left;">
                            <Icon src="{Bookmark}" mini class="icon-feature-1" />
                            <h1 class="usp-title">Building Community First</h1>
                            <h2>We encourage our users to engage with one another to benefit one another by sharing their user-generated content in our community forum</h2>
                        </div>
                    </div>
                </div>
                <svg id="button-scroller" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 664.74 372.03">
                    <a href="#albayen"><polygon class="inner-triangle-not-focused" points="320.79 186.82 0 1.61 0 372.03 320.79 186.82"/></a>
                    <polygon class="outer-triangle-not-focused" points="263.03 186.82 24.76 49.25 24.76 324.38 263.03 186.82"/>
                    <a href="#whizzykids"><polygon class="inner-triangle-not-focused" points="493.77 185.21 172.98 0 172.98 370.42 493.77 185.21"/></a>
                    <polygon class="outer-triangle-not-focused" points="436.01 185.21 197.74 47.64 197.74 322.77 436.01 185.21"/>
                    <a href="#mindloops"><polygon class="inner-triangle-is-focused" points="664.74 186.82 343.95 1.61 343.95 372.03 664.74 186.82"/></a>
                    <polygon class="outer-triangle-is-focused" points="606.98 186.82 368.71 49.25 368.71 324.38 606.98 186.82"/>
                </svg>
            </div>
            <div class="cta-hover">
                <div class="cta-button-wrapper">
                    <div class="ca-clear">
                        <h1>Learn more about Mind Loops</h1>
                        <div class="buttoncta2"><a href="https://mindloops.org/index/index.php" target="_blank">Visit our educational portal</a></div>
                    </div>
                </div>
                <img src="/images/products-3.jpg" alt="A student learning through a computer">
            </div>
        </div>
    </div>
</div>
