<script>
  let newTask = $state("")
  let { addTask } = $props()

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(newTask)
    newTask = ""
  }
</script>

<form onsubmit={handleSubmit}>
  <div class="input-container">
    <div>
      <label>Task</label>
      <input name="newTask" bind:value={newTask} />
    </div>
    <button>Add</button>
  </div>
</form>

<style>
  input {
    margin: 0;
  }

  .input-container {
    display: flex;
    align-items: end;
    gap: 12px;
  }
</style>
