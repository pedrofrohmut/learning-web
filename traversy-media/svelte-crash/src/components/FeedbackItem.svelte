<script>
  import { createEventDispatcher } from "svelte"
  import Card from "./Card.svelte"

  export let feedback = null

  const dispatch = createEventDispatcher()

  const handleDelete = (id) => {
    dispatch("delete-feedback", id)
  }
</script>

<Card>
  <div class="num-display">
    {feedback.rating}
  </div>
  <button class="close" on:click={() => handleDelete(feedback.id)}>X</button>
  <p class="text-display">{feedback.text}</p>
</Card>

<style>
  .num-display {
    --fg: #fff;

    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background-color: #ff6a95;
    color: var(--fg);
    border: 3px solid var(--fg);
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    background-color: #e7e7e7;
    padding: 2px 6px;
    font-size: 15px;
    border: 0;
  }
</style>
