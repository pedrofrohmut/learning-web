<script>
  import { fade } from "svelte/transition"

  const { removeTask, filteredTasks } = $props()
</script>

<div class="tasks-container">
  {#each filteredTasks as task}
    <article class={task.done ? "done" : ""} transition:fade>
      <label>
        <input type="checkbox" bind:checked={task.done} />
        <span>{task.title}</span>
      </label>
      <button class="outline" onclick={() => removeTask(task.id)}>Remove</button>
    </article>
  {/each}
</div>

<style>
  .tasks-container {
    margin-top: 1.5rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .done span {
    color: #666;
    text-decoration: line-through;
  }

  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    font-size: 15px;
    padding: 6px 12px;
  }
</style>
