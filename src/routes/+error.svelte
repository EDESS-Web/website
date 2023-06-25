<script lang="ts">
    import { ExclamationTriangle, Icon } from "svelte-hero-icons";

</script>
<style lang="scss">
    .onerror {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff6b3;
        h1 {
            font-size: 5em;
        }
        h2 {
            font-family: 'Montserrat', sans-serif;
        }
    }
</style>

<div class="onerror">
    <Icon src="{ExclamationTriangle}" width="100px" height="100px"></Icon>
    <h1>404</h1>
    <h2>The page you requested was not found</h2>
</div>