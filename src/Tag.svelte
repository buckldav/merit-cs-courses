<script lang="ts">
  import * as fab from "@fortawesome/free-brands-svg-icons";
  import Fa from "svelte-fa";
  import pSBC from "shade-blend-color";
  import type { TagType } from "./tags";

  export let tag: TagType;

  let colorDark = pSBC(-0.1, tag.color);
</script>

<span class="tag" style="background: {colorDark}; border-color: {tag.color}">
  <span class="tag-icon" style="background: {tag.color}">
    <Fa icon={fab[tag.fa_icon_name]} />
  </span>
  <span class="tag-content">{tag.content}</span>
</span>

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

  @media print {
    .tag {
      color: inherit;
      border: 1px solid #999 !important;
      padding: 2px;
    }
  }
</style>
