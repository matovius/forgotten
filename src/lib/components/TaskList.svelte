<script lang="ts">
	import { tasks } from "$lib/scripts/stores.svelte";

  // TODO: Add a secondary confirmation dialog to handle misclicks and stuff like that
  function removeTask(index: number) {
    tasks.list.splice(index, 1);
  }

</script>

<ul class="task-list">
  {#each tasks.list as task, index}
    <li data-index={index}>
      <details>
        <summary>{task.name}</summary>

        <div class="deets">
          {#if task.description}
            <div class="description">
              <p>{task.description}</p>
            </div>
          {/if}

          <div class="date">
            <small>Created: <span>{task.creationDate}</span></small>
          </div>
  
          <div class="actions">
            <button class="btn" aria-label="Forget" style="--btn-pad-y: 10px;" onclick={() => { removeTask(index); }}>
              <span aria-hidden="true">Forget</span>
            </button>
          </div>
        </div>
      </details>
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

  details {
    --_rounding: 40px;
    width: 100%;
    border-radius: var(--_rounding);

    &:hover {
      background: var(--clr-white);
    }
    &[open] {
      background: var(--clr-white);
    }

    & > summary {
      width: 100%;
      padding: 20px;
      color: var(--clr-neutral-600);
      border-radius: var(--_rounding);
      border-bottom: 2px solid transparent;
      outline: 2px solid transparent;

      &:focus-visible {
        outline-color: var(--clr-black);
      }
    }
    &[open] > summary {
      color: var(--clr-neutral-950);
      border-color: var(--clr-neutral-200);
      border-radius: var(--_rounding) var(--_rounding) 0 0;
    }

    & > .deets {
      padding: 20px;
    }

    & .description {
      padding-bottom: 20px;
    }
    & .date {
      color: var(--clr-neutral-500);

      & span {
        color: var(--clr-neutral-800);
      }
    }

    & .actions {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-top: 20px;

      & > button.btn {
        color: var(--clr-neutral-200);
        background: var(--clr-neutral-800);

        &:is(:hover, :focus) {
          color: var(--clr-white);
          background: var(--clr-neutral-950);
        }
      }
    }
  }
</style>
