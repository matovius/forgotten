<script lang="ts">
	import { tasks } from "$lib/scripts/stores.svelte";

</script>

<ul class="task-list">
  {#each tasks.list as task}
    <li>
      <button class="btn">
        <p>{task.name}</p>
      </button>
    </li>
  {/each}
</ul>