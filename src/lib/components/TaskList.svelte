<script lang="ts">
	import { tasks } from "$lib/scripts/stores.svelte";

</script>

<ul class="task-list">
  {#each tasks.list as task}
    <div class="task">
      <p>{task.name}</p>
    </div>
  {/each}
</ul>