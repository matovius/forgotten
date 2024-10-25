<script lang="ts">
  import "@fontsource-variable/jetbrains-mono";
  import "@fontsource-variable/martian-mono";
  import "../app.css";
</script>

<div class="app">
  <slot />
</div>

<style>
  .app {
    isolation: isolate;
  }
</style>
