/**
 * Represents a product.
 */
export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  img: string;
  url: string;
  cats: string[];
  groupcode: string;
  brand: string;
  product_attributes: {
    color_id: string;
    size_id: string;
    add_to_cart_id: string;
    category_id: string;
  };
  formattedPrice: string;
  originalFormattedPrice: string;
};

/**
 * Represents an item in the cart.
 */
export type CartItem = {
  product: Product;
  quantity: number;
};

/**
 * Represents a list of cart items.
 */
export type CartItems = Array<CartItem>;
