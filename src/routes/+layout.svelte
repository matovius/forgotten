<script lang="ts">
  import "@fontsource-variable/jetbrains-mono";
  import "@fontsource-variable/martian-mono";
  import "../app.css";
	import { browser } from "$app/environment";
	import { tasks } from "$lib/scripts/stores.svelte";

  $effect(() => {
    if (browser) {
      localStorage.setItem("current-tasks", JSON.stringify(tasks.list));
    }
  });
</script>

<div class="app">
  <slot />
</div>

<style>
  .app {
    isolation: isolate;
  }
</style>
