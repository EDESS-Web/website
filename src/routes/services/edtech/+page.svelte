<script lang="ts">

</script>

<svelte:head>
    <title>Education Technology</title>
</svelte:head>

<style lang="scss">
    .header-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;

        max-width: 100vw;
        height: 100vh;

        background-color: #fff6b3;
        .header-text {
            padding: 5vw;
            h1 {
                font-family: 'Montserrat', sans-serif;
                font-size: 3.5rem;
            }
            h2 {
                font-family: 'Geologica', sans-serif;
                font-weight: 400;
                margin-bottom: 1em;
            }
            p {
                font-family: 'Geologica', sans-serif;
                margin-bottom: 4rem;
            }
        }

        img {
            width: 50vw;
            height: 100vh;
            object-fit: cover;
        }
    }

    .services-wrapper-2 {
        padding: 5vw;

        h1 {
            margin-bottom: 2rem;
        }

        .service-box-wrapper {
            display: flex;
            flex-direction: row;
            gap: 2rem;
            
            justify-content: center;
            .service {
                width: 15vw;
                border-radius: 1rem;
                h1 {
                    font-weight: 500;
                    font-size: 1rem;
                }

                img {
                    border-radius: 1rem;
                    width: 15vw;
                    height: 20vw;
                    object-fit: cover;
                    margin-bottom: 1rem;
                }
            }
        }

        .buttoncta3 {
            margin: 0 auto;
        }
    }

    @media only screen and (max-width: 1100px)  {
    .gen-wrapper {
        .header-wrapper {
            display: block;
            height: auto;

            .header-text {
                padding-top: 3em;
                padding-bottom: 3em;
            }

            img {
                width: 100vw;
                height: 50%;
            }
        }
        .services-wrapper-2 {
            padding: 3em 0;
            .service-box-wrapper {
                flex-direction: column;
                box-sizing: border-box;
                align-items: center;
                text-align: center;
                .service {
                    width: 70%;
                    img {
                        width: 100%;
                        height: 10em;
                    }
                }
            }
        }
    } 
}
</style>

<div class="gen-wrapper">
    <div class="header-wrapper">
        <div class="header-text">
            <h1 class="content-page-title">Digitalising Education. One School At A Time.</h1>
            <h2>Integrating traditional learning with modern technology.</h2>
            <p>We ensure the schools we support are equipped with proper infrastructure and network. technical support, to administration system. From SMS, LMS, OMS, to LTSS, all in one place – <i>no integration needed & no extra subscriptions.</i></p>
        
            <div class="buttoncta3">
                <a href="#services">Learn more about what we can do</a>
            </div>
        </div>
        <img src="/images/services/edtech/u-1.jpg" alt="Students using computers in school">
    </div>
    
    <div class="services-wrapper-2" id="services">
        <h1 class="mid par-title" style="--color: #fff6b3;">We provide</h1>
        
        <div class="service-box-wrapper">
            <div class="service">
                <img src="/images/services/edtech/u-1.jpg" alt="service 1">
                <h1>Classroom and office equipment, hardware & software</h1>
            </div>
            <div class="service">
                <img src="/images/services/edtech/u-2.jpg" alt="service 1">
                <h1>LAN/WAN installation and network connectivity</h1>
            </div>
            <div class="service">
                <img src="/images/services/edtech/u-3.jpg" alt="service 1">
                <h1>Site-level tech support and remote troubleshooting</h1>
            </div>
            <div class="service">
                <img src="/images/services/edtech/u-4.jpg" alt="service 1">
                <h1>Technology maintenance and security</h1>
            </div>
            <div class="service">
                <img src="/images/services/edtech/u-5.jpg" alt="service 1">
                <h1>Student information system management for attendance, results, and more</h1>
            </div>
        </div>

        <h1 class="mid par-title">Talk to us for more information</h1>

        <div class="buttoncta3">
            <a href="https://www.edess.asia">Digitalise My School</a>
        </div>
    </div>
</div>
