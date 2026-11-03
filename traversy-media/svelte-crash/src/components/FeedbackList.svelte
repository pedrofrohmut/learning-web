<script>
  import { scale, fade } from "svelte/transition"

  import FeedbackItem from "./FeedbackItem.svelte"

  export let feedbacks = []

  console.log(feedbacks)
</script>

{#each feedbacks as feedback (feedback.id)}
  <div in:scale out:fade>
    <FeedbackItem {feedback} on:delete-feedback />
  </div>
{/each}
