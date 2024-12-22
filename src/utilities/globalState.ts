import { CartItem } from "../dataObjects/type";

/**
 * Singleton class to manage global state for cart items.
 */
class GlobalState {
  /**
   * The single instance of the GlobalState class.
   */
  private static instance: GlobalState;

  /**
   * Array to store cart items.
   */
  public cartItems: Array<CartItem> = [];

  /**
   * Private constructor to prevent direct instantiation.
   */
  private constructor() {}

  /**
   * Retrieves the single instance of the GlobalState class.
   * @returns {GlobalState} The instance of the GlobalState class.
   */
  static getInstance(): GlobalState {
    if (!GlobalState.instance) {
      GlobalState.instance = new GlobalState();
    }
    return GlobalState.instance;
  }

  /**
   * Adds a product to the cart.
   * @param {CartItem} product - The product to add to the cart.
   */
  addToCart(product: CartItem) {
    this.cartItems.push(product);
  }

  /**
   * Retrieves the current cart items.
   * @returns {Array<CartItem>} The array of cart items.
   */
  getCartItems(): Array<CartItem> {
    return this.cartItems;
  }

  /**
   * Clears all items from the cart.
   */
  clearCart() {
    this.cartItems = [];
  }

  /**
   * Removes a specific product from the cart.
   * @param {CartItem} product - The product to remove from the cart.
   */
  removeItemFromCart(product: CartItem) {
    this.cartItems = this.cartItems.filter((item) => item !== product);
  }
}

export default GlobalState.getInstance();
