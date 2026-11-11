<script>
  const { cart, toggleModal, clearCart } = $props()
</script>

<div class="root">
  <div class="modal">
    <div class="header">
      <div class="title">Cart Items</div>
      <button class="close-btn" onclick={toggleModal}>X</button>
    </div>

    {#if cart.amount < 1}
      <div>Your cart is empty</div>
    {/if}

    {#if cart.amount > 0}
      <div class="cart-items">
        {#each cart.items as item}
          <div class="cart-item">

            <div class="cart-content">
              <div class="cart-name">{item.name}</div>
              <div class="cart-price">{item.amount} x R$ {item.price}</div>
            </div>

            <div class="cart-buttons">
              <div class="cart-edit" title="Edit Cart">
                <i class="fa-solid fa-pencil"></i>
              </div>

              <div class="cart-remove" title="Remove Item">
                <i class="fa-solid fa-trash"></i>
              </div>
            </div>

          </div>
        {/each}
      </div>

      <div class="cart-total">Total: R$ {cart.total}</div>

      <button class="cart-clear" onclick={clearCart}>Clear cart</button>
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

  .cart-item {
    margin-bottom: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cart-buttons {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .cart-remove,
  .cart-edit {
    cursor: pointer;
    font-size: 18px;
  }

  .cart-edit {
    color: #66f;
  }

  .cart-remove {
    color: #f66;
  }

  .cart-name {
    font-size: var(--fs-regular);
  }

  .cart-price {
    font-size: var(--fs-small);
    color: #777;
  }

  .cart-total {
    margin-bottom: 0.8rem;
  }

  .cart-clear {
    color: #cecece;
    background-color: #f66;
    border: 0;
    border-radius: 4px;
    padding: 4px 0;
    width: 100%;
    font-size: var(--fs-regular);
    font-weight: var(--fw-bold);
  }
</style>
