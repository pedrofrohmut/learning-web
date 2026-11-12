<script>
  import Modal from "../components/Modal.svelte"

  const { toggleModal, cart, showModal, clearCart, removeCartItem } = $props()
</script>

<header>
  <div class="container">
    <h1 class="logo">ShopMate</h1>

    <div class="root">
      <button class="cart-btn" onclick={toggleModal}>
        <i class="fa-solid fa-cart-shopping"></i> Cart
      </button>

      {#if cart.amount > 0}
        <div class="cart-amount">{cart.amount}</div>
      {/if}

      {#if showModal}
        <Modal {cart} {toggleModal} {clearCart} {removeCartItem} />
      {/if}
    </div>
  </div>
</header>

<style>
  header {
    background-color: #181818;
    color: #cecece;
    padding: 8px 0;
  }

  .container {
    max-width: var(--page-max);
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    margin: 0;
  }

  .cart-btn {
    background: none;
    color: #cecece;
    border: 2px solid #cecece;
    border-radius: 8px;
    padding: 6px 12px;
    font-size: 16px;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 8px;
  }

  .cart-btn:hover {
    filter: brightness(1.4);
  }

  .cart-btn i {
    font-size: 20px;
  }

  .root {
    position: relative;
  }

  .cart-amount {
    position: absolute;
    background-color: #44c;
    color: #cecece;
    font-weight: var(--fw-bold);
    font-size: var(--fs-small);
    border-radius: 6px;
    padding: 2px 5px;
    top: -6px;
    right: -6px;
  }
</style>
