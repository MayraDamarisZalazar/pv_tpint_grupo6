import { createStore, combineReducers } from "redux";
import authReducer from "./authSlice";

// Reducer para productos
const initialProductState = {
  products: [],
};

function productsReducer(state = initialProductState, action) {
  switch (action.type) {
    case "SET_PRODUCTS": {
      const mergedProducts = action.payload.map((product) => {
        const existing = state.products.find((p) => p.id === product.id);
        return existing
          ? { ...product, isFavorite: existing.isFavorite }
          : { ...product, isFavorite: false };
      });
      return { ...state, products: mergedProducts };
    }

    case "TOGGLE_FAVORITE": {
      const updatedProducts = state.products.map((p) =>
        p.id === action.payload ? { ...p, isFavorite: !p.isFavorite } : p
      );
      return { ...state, products: updatedProducts };
    }

    case "ADD_PRODUCT": {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    }

    case "EDIT_PRODUCT": {
      const updatedProducts = state.products.map((p) =>
        String(p.id) === String(action.payload.id)
          ? { ...p, ...action.payload }
          : p
      );
      return {
        ...state,
        products: updatedProducts,
      };
    }

    default:
      return state;
  }
}

// Combinamos los reducers
const rootReducer = combineReducers({
  products: productsReducer,
  auth: authReducer,
});

// Creamos el store con todos los reducers
const store = createStore(rootReducer);

export default store;
