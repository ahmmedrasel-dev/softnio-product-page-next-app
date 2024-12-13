# Softnio Product Details Add to Cart Next Js App

## Project Overview

The **Softnio Product Details Add to Cart** project is a dynamic e-commerce product page built using the React framework **Next.js (v15)**. This application offers an interactive and user-friendly shopping experience, where users can explore product variations, add items to the cart, and review cart details in a modal.

---

## Project Live Link

- Live Link [>> Click Here <<](https://softnio-product-page-next-app.vercel.app)

---

## Key Features

### 1. **Add to Cart Functionality**

- Users can add products to the cart based on **size** and **color variations**.
- Prevents adding duplicate items with the same size and color by incrementing the quantity instead.

### 2. **Color Variations**

- The product thumbnail dynamically updates based on the selected color.

### 3. **Dynamic Price Calculation**

- The total price is calculated based on:
  - Selected **size price**.
  - Product **quantity**.

### 4. **React Modal for Cart Display**

- The cart is displayed in a responsive and visually appealing **React Modal**.
- The modal includes a table summarizing the cart items with details like:
  - Product Name
  - Selected Color
  - Selected Size
  - Quantity
  - Price per item and total price

### 5. **Design Enhancements**

- Used **React Icons** to enrich the UI and improve usability.

---

## Technology Stack

### Frontend:

- **React**: Library for building user interfaces.
- **Next.js (v15)**: Framework for server-side rendering and routing.

### UI/UX:

- **React Modal**: For displaying the cart data in a modal.
- **React Icons**: For adding icons to the design.

---

## Installation and Setup

### Prerequisites:

- Node.js (v16 or later)
- npm or yarn

### Steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/ahmmedrasel-dev/softnio-product-page-next-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd softnio-product-page-next-app
   ```

3. Install dependencies:

   ```bash
   npm install -f
   ```

   or

   ```bash
   yarn install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Usage

1. **Select Product Variations:**

   - Choose a color to update the product thumbnail dynamically.
   - Select the desired size.

2. **Add to Cart:**

   - Click the "Add to Cart" button after selecting color and size.

3. **View Cart:**
   - Open the cart modal to review selected products.
   - Check the total price and quantity of items in the cart.

---

## Future Enhancements

- Integration with a backend API for product data.
- Persistent cart using local storage or a database.
- Improved responsiveness and accessibility.

---

## Acknowledgements

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [React Modal](https://reactcommunity.org/react-modal/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## Author

- Created by [Rasel Ahmmed](https://github.com/ahmmedrasel-dev)
