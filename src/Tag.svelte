<script lang="ts">
    import Fa from 'svelte-fa';
    import pSBC from 'shade-blend-color';
    import type { TagType } from './tags';
    export let tag: TagType;
    let colorDark = pSBC(-0.1, tag.color);
</script>

<style lang="scss">
    .tag {
        color: white;
        margin: 4px;
        position: relative;
        border-radius: 4px;
        border-width: 3px;
        border-style: outset;
        
        .tag-icon {  
            margin-left: -0.5px;
            margin-top: -0.5px;
            padding: 1px 6px;
            border: none;
        }
        .tag-content {
            background: inherit;
            border-top-right-radius: inherit;
            border-bottom-right-radius: inherit;
            padding: 0 6px;
        }
    }
</style>

<span class="tag" style="background: {colorDark}; border-color: {tag.color}">
    <span class="tag-icon" style="background: {tag.color}"><Fa icon={tag.icon} /></span><span class="tag-content">{tag.content}</span>
</span>