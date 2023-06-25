<svelte:head>
    <title>Contact Us</title>
</svelte:head>

<script>
    import Icon from "@iconify/svelte";

</script>
<style lang="scss">
    .content-wrapper {
        padding: 3em 5vw;
        h1 {
            margin-bottom: .3em;
        }
        h2 {
            font-family: 'Geologica', sans-serif;
            font-weight: 400;
            margin-bottom: 1em;
        }
        .contact-method-wrapper {
            display: flex;
            flex-direction: row;
            gap: 5vw;
            .hq-location-wrapper {
                iframe {
                    width: 40vw; 
                    height: 25vw;
                }
            }
        }
    }

    .cf-label {
        font-family: 'Geologica', sans-serif;
        font-weight: 400;
        margin-bottom: 1em;
    }
    .cf-input {
        padding: .5em;
        width: 40vw;
        margin-bottom: 1em;
        box-sizing:border-box;
        border: 2px rgb(105, 105, 105) solid;
        border-radius: .5em;
    }

    .cf-input, option {
        font-family: 'Geologica', sans-serif;
        font-weight: 400;
        font-size: 1em;
        margin-bottom: 1em;
    }

    .cf-large {
        height: 18em;
        resize: none;
    }

    .icon-action {
        display: flex;
        flex-direction: row;
        gap: 1em;
        align-items: flex-start;
    }
</style>

<div class="content-wrapper">
    <h1 class="par-title" style="--color: #ff9a26;">Reach out to us!</h1>
    <h2>Got any questions you want to ask? Let us know!</h2>
    <div class="contact-method-wrapper">
        <div class="mail-form">
            <div class="icon-action">
                <Icon icon="material-symbols:mail-outline-sharp" width="5em" height="fit-content"/>
                <h1>Drop us an email or write down below and we'll be in touch.</h1>
            </div>

            <form method="POST">
                <label class="cf-label" for="subject">I'd like to enquire about...</label><br>
                <select class="cf-input" name="subject" id="subject">
                    <option value="Albayen">Albayen</option>
                    <option value="MindLoops">MindLoops</option>
                    <option value="WhizzyKids">WhizzyKids</option>
                    <option value="Education Consultation Services">Education Consultation Services</option>
                    <option value="School Management Operation">School Management Operation</option>
                    <option value="Education Technologies">Education Technologies</option>
                    <option value="Curriculum Development">Curriculum Development</option>
                    <option value="Teacher's Development">Teacher's Development</option>
                </select><br>
                <label class="cf-label" for="email">Email</label><br>
                <input class="cf-input" type="email" name="email" id="email" required><br>
                <label class="cf-label" for="fullname">Name</label><br>
                <input class="cf-input" name="fullname" id="fullname" required><br>
                <label class="cf-label" for="contactno">Phone No.</label><br>
                <input class="cf-input" name="contactno" id="contactno" required><br>
                <label class="cf-label" for="message">Your Message</label><br>
                <textarea class="cf-input cf-large" name="message" id="message" required></textarea><br>
                <input class="buttoncta1" type="submit" value="Send Message">
            </form>
        </div>
        <div class="hq-location-wrapper">
            <div class="icon-action">
                <Icon icon="material-symbols:pin-drop-outline" width="5em" height="fit-content"/>
                <h1>Or visit us at our company headquarters in Skudai, Johor</h1>
            </div>
            
            <iframe title="EDESS Office" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15953.40606358897!2d103.6262004!3d1.5536761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da779a37a1f19f%3A0x4b3d3df442e025d3!2sEDESS%20Education%20Consultant!5e0!3m2!1sen!2smy!4v1687396657657!5m2!1sen!2smy" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</div>