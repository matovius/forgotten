<script lang="ts">
	import { tasks } from "$lib/scripts/stores.svelte";
	import type { Task } from "$lib/scripts/types";
	import { PlusIcon } from "lucide-svelte";
	import { quadOut } from "svelte/easing";
	import { fade, fly } from "svelte/transition";

  let AddNewTaskDialog: HTMLDialogElement;
  let isAddNewTaskDialogOpen: boolean = $state(false);
  let newTaskData: Task = $state({
    name: "",
    description: "",
    creation: 0,
    creationDate: ""
  });

  function addNewTask() {
    if (newTaskData.name !== "") {
      let now = Date.now();
  
      newTaskData.creation = now;
      newTaskData.creationDate = new Date(now).toLocaleDateString();

      tasks.list.push(newTaskData);

      newTaskData = {
        name: "",
        description: "",
        creation: 0,
        creationDate: ""
      }

      isAddNewTaskDialogOpen = false;
    }

    return;
  }

  function cancelNewTask() {
    newTaskData = {
      name: "",
      description: "",
      creation: 0,
      creationDate: ""
    }
    
    isAddNewTaskDialogOpen = false;
  }

  $effect(() => {
    if (isAddNewTaskDialogOpen) {
      AddNewTaskDialog.showModal();
    } else {
      setTimeout(() => {
        AddNewTaskDialog.close();
      }, 200);
    }
  });
</script>

<header class="header">
  <div class="container">
    <div class="intro">
      <h1>Hello there!</h1>
      <p>You have {tasks.list.length || 0} tasks to forget</p>
    </div>

    <div class="cta">
      <button class="btn" aria-label="Add a new task" onclick={() => { isAddNewTaskDialogOpen = true; } }>
        <PlusIcon aria-hidden="true" />
        <span aria-hidden="true">Add a new task</span>
      </button>
    </div>
  </div>
</header>

<dialog bind:this={AddNewTaskDialog}>
  {#if isAddNewTaskDialogOpen}
    <div class="modal">
      <div class="backdrop" transition:fade={{ duration: 200, easing: quadOut }}></div>
      <div class="surface" transition:fly={{ duration: 200, easing: quadOut, x: 0, y: 20, opacity: 0 }}>
        <label for="task-name">
          <p>Task</p>
          <input type="text" name="name" id="task-name"
            bind:value={newTaskData.name} placeholder="Enter your task..." />
        </label>
        <label for="task-description">
          <p>Description (optional)</p>
          <textarea name="description" id="task-description"
            bind:value={newTaskData.description} placeholder="Give your task a description..."></textarea>
        </label>
        <div class="actions">
          <button class="btn" aria-label="Cancel" onclick={cancelNewTask}>
            <span aria-hidden="true">Cancel</span>
          </button>
          <button class="btn" aria-label="Add" onclick={addNewTask} disabled={newTaskData.name === ""}>
            <span aria-hidden="true">Add</span>
          </button>
        </div>
      </div>
    </div>
  {/if}
</dialog>


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

  dialog {
    width: 0;
    height: 0;
    background: transparent;
    border: none;
    margin: 0;
    overflow: visible;

    &::backdrop {
      background: transparent;
      opacity: 0;
    }
  }
  
  dialog > div.modal {
    isolation: isolate;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    inset: 0;
    background: transparent;

    & > .surface {
      width: 100%;
      max-width: 600px;
      height: 50lvh;
      padding: 20px;
      border-radius: 40px;
      background: var(--clr-white);
      margin-inline: 20px;
      position: absolute;
      top: 20px;
    }

    & > .backdrop {
      background: color-mix(in srgb, var(--clr-black), transparent 50%);
      position: absolute;
      inset: 0;
    }
  }
</style>

