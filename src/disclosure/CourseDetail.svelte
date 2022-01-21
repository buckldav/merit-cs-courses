<script lang="ts">
  import { faPrint } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import Tag from "../Tag.svelte";
  import type { Course } from "../courses";
  export let course: Course;
</script>

<div>
  <header class="row">
    <h1>{course.name}</h1>
    <a
      class="btn primary"
      role="button"
      href="javascript:window.print()"
      aria-label="print"
    >
      <Fa icon={faPrint} />
    </a>
  </header>
  {#if course.prereqs}
    <p><i>{course.prereqs}</i></p>
  {/if}
  <p><i>Counts for {course.countsFor}; {course.length} Credit</i></p>
  <div class="row">
    <span>Mr. David Buckley</span>
    <span>Room 227</span>
    <span
      >Email: <a href="mailto:david.buckley@meritacademy.org"
        >david.buckley@meritacademy.org</a
      ></span
    >
    <span>Phone: <a href="tel:8014917600227">801-491-7600 ext. 227</a></span>
  </div>
  <hr />
  <ul>
    {#each course.description as ds}
      {#if ds.includes("Semester")}
        <p class="semester"><u>{ds}</u></p>
      {:else}
        <li>{ds}</li>
      {/if}
    {/each}
  </ul>
  <div class="tags">
    {#each course.tags as tag}
      <Tag {tag} />
    {/each}
  </div>
  {#if course.units.length > 0}
    <h3>Units</h3>
    <ul>
      {#each course.units as s}
        <li>{s}</li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="scss">
  .tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .semester {
    margin-left: -1.625em;
  }

  .row {
    column-gap: 24px;
    justify-content: flex-start;
    align-items: center;
  }

  a.btn {
    display: inline-block;
    padding: 9px 13px;
    height: 48px;
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

  @media print {
    a.btn {
      display: none;
    }
  }
</style>
