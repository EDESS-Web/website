<script lang="ts">
    /** @type {import('./$types').PageData} */

    import { CommandLine, Icon } from "svelte-hero-icons";

    export let data:any;
</script>

<svelte:head>
    <title>Blog - EDESS</title>
</svelte:head>

<style lang="scss">
    .pg-container {
        display: grid;
        grid-template-columns: 1fr 5fr;
        padding: 0 10vw;
    }

    .big-card{
        .lg-title {
            font-family: 'Geologica', sans-serif;
            color: rgb(49, 49, 49);
            font-size: 5em;
            width: 30vw;
        }
        padding: 5vw 0;
    }

    .sp-ul {
        text-decoration: underline .2em #ff9c33;
        
    }

    .blog-title {
        font-family: 'Geologica', sans-serif;
        color: rgb(49, 49, 49);
        margin-bottom: 1em;
        text-decoration: underline .2em #ff9c33;
        transition: text-decoration .2s ease-in;
        &:hover {
            text-decoration: underline .5em #ff9c33;
            cursor: pointer;
        } 
    }
    .blog-previews {
        padding: 3vw 1vw;
    }

    .blog-card {
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 3vw;
        border-left: #ff9c33 1em solid;
        padding: 1em 0 1em 5em;
        margin-bottom: 2em;
        a {
            &:hover {
                color: #ff9c33;
            }
        }
    }

    .blog-date {
        color: #ff9c33;
        font-family: 'Geologica', sans-serif;
    }

    a {
        text-decoration: none;
    }

    @media only screen and (max-width: 1100px)  {
        .gen-wrapper {
            .pg-container {
                display: block;
                .big-card {
                    width: 100%;
                    img {
                        display: none;
                    }
                    h1 {
                        margin: 0;
                        width: 100%;
                        font-size: 2em;
                    }
                }

                .blog-previews {
                    .blog-card {
                        border-left: #ff9c33 .5em solid;

                        padding-left: 1em;
                        .preview-featured-img {
                            width: 5em;
                            height: 3em;
                        }
                        .par-content, .hoverable-link {
                            display: none;
                        }
                        .blog-title {
                            font-size: 1.2em;
                        }
                    }
                }
            }
        }
    }

</style>

<div class="gen-wrapper">
    <div class="pg-container">
        <div class="big-card">
            <img src="/icon.png" style="width: 3vw; height: auto;" alt="edess-logo">
            <h1 class="lg-title">Stay up to date with our <span class="sp-ul">blog</span></h1>
    
        </div>
        <div class="blog-previews">
            {#each data.res as post}
            <div class="blog-card">
                {#if post._embedded["wp:featuredmedia"] != null}
                    <img class="preview-featured-img" src="{post._embedded["wp:featuredmedia"][0].source_url}" alt="Featured">
                    {:else}
                    <div class="preview-featured-img"><Icon src="{CommandLine}"></Icon></div>
                {/if}
                
                <div>
                    <h4 class="blog-date">{@html new Date(post.date).toLocaleString('en-my',{day: 'numeric', month:'long', year:'numeric'})}</h4>
                    <a href="/blog/{post.slug}"><h1 class="blog-title sp-ul">{@html post.title.rendered}</h1></a>
                    <p class="par-content" style="font-size: 1.2em;">{@html post.excerpt.rendered}</p> <a href="/blog/{post.slug}" class="hoverable-link" style="--color: #f9dbbb;">Read More</a>
                </div>
            </div>
        {/each}
        </div>
    </div>
    
</div>