<script lang="ts">
	import { tasks } from "$lib/scripts/stores.svelte";
	import { PlusIcon } from "lucide-svelte";

</script>

<header class="header">
  <div class="container">
    <div class="intro">
      <h1>Hello there!</h1>
      <p>You have {tasks.list.length || 0} tasks to forget</p>
    </div>

    <div class="cta">
      <button class="btn" aria-label="Add a new task">
        <PlusIcon aria-hidden="true" />
        <span aria-hidden="true">Add a new task</span>
      </button>
    </div>
  </div>
</header>


<style>
  header {
    width: 100%;
    padding-inline: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div.container {
      width: 100%;
      max-width: 600px;
      padding-block: 40px 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

  .intro {
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > h1 {
      font-size: 20px;
      font-weight: 800;
      line-height: 1;
    }
    
    & > p {
      color: var(--clr-neutral-500);
    }
  }

  .cta {
    width: 100%;

    & > button.btn {
      width: 100%;
      color: var(--clr-neutral-200);
      background: var(--clr-neutral-800);
      justify-content: flex-start;

      &:is(:hover, :focus) {
        color: var(--clr-white);
        background: var(--clr-neutral-950);
      }
    }
  }
</style>

