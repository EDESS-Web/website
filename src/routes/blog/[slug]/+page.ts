/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params })  {
    let post = (await fetch(import.meta.env.VITE_API + 'posts?slug=' + params.slug + '&_embed'));
    let posts = (await fetch(import.meta.env.VITE_API + 'posts/?per_page=5'));

    let resPost = (await post.json())[0]; 
    let resPostsList = await posts.json();
    
    let author = (await fetch(import.meta.env.VITE_API + 'users/' + await resPost.author));
    let resAuthor = await author.json();

    return {
        resPost, 
        resPostsList,
        resAuthor
    };
}