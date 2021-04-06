<script lang="ts">
    import Tag from "./Tag.svelte";
    import { tagMap } from "./tags";
    import type { Course } from "./courses";
    export let course : Course;
</script>  

<style lang="scss">
	.card {
        background-color: #fff;
        border-radius: 4px;
        max-width: 500px;
        margin: 24px;
        // height: 100px;
        position: relative;
        padding: 34px;
        color: #444;
        &:before {
            content: '';
            display: block;
            position: absolute;
            background-color: #ccc;
            left: 20px;
            right: 20px;
            bottom: 0;
            top: 50%;
            z-index: -1;
            box-shadow: 0 0 40px lighten(#000, 60%);
            transition: box-shadow .2s ease-in-out;
        }
        &.level-3 {
            &:hover {
                &:before {
                    box-shadow: 0 0 80px lighten(#000, 60%);
                }
            }
        }
        h5 {
            font-weight: 300;
            font-size: 30px;
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

<div class="card level-3">
    <h5>{course.name}</h5>
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