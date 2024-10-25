<script lang="ts">
	import Header from "$lib/components/Header.svelte";
  import TaskList from "$lib/components/TaskList.svelte";

</script>

<svelte:head>
  <title>Forgotten - Don't forget your tasks</title>
</svelte:head>

<Header />

<main>
  <div class="container">
    <TaskList />
  </div>
</main>

<style>
  main {
    padding-inline: 20px;

    & > div.container {
      padding-block: 20px;
    }
  }
</style>
