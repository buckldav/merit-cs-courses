<script lang="ts">
  import { faBars, faPrint } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import Course from "../Course.svelte";
  import { completer, explorer_general, explorer_specific } from "../courses";
  import Pathways from "../Pathways.svelte";

  const mobileBkpt = 768;
  let menuOpen = false;

  function handleResize(e) {
    const article = document.querySelector("article"); //document.querySelectorAll("div.card");
    const max = 1400;
    const min = 1000;
    const minPct = 87.5; // Makes the min font 14px
    if (window.innerWidth <= mobileBkpt) {
      article.setAttribute("style", "font-size: 100%");
    } else if (window.innerWidth < max) {
      let fontSizePct =
        ((window.innerWidth - min) / (max - min)) * (100 - minPct) + minPct;
      fontSizePct = fontSizePct < minPct ? minPct : fontSizePct;
      article.setAttribute("style", "font-size: " + fontSizePct + "%");
    }

    if (menuOpen && window.innerWidth > mobileBkpt) {
      toggleMenu();
    }
  }

  function toggleMenu() {
    const nav = document.querySelector("header nav");
    const overlay = document.querySelector("#overlay");
    const html = document.querySelector("html");
    if (!menuOpen) {
      menuOpen = true;
      html.setAttribute("style", "scroll-behavior: unset");
      nav.setAttribute("style", "display: flex");
      overlay.setAttribute("style", "display: block; position: fixed");
    } else {
      menuOpen = false;
      html.removeAttribute("style");
      nav.removeAttribute("style");
      overlay.removeAttribute("style");
    }
  }

  function handleMenu(e) {
    if (window.innerWidth <= mobileBkpt) {
      toggleMenu();
    }
  }
</script>

<svelte:window on:resize={handleResize} on:load={handleResize} />

<header>
  <a class="menu" role="button" href="javascript:void()" on:click={handleMenu}
    ><Fa icon={faBars} /></a
  >
  <nav on:click={handleMenu}>
    <a href="#general">Explorer Courses - General</a>
    <a href="#specific">Explorer Courses - Specific</a>
    <a href="#completer">Completer Courses</a>
    <a href="#pathways">CTE Pathways</a>
  </nav>
</header>

<div id="overlay" on:click={handleMenu} aria-hidden="true" />
<div class="print-only" aria-hidden="true">
  <h1>Merit Preparatory Academy CS Courses</h1>
  <p>Questions? Email Mr. Buckley at david.buckley@meritacademy.org</p>
</div>

<div id="hero">
  <div class="row">
    <div>
      <h1>Merit Preparatory Academy CS Courses</h1>
      <p>For the year 2021-2022.</p>
      <p class="big">
        Unsure of what computer class to take?<br />
        Check out your options below.<br />
        Select a course to see its Disclosure Document.
      </p>
      <a class="btn primary" href="#general">Browse Courses</a>
      <a
        class="btn primary"
        role="button"
        href="javascript:window.print()"
        aria-label="print"><Fa icon={faPrint} /></a
      >
    </div>
    <img src="/packing.svg" width="500" alt="Getting Ready For School" />
  </div>
</div>

<main role="main">
  <article>
    <section>
      <a class="anchor" id="general" href="#general"
        >Explorer Courses - General</a
      >
      <h2>Explorer Courses - General</h2>
      <div class="row">
        <p>
          You need to take a semester (0.5) of Digital Studies to graduate, and
          our counselors recommend that you take care of this in 9th grade (but
          you can do it later). The courses below offer a broad experience and
          are recommended for those who want to try a lot of things or aren't
          excited about any one class in particular.
        </p>
      </div>
      <div class="row">
        {#each explorer_general as c}
          <Course course={c} />
        {/each}
      </div>
    </section>
    <section>
      <a class="anchor" id="specific" href="#specific"
        >Explorer Courses - Specific</a
      >
      <h2>Explorer Courses - Specific</h2>
      <div class="row">
        <p>
          These courses are directed towards students who want to learn to build
          a specific type of project (i.e. a website, app, game, or program).
          Note that you also need a year (1.0) of CTE credits to graduate, and
          taking any CS courses in addition to a semester of Digital Studies can
          help get you there.
          <br /><em>Game Development 1 does not count for Digital Studies.</em>
        </p>
      </div>
      <div class="row">
        {#each explorer_specific as c}
          <Course course={c} />
        {/each}
      </div>
    </section>
    <section>
      <a class="anchor" id="completer" href="#completer">Completer Courses</a>
      <h2>Completer Courses</h2>
      <div class="row">
        <p>
          These courses have prerequisites and dive deeper into programming and
          software development topics. By the end of these courses, students who
          put the work in will be prepared for CS jobs and higher education.
        </p>
      </div>
      <div class="row">
        {#each completer as c}
          <Course course={c} />
        {/each}
      </div>
    </section>
    <section>
      <a class="anchor" id="pathways" href="#pathways">CTE Pathways</a>
      <h2>CTE Pathways</h2>
      <Pathways />
    </section>
  </article>
</main>

<footer>
  <img src="/graduation.svg" width="400" alt="Graduation" />
  &copy;
  <a
    target="_blank"
    rel="noopenner noreferrer"
    href="https://davidjaybuckley.com/teacher">David Jay Buckley</a
  >
  2021. Made with
  <a target="_blank" rel="noopenner noreferrer" href="https://svelte.dev/"
    >Svelte</a
  >.<br />
  Questions? Email Mr. Buckley at
  <a href="mailto:david.buckley@meritacademy.org"
    >david.buckley@meritacademy.org</a
  >.
</footer>

<style lang="scss">
  main,
  header {
    padding: 8px;
  }

  main h2 {
    text-align: center;
  }

  header {
    min-width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
    background: #028090;
    color: white;

    nav {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    a {
      color: white;
      padding: 12px 16px;
      display: inline-block;

      &.menu {
        display: none;
      }
    }
  }

  footer {
    margin-top: 56px;
    padding: 16px 16px 32px;
    text-align: center;
    color: #999;

    a {
      color: inherit;
    }

    img {
      display: block;
      margin: 0 auto;
    }
  }

  .print-only {
    display: none;
  }

  #hero {
    margin-top: 52px;
    margin-bottom: -36px;
    padding: 24px;
    height: calc(70vh - 52px);
    background: white;
    clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 100%);

    .big {
      font-size: 1.25em;
    }

    a.btn {
      display: inline-block;
      padding: 9px 13px;
      border-width: 3px;
      border-radius: 4px;
      border-style: solid;
      color: white;
      outline: 0;
      &:hover {
        text-decoration: none;
        transition: ease 0.5s;
        border-style: outset;
      }
      &:active {
        border-style: inset;
      }
      &.primary {
        background: #028090;
        border-color: #028090;
      }
      // &.secondary {
      // 	background: #333;
      // 	border-color: #333;
      // }
      &:visited {
        color: white;
      }
    }
  }

  #overlay {
    display: none;
    top: 0;
    z-index: 5;
    background: #33333322;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    #hero {
      height: 90vh !important;
      clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%) !important;
    }

    header {
      nav {
        display: none;
        flex-direction: column;
      }
      a.menu {
        display: block;
        float: right;
      }
    }
  }

  @media print {
    #hero,
    header,
    footer {
      display: none;
    }

    .print-only {
      display: block;
      text-align: center;
      margin: 0;
      line-height: 0.5;
    }

    article {
      font-size: 95% !important;
    }

    h2 {
      margin: 0.5em 0;
    }

    #completer {
      page-break-before: always;
    }
  }
</style>
