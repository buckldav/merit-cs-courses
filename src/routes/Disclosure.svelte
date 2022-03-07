<script lang="ts">
  import CourseDetail from "../disclosure/CourseDetail.svelte";
  import Why from "../disclosure/Why.svelte";
  import Grading from "../disclosure/Grading.svelte";
  import ComputerUse from "../disclosure/ComputerUse.svelte";
  import Signature from "../disclosure/Signature.svelte";
  import { fetchCourses } from "../api";
  import { onMount } from "svelte";

  let completer = [];
  let explorer_general = [];
  let explorer_specific = [];
  fetchCourses().then((courses) => {
    explorer_general = courses.filter(
      (val) => val.category === "Explorer General"
    );
    explorer_specific = courses.filter(
      (val) => val.category === "Explorer Specific"
    );
    completer = courses.filter((val) => val.category === "Completer");
  });

  let courseName = "";

  onMount(() => {
    // domain/path?name=exploring-computer-science
    courseName = window.location.hash.split("?")[1]?.split("name=")[1];
  });
</script>

<main role="main">
  <article>
    {#each explorer_general as c}
      {#if !courseName || c.slug === courseName}
        <section>
          <CourseDetail course={c} />
          <Why>
            <p>
              This course satisfies the semester (0.5) of Digital Studies to
              graduate. It also offers a broad experience and is recommended for
              those who want to try a lot of things or aren't excited about any
              one class in particular.
            </p>
          </Why>
          <Grading />
        </section>
        <section>
          <ComputerUse />
          <div class="print-only">
            <Signature />
          </div>
        </section>
      {/if}
    {/each}

    {#each explorer_specific as c}
      {#if !courseName || c.slug === courseName}
        <section>
          <CourseDetail course={c} />
          <Why>
            <p>
              This course is directed towards students who want to learn to
              build a specific type of project (i.e. a website, app, game, or
              program). Note that you also need a year (1.0) of CTE credits to
              graduate, and taking any CS courses in addition to a semester of
              Digital Studies can help get you there.
              {#if c.name.includes("Game Development")}
                <br /><em>{c.name} does not count for Digital Studies.</em>
              {/if}
            </p>
          </Why>
          <Grading />
        </section>
        <section>
          <ComputerUse />
          <div class="print-only">
            <Signature />
          </div>
        </section>
      {/if}
    {/each}

    {#each completer as c}
      {#if !courseName || c.slug === courseName}
        <section>
          <CourseDetail course={c} />
          <Why>
            <p>
              This course has prerequisites, but students who are ready to move
              quickly may join case-by-case. By the end of this course, students
              who put the work in will be prepared for CS jobs and higher
              education.
            </p>
          </Why>
          <Grading />
        </section>
        <section>
          <ComputerUse />
          <div class="print-only">
            <Signature />
          </div>
        </section>
      {/if}
    {/each}
    <iframe
      class="no-print"
      title="parent signature form"
      src="https://docs.google.com/forms/d/e/1FAIpQLSdFJWLeff61iO2b55nlB0iIMnrZKhAfq25leSiYKd_TRbtRug/viewform?embedded=true"
      width="100%"
      height="600"
      frameborder="0"
      marginheight="0"
      marginwidth="0">Loading…</iframe
    >
  </article>
</main>

<style lang="scss">
  main {
    padding: 8px;
  }

  .print-only {
    display: none;
  }

  @media print {
    .print-only {
      display: block;
    }

    .no-print {
      display: none;
    }

    article {
      font-size: 110% !important;
    }

    section {
      break-after: page;
    }
  }

  @media screen {
    main {
      max-width: 1200px;
      margin: 0 auto;
    }
  }
</style>
