<script lang="ts">
	import { tasks } from "$lib/scripts/stores.svelte";

</script>

<ul class="task-list">
  {#each tasks.list as task, index}
    <li data-index={index}>
      <button class="btn">
        <p>{task.name}</p>
      </button>
    </li>
  {/each}
</ul>

<style>
  ul.task-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    & > li {
      width: 100%;
      max-width: 600px;
    }
  }

  button.btn {
    width: 100%;
    color: var(--clr-neutral-600);
    justify-content: flex-start;
    
    &:is(:hover, :focus) {
      color: var(--clr-neutral-950);
      background: var(--clr-white);
    }
  }
</style>
