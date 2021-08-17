<script lang="ts">
  import { faBars, faPrint } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import CourseDetail from "../disclosure/CourseDetail.svelte";
  import { completer, explorer_general, explorer_specific } from "../courses";
  import Why from "../disclosure/Why.svelte";
  import Pathways from "../Pathways.svelte";
  import Grading from "../disclosure/Grading.svelte";
  import ComputerUse from "../disclosure/ComputerUse.svelte";
  import Signature from "../disclosure/Signature.svelte";

  const courseName = window.location.hash.split("?")[1].split("name=")[1];
</script>

<main role="main">
  <article>
    {#each explorer_general as c}
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
    {/each}

    {#each explorer_specific as c}
      <section>
        <CourseDetail course={c} />
        <Why>
          <p>
            This course is directed towards students who want to learn to build
            a specific type of project (i.e. a website, app, game, or program).
            Note that you also need a year (1.0) of CTE credits to graduate, and
            taking any CS courses in addition to a semester of Digital Studies
            can help get you there.
            {#if c.name === "Game Development 1"}
              <br /><em
                >Game Development 1 does not count for Digital Studies.</em
              >
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
    {/each}

    {#each completer as c}
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
    {/each}
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
      // text-align: center;
      // margin: 0;
      // // line-height: 0.5;
    }

    article {
      font-size: 110% !important;
    }

    section {
      break-after: page;
    }
  }
</style>
