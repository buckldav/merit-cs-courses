<!-- App.svelte -->
<script>
  import Router from "svelte-spa-router";
  import Home from "./routes/Home.svelte";
  import Disclosure from "./routes/Disclosure.svelte";

  const routes = {
    "/": Home,

    // Don't forget hash based routing with svelte spa
    // http://localhost:5000/#/disclosure
    // https://github.com/ItalyPaleAle/svelte-spa-router#hash-based-routing
    "/disclosure": Disclosure,

    // // Catch-all
    // // This is optional, but if present it must be the last
    // '*': NotFound,
  };
</script>

<Router {routes} />
