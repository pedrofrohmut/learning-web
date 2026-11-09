<script>
  import TasksForm from "./components/tasks-form.svelte"
  import TasksList from "./components/tasks-list.svelte"

  const  message = "Tasks Form"

  let tasks = $state([])
  let filter = $state("All")
  const doneCount = $derived(tasks.reduce((acc, curr) => curr.done ? acc + 1 : acc, 0))
  const filteredTasks = $derived.by(() => {
    switch (filter) {
      case "Todo":
        return tasks.filter(task => !task.done)
      case "Done":
        return tasks.filter(task => task.done)
      default:
        return tasks
    }
  })

  const addTask = (taskText) => {
    const newTask = {
      id: crypto.randomUUID(),
      title: taskText,
      done: false,
    }
    tasks.push(newTask)
  }

  const removeTask = (taskId) => {
    tasks = tasks.filter(task => task.id !== taskId)
  }
</script>

<!-- <pre>{JSON.stringify(tasks, null, 4)}</pre> -->
<!-- <div>Filter: {filter}</div> -->

{#snippet filterButton(filterType)}
  <button
    class="secondary"
    class:contrast={filter === filterType}
    onclick={() => filter = filterType}
  >
    {filterType}
  </button>
{/snippet}

<main>
  <h1>{message}</h1>

  <TasksForm {addTask}  />

  <div class="completed">
    {#if tasks.length > 0}
      {doneCount} / {tasks.length} tasks completed
    {:else}
      Add a task to get started
    {/if}
  </div>

  {#if tasks.length > 0}
    <div class="filters">
      {@render filterButton("All")}
      {@render filterButton("Todo")}
      {@render filterButton("Done")}
    </div>
  {/if}

  <TasksList {filteredTasks} {removeTask} />
</main>

<style>
  main {
    margin: 1rem auto;
    max-width: 800px;
  }

  .completed {
    margin: 0.6rem 0;
  }

  .filters {
    display: flex;
    gap: 12px;
  }
</style>
