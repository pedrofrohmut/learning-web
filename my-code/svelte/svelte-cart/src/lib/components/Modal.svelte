<script>
  const { items, toggleModal } = $props()
</script>

<div class="root">
  <div class="modal">
    <div class="header">
      <div class="title">Cart Items</div>
      <button class="close-btn" onclick={toggleModal}>X</button>
    </div>

    {#if items.length < 1}
      <div>Your cart is empty</div>
    {:else}
      <div>You have items</div>
    {/if}
  </div>
</div>

<style>
  .root {
    position: relative;
  }

  .modal {
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    background-color: #cecece;
    color: #333;
    border-radius: 8px;
    box-shadow: 2px 2px 12px 2px #444;
    padding: 1.2rem;
    width: 280px;
  }

  .header {
    margin-bottom: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-size: var(--fs-large);
    font-weight: var(--fw-bold);
  }

  .close-btn {
    color: #f66;
    background: none;
    padding: 0.1rem 0.4rem;
    border: 0;
    border: 1px solid #ccc;
    cursor: pointer;
    font-size: var(--fs-regular);
    font-weight: var(--fw-bold);
  }
</style>
