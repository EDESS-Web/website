/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    let posts = (await fetch('http://localhost:80/wordpress/wp-json/wp/v2/posts?_embed'));
    let res = await posts.json()
    return {
        res
    };
}