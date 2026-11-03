<script>
  import FeedbackList from "./components/FeedbackList.svelte"
  import FeedbackStats from "./components/FeedbackStats.svelte"
  import FeedbackForm from "./components/FeedbackForm.svelte"

  let feedbacks = [
    {
      id: 1,
      rating: 10,
      text: "Tellus molestie nunc, non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor!"
    },
    {
      id: 2,
      rating: 9,
      text: "Leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero, id faucibus nisl tincidunt eget nullam non nisi est, sit amet facilisis magna?"
    },
    {
      id: 3,
      rating: 8,
      text: "Velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus, dictum at tempor commodo, ullamcorper a lacus vestibulum sed."
    }
  ]

  $: count = feedbacks.length
  $: average = count === 0 ? 0 : feedbacks.reduce((acc, curr) => acc + curr.rating, 0) / count

  const deleteFeedback = (e) => {
    const feedbackId = e.detail
    feedbacks = feedbacks.filter(x => x.id !== feedbackId)
  }

  const addFeedback = (e) => {
    const newFeedback = e.detail
    feedbacks = [...feedbacks, newFeedback]
  }
</script>

<main class="container">
  <FeedbackForm on:add-feedback={addFeedback} />
  {#if count > 0}
    <FeedbackStats {count} {average} />
  {/if}
  <FeedbackList {feedbacks} on:delete-feedback={deleteFeedback} />
</main>
