<script lang="ts">
    // import { BuildingLibrary, BuildingOffice, CurrencyDollar, Icon, ServerStack } from "svelte-hero-icons";
    import Icon from '@iconify/svelte';


</script>

<svelte:head>
    <title>School Consultation</title>
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

    .par-wrap {
        padding: 7vw 10vw 0 10vw;
    }

    .u-ic {
        margin-top: 2em;
    }
</style>

<div class="header-wrapper">
    <div class="header-text">
        <h1>Our Consultation Service</h1>
        <h2>We help education institutions to improve their enrollment, improve school performance, and achieving academic excellence. Let us strategise your school & education planning.</h2>
        
        <div class="buttoncta3">
            <a href="#services">Learn more about what we can do</a>
        </div>
    </div>
    <img src="/images/services/consultation/u-1.jpg" alt="Students using computers in school">
</div>

<div class="par-wrap">
    <h1 class="par-title" style="--color: #fff6b3;">Why Choose Us?</h1>
    <p class="par-content" style="text-indent: 4em">If you find that your school is not performing, having low annual enrolment or you have problems managing your school, you can take steps to make positive, sustainable change to improve it. EDESS is here to provide hands-on, fully integrated school turnaround services, including a strategic plan customised to each school’s particular needs.</p>
        <br>
    <p class="par-content" style="text-indent: 4em">We have the experience and expertise to partner with you to support you in strengthening your school. We can expand your teachers’ capabilities to meet the needs of all students, accelerating academic growth and closing achievement gaps. Your school staff will acquire skills and experience to become turnaround experts themselves.</p>
        <br>
    <p class="par-content" style="text-indent: 4em">With our wealth of experience, we are ready to identify a school’s weaknesses and then develop a detailed and customised action plan to address each area of need.</p>
</div>

<div class="services-wrapper" id="services">
    <h1 class="mid par-title" style="--color: #fff6b3;">We provide</h1>
    
    <div class="service-box-wrapper">
        <div class="service">
            <div class="service-contents">
                <img src="/images/services/consultation/u-1.jpg" alt="service 1" loading="lazy">
                <h1>Core curriculum design, mapping and delivery with the objective of closing achievement gaps</h1>        
            </div>
        </div>
        <div class="service">
            <div class="service-contents">
                <img src="/images/services/consultation/u-2.jpg" alt="service 1" loading="lazy">
                <h1>Effective learning strategies</h1>        
            </div>
        </div>
        <div class="service">
            <div class="service-contents">
                <img src="/images/services/consultation/u-3.jpg" alt="service 1" loading="lazy">
                <h1>e-Learning</h1>        
            </div>
        </div>
        <div class="service">
            <div class="service-contents">
                <img src="/images/services/consultation/u-4.jpg" alt="service 1" loading="lazy">
                <h1>Alignment to Ministry of Education Standards</h1>        
            </div>
        </div>
        <div class="service">
            <div class="service-contents">
                <img src="/images/services/consultation/u-5.jpg" alt="service 1" loading="lazy">
                <h1>Varied instructional approaches</h1>        
            </div>
        </div>
        <div class="service">
            <div class="service-contents">
                <img src="/images/services/consultation/u-6.jpg" alt="service 1" loading="lazy">
                <h1>Integrating technology for instruction and assessment</h1>        
            </div>
        </div>
        <div class="service">
            <div class="service-contents">
                <img src="/images/services/consultation/u-7.jpg" alt="service 1" loading="lazy">
                <h1>Personalized Student Achievement Plans</h1>        
            </div>
        </div>
        <div class="service">
            <div class="service-contents">
                <img src="/images/services/consultation/u-8.jpg" alt="service 1" loading="lazy">
                <h1>Assessments for instruction</h1>        
            </div>
        </div>
        <div class="service">
            <div class="service-contents">
                <img src="/images/services/consultation/u-9.jpg" alt="service 1" loading="lazy">
                <h1>After-school programming and tutoring</h1>        
            </div>
        </div>
    </div>

    <h1 class="mid par-title" style="--color: #fff6b3;">Professional Development Programs</h1>
    
    <div class="service-box-wrapper">
        <div class="service">
            <div class="service-contents">
                <img src="/images/services/consultation/upd-1.jpg" alt="service 1" loading="lazy">
                <h1>Leadership training and development</h1>        
            </div>
        </div>
        <div class="service">
            <div class="service-contents">
                <img src="/images/services/consultation/upd-2.jpg" alt="service 1" loading="lazy">
                <h1>Targeted professional development for principals</h1>        
            </div>
        </div>
        <div class="service">
            <div class="service-contents">
                <img src="/images/services/consultation/upd-3.jpg" alt="service 1" loading="lazy">
                <h1>Customized teacher professional development, including capacity building</h1>        
            </div>
        </div>
        <div class="service">
            <div class="service-contents">
                <img src="/images/services/consultation/upd-4.jpg" alt="service 1" loading="lazy">
                <h1>International recruiting of turnaround experts</h1>        
            </div>
        </div>
    </div>

    <h1 class="mid par-title" style="--color: #fff6b3;">Professional Development Programs</h1>

    <div class="service-box-wrapper">
        <div class="service">
            <div class="service-contents c-mid">
                <Icon icon="teenyicons:school-outline" width="2em" height="2em" class="icon-usp-1"/>
                <h1 class="u-ic mid">School planning</h1>
            </div>
        </div>
        <div class="service">
            <div class="service-contents c-mid">
                <Icon icon="ph:books" width="2em" height="2em" class="icon-usp-1"/>
                <h1 class="u-ic mid">Facilities</h1>
            </div>
        </div>
        <div class="service">
            <div class="service-contents c-mid">
                <Icon icon="mdi:finance" width="2em" height="2em" class="icon-usp-1"/>
                <h1 class="u-ic mid">Financial management</h1>
            </div>
        </div>
        <div class="service">
            <div class="service-contents c-mid">
                <Icon icon="mdi:server" width="2em" height="2em" class="icon-usp-1"/>
                <h1 class="u-ic mid">Data analysis and support</h1>
            </div>
        </div>
    </div>
    
    <h1 class="mid par-title">Improve your school today.</h1>

    <div class="buttoncta3">
        <a href="https://www.edess.asia">I want to speak with your Education Strategist</a>
    </div>
</div>