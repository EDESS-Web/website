/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    let posts = (await fetch(import.meta.env.VITE_API + 'posts?_embed'));
    let res = await posts.json()
    return {
        res
    };
}