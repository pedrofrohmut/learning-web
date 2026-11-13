<script>
  import { onMount } from "svelte"

  import Navbar from "./lib/layout/Navbar.svelte"

  const initialCart = {
    amount: 0,
    total: 0,
    items: [], // Item: { id: number, name: string, price: number, amount: number }
  }

  const initCartLS = () => {
    const lsCart = localStorage.getItem("cart")
    if (!lsCart) {
      localStorage.setItem("cart", JSON.stringify(initialCart))
      return initialCart
    }
    return JSON.parse(lsCart)
  }

  const updateCartLS = (cart) => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }

  let products = $state([])
  let showModal = $state(false)
  let cart = $state({})

  onMount(async () => {
    const response = await fetch("http://localhost:5000/products")
    products = await response.json()

    cart = initCartLS()
  })

  const fixPrice = price => Math.round(price * 100) / 100

  const toggleModal = () => {
    showModal = !showModal
  }

  const addItem = (product) => {
    cart.amount++
    cart.total = fixPrice(cart.total + product.price)
    const hasItem = cart.items.some(item => item.id === product.id)

    if (!hasItem) {
      // If cart doesnt have item add new
      const newItem = { id: product.id, name: product.name, price: product.price, amount: 1 }
      cart.items = cart.items.concat(newItem)
    } else {
      // Increase amount if item is already present
      for (const item of cart.items) {
        if (item.id === product.id) {
          item.amount += 1
        }
      }
    }

    updateCartLS(cart)
  }

  const clearCart = () => {
    if (!confirm("Are you sure you want to clear the cart?")) return

    cart.amount = 0
    cart.total = 0
    cart.items = []

    updateCartLS(cart)
  }

  const removeCartItem = (item) => {
    if (!confirm("Are you sure you want to remove this item?")) return

    // Reduce total price
    cart.total = fixPrice(cart.total - (item.price * item.amount))

    // Reduce amount
    cart.amount -= item.amount

    // Remove item from cart
    cart.items = cart.items.filter(x => x.id !== item.id)

    updateCartLS(cart)
  }

  const incAmount = (item) => {
    // Limit rule
    if (item.amount > 98) return

    // Change  amount
    for (const x of cart.items) {
      if (x.id === item.id) {
        x.amount += 1
        break
      }
    }

    // Update cart
    cart.total = fixPrice(cart.total + item.price)
    cart.amount += 1

    updateCartLS(cart)
  }

  const decAmount = (item) => {
    // Limit rule
    if (item.amount < 2) return

    // Decrement amount
    for (const x of cart.items) {
      if (x.id === item.id) {
        x.amount -= 1
        break
      }
    }

    // Update cart
    cart.total = fixPrice(cart.total - item.price)
    cart.amount -= 1

    updateCartLS(cart)
  }
</script>

<Navbar {toggleModal} {cart} {showModal} {clearCart} {removeCartItem} {incAmount} {decAmount} />

<!-- Debug cart -->
<!-- <pre>{JSON.stringify(cart, null, 4)}</pre> -->

<main>
  <h2 class="title">Product Catalog</h2>

  <div class="cards">
    {#each products as product}
      <div class="card">
        <img alt={product.name} src={product.image} />
        <div class="name">{product.name}</div>
        <div class="description">{product.description}</div>
        <div class="price">R$ {product.price}</div>
        <button onclick={() => addItem(product)}>Add to cart</button>
      </div>
    {/each}
  </div>
</main>

<style>
  main {
    max-width: var(--page-max);
    min-width: 360px;
    margin: 0 auto 2rem;
    padding: 0 1.5rem;
  }

  .cards {
    max-width: var(--page-max);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .card {
    background-color: #444;
    padding: 0.75rem;
    border: 0;
    border-radius: 8px;
    max-width: 380px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .card img {
    width: 100%;
  }

  .card .name {
    font-size: var(--fs-large);
    font-weight: var(--fw-bold);
  }

  .card .description {
    font-size: var(--fs-small);
    font-weight: var(--fw-light);
  }

  .card .price {
    font-size: var(--fs-extra-large);
    font-weight: var(--fw-bold);
  }

  .card button {
    padding: 7px 0;
    font-size: var(--fs-regular);
    font-weight: var(--fw-bold);
    color: #cecece;
    background-color: #242424;
    border: 0;
    border-radius: 5px;
  }

  @media (max-width: 800px) {
    main {
      padding: 0 1rem;
    }
    .cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 510px) {
    main {
      padding: 0 0.5rem;
    }
    .cards {
      grid-template-columns: 1fr;
    }
  }
</style>
