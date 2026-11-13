<script>
  const { cart, toggleModal, clearCart, removeCartItem, incAmount, decAmount } = $props()
</script>

<div class="modal-overlay" onclick={toggleModal}></div>

<div class="root">
  <div class="modal">
    <div class="header">
      <div class="title">Cart Items</div>
      <button class="close-btn" title="Close cart" onclick={toggleModal}>X</button>
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
              <div class="cart-price">R$ {item.price}</div>
            </div>

            <div class="cart-buttons">
              <div class="price-amount-buttons">
                <button class="price-minus" onclick={() => decAmount(item)}>
                  <i class="fa-solid fa-minus"></i>
                </button>
                <div class="price-amount">{item.amount}</div>
                <button class="price-plus" onclick={() => incAmount(item)}>
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>

              <div class="cart-remove" title="Remove Item" onclick={() => removeCartItem(item)}>
                <i class="fa-solid fa-trash"></i>
              </div>
            </div>

          </div>
        {/each}
      </div>

      <div class="cart-total">Total: R$ {cart.total}</div>

      <button class="cart-clear" onclick={clearCart} title="Clear cart items">
        <i class="fa-solid fa-trash"></i> Clear cart
      </button>
    {/if}
  </div>
</div>

<style>
  .root {
    position: relative;
  }

  .modal-overlay {
    position: fixed;
    inset: 0 0 0 0;
    background-color: #181818;
    opacity: 0.8;
  }

  .modal {
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    background-color: #cecece;
    color: #333;
    border-radius: 8px;
    /* box-shadow: 2px 2px 12px 2px #444; */
    padding: 1.2rem;
    width: 375px;
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
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cart-buttons {
    display: flex;
    align-items: center;
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
    font-size: 0.9rem;
    color: #14f;
  }

  .price-amount-buttons {
    border: 1px solid #bbb;
    border-radius: 4px;
    padding: 5px;
    display: flex;
    align-items: center;
  }

  .price-minus,
  .price-plus,
  .price-amount {
    font-size: 14px;
  }

  .price-plus, .price-minus {
    color: #66f;
    background: none;
    border: 0;
    padding: 2px 4px;
    cursor: pointer;
  }

  .price-amount {
    width: 45px;
    text-align: center;
  }

  .cart-total {
    margin-bottom: 0.8rem;
  }

  .cart-clear {
    color: #cecece;
    background-color: #f66;
    border: 0;
    border-radius: 4px;
    padding: 6px 0;
    width: 100%;
    font-size: var(--fs-regular);
    font-weight: var(--fw-bold);
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  .cart-clear i {
    font-size: 14px;
  }
</style>
