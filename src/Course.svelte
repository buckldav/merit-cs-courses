<script lang="ts">
  import Tag from "./Tag.svelte";
  import { tagMap } from "./tags";
  import type { Course } from "./courses";
  export let course: Course;

  function onCardClick() {
    window.location.href = "/#/disclosure?name=" + course.slug();
    window.scrollTo(0, 0);
  }
</script>

<div class="card" on:click={onCardClick}>
  <h3>{course.name}</h3>
  {#if course.prereqs}
    <p><i>{course.prereqs}</i></p>
  {/if}
  <p><i>Counts for {course.countsFor}; {course.length} Credit</i></p>
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
</div>

<style lang="scss">
  .card {
    width: 28em;
    height: max-content;
    cursor: pointer;

    h3 {
      margin: 0;
      line-height: 1;
    }
  }

  .tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .semester {
    margin-left: -1.625em;
  }
</style>
