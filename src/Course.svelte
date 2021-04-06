<script lang="ts">
    import Tag from "./Tag.svelte";
    import { tagMap } from "./tags";
    import type { Course } from "./courses";
    export let course : Course;
</script>  

<style lang="scss">
	.card {
        width: 450px;
        height: max-content;
        
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
        margin-left: -1.5em;
    }
</style>

<div class="card">
    <h3>{course.name}</h3>
    {#if course.prereqs}
        <p><i>{course.prereqs}</i></p>
    {/if}
    <p><i>Counts for {course.countsFor}; {course.length} Credit</i></p>
    <hr>
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