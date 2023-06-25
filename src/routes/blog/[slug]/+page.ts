/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params })  {
    let post = (await fetch('http://localhost:80/wordpress/wp-json/wp/v2/posts?slug=' + params.slug + '&_embed'));
    let posts = (await fetch('http://localhost:80/wordpress/wp-json/wp/v2/posts/?per_page=5'));

    let resPost = (await post.json())[0]; 
    let resPostsList = await posts.json();
    
    let author = (await fetch('http://localhost:80/wordpress/wp-json/wp/v2/users/' + await resPost.author));
    let resAuthor = await author.json();

    return {
        resPost, 
        resPostsList,
        resAuthor
    };
}