import { create } from "zustand";
import { devtools } from "zustand/middleware";

//para usar las devtools de zustand con la extension de redux tenemos que envolver la func callback del create
// const useCartStore = create((set) => ({ // sin devtools
const useCartStore = create(devtools((set) => ({
  cart: [],
  //la idea de usar devtools s poder ver c/cambio de forma granular
  //para eso modificaremos cada función...
  addProduct: (product) => {
    set((state) => {
      console.log(state);
      //la función que este dentro de set necesita retornar el cambio que quiere realizar en el store
      return {
        cart: [...state.cart, product]
      }
      //... la modificación es agregar unos argumentos extra dandolé un nombre a cada función
    }, false, "cart/addProductToCart")
  }
})))

export default useCartStore;
