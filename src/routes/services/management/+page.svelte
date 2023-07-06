<svelte:head>
    <title>School Management</title>
</svelte:head>

<style lang="scss">
    .par-wrapper {
        background-color: #fffdba;
        padding: 4em 10vw;
        .par-w-img {
            margin-top: 3em;
            display: flex;
            flex-direction: row;
            gap: 2em;
            .par-content {
                p {
                    font-size: .9em;
                    text-indent: 2em;
                }
            }
            img {
                width: 60%;
                height: auto;
                object-fit: cover;
                object-position: 60% 0;
            }
        }
    }

    .service-box-wrapper {
        gap: 5vw;
        .service {
            width: 20vw;
            background-color: white;
            box-shadow: -.5em .5em #ffd09a;

            .service-contents {
                img {
                    width: 20vw;
                }
            }
        }
    }

    // .courses {
    //     background-color: #fffdba;
    // }
</style>

<div class="par-wrapper">
    <h1 class="content-page-title par-title" style="--color: #ff9a26">Helping Schools To Manage And Operate</h1>
    <div class="par-w-img">
        <div class="par-content">
            <p>EDESS was initiated with the aim to assist schools that desire a high-quality education for their students. Schools need a good framework and support for their daily management and operations to be effective and efficient. Our experience and expertise empower schools to focus on their main goal: to have a conducive learning environment, where children thrive and be successful.</p>
            <br>
            <p>EDESS offers school management and full school operation services for both government and private schools. We also provide hands-on support with all aspects of school operations. Our comprehensive services allow us to develop and implement customised individual strategic plan for each school we manage.</p>
            <br>
            <p>We handle every aspect from facilities and renovation, financial considerations, board governance, marketing and public relations and human resources to curriculum development, enrolment, assessment, and professional development. At EDESS, our ultimate goal and the fundamental for everything we do is towards endless learning and teaching.</p>
        </div>
        <img src="/images/services/management/u-1.jpg" alt="s 1" loading="lazy">
    </div>
</div>

<div class="courses services-wrapper">
    <h1 class="par-title mid" style="--color: #ff9a26; margin-bottom: 1.5em">What We Can Help You With</h1>

    <div class="service-box-wrapper">
        <div class="service">
            <div class="service-contents">
                <img src="/images/services/management/u-1.jpg" alt="s 1" loading="lazy">
                <h1>Full school management system & school operation services</h1>        
            </div>
        </div>
        <div class="service">
            <div class="service-contents">
                <img src="/images/services/management/u-2.jpg" alt="s 2" loading="lazy">
                <h1>Full support on school operations</h1>        
            </div>
        </div>
    </div>

    <h1 class="mid par-title">Learn more on how we can cooperate</h1>

    <div class="buttoncta3">
        <a href="https://www.edess.asia">Manage My School</a>
    </div>
</div>