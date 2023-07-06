<script lang="ts">
    /** @type {import('./$types').PageData} */

    export let data:any;
</script>

<svelte:head>
    <title>{data.resPost.title.rendered} - EDESS</title>
    <meta property="og:title" content="EDESS Blog - {data.resPost.title.rendered}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://my.site.com" />
    <meta property="og:description" content="{data.resPost.excerpt.rendered}" />
    <meta name="theme-color" content="#ff9c33">
</svelte:head>

<style lang="scss">
    .blog-title {
        font-family: 'Geologica', sans-serif;
        color: rgb(49, 49, 49);
        margin-bottom: .3em;
        // text-decoration: underline .2em #ff9c33;
    }
    .blog-previews {
        padding: 3vw 1vw;
    }

    .blog-card {
        border-left: #ff9c33 .5em solid;
        padding: 1em 0 1em 3em;
        margin-bottom: 2em;
        a {
            &:hover {
                color: #ff9c33;
            }
        }
        .blog-title-prev {
            font-family: 'Geologica', sans-serif;
            font-size: 1.3em;
            color: rgb(49, 49, 49);
            margin-bottom: 1em;
            text-decoration: underline .2em #ff9c33;
            transition: text-decoration .2s ease-in;
            &:hover {
                text-decoration: underline .5em #ff9c33;
                cursor: pointer;
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

    .pg-container {
        margin-top: 3vw;
        margin-bottom: 3vw;

        display: grid;
        grid-template-columns: 1fr 2fr;
        padding: 0 10vw;
        gap: 3vw;
    }

    .back {
        &:hover {
            color: #ff9c33;
        }
    }

</style>

<div class="pg-container">
    <div>
        <h4 class="blog-date" style="margin-bottom: 0.5em"><span style="color: black; font-weight: 400;">Published on</span> {@html new Date(data.resPost.date).toLocaleString('en-my',{day: 'numeric', month:'long', year:'numeric'})}</h4>
        <h1 class="blog-title sp-ul">{@html data.resPost.title.rendered}</h1>  
        <h4 class="blog-date"><span style="color: black; font-weight: 400;">by </span>{@html data.resAuthor.name}</h4>
        <div class="blog-previews">
            <h1 style="margin-bottom: 1em;">Up Next</h1>
            {#each data.resPostsList as post}
                {#if data.resPost.id != post.id}
                    <div class="blog-card">
                        <h4 class="blog-date">{@html new Date(post.date).toLocaleString('en-my',{day: 'numeric', month:'long', year:'numeric'})}</h4>
                        <a href="/blog/{post.slug}"><h1 class="blog-title-prev sp-ul">{@html post.title.rendered}</h1></a>
                    </div>
                {/if}
            {/each}
        </div>
    </div>  
    <div>
        {#if data.resPost._embedded["wp:featuredmedia"] != null}
            <img class="content-featured-img" src="{data.resPost._embedded["wp:featuredmedia"][0].source_url}" alt="Featured">
        {/if}
        <div class="par-content blog-content" style="font-size: 1.3em;">{@html data.resPost.content.rendered}</div>
    </div>
    
</div>
