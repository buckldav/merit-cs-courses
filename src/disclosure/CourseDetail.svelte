<script lang="ts">
  import Tag from "../Tag.svelte";
  import { tagMap } from "../tags";
  import type { Course } from "../courses";
  export let course: Course;
</script>

<div>
  <h1>{course.name}</h1>
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
      <Tag tag={tagMap[tag]} />
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
  }
</style>
