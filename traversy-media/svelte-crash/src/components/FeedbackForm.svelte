<script>
  import { v4 as uuidv4 } from "uuid"
  import { createEventDispatcher } from "svelte"

  import Card from "./Card.svelte"
  import Button from "./Button.svelte"
  import RatingSelect from "./RatingSelect.svelte"

  const dispatch = createEventDispatcher()

  const min = 10
  const message = `Text must at least ${min} characters long.`

  let text = ""
  let btnDisabled = true
  let rating = 10
  let selected = 10

  const handleInput = () => {
    btnDisabled = text.trim().length < min
  }

  const handleRating = (e) => {
    rating = e.detail
    selected = e.detail
  }

  const handleSubmit = () => {
    if (text.trim().length < min) return

    const newFeedback = {
      id: uuidv4(),
      text,
      rating: Number(rating),
    }

    dispatch("add-feedback", newFeedback)

    text = ""
    btnDisabled = true
    rating = 10
    selected = 10
  }
</script>

<Card>
  <header>
    <h2>How would you rate your service with us?</h2>
  </header>

  <RatingSelect on:select-rating={handleRating} {selected} />

  <form on:submit|preventDefault={handleSubmit}>
    <!-- Rating select -->
    <div class="input-group">
      <input type="text" on:keyup={handleInput} bind:value={text} placeholder="Tell us something that keeps you coming back" />
      <Button disabled={btnDisabled} type="submit">Send</Button>
    </div>
  </form>

  {#if btnDisabled && text.length > 0}
    <div class="message">{message}</div>
  {/if}
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
  }

  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }

  .message{
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
</style>
