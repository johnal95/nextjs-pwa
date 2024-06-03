import { combineSlices, configureStore } from "@reduxjs/toolkit";
import type { Action, ThunkAction } from "@reduxjs/toolkit";

import { counterSlice } from "./features/counter/counter-slice";

const rootReducer = combineSlices(counterSlice);

type RootState = ReturnType<typeof rootReducer>;

// `createStore` encapsulates the store configuration logic to allow
// creating unique store instances, which is particularly important for
// preventing cross-request state pollution while server side rendering.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function createStore() {
    return configureStore({ reducer: rootReducer });
}

type AppStore = ReturnType<typeof createStore>;

type AppDispatch = AppStore["dispatch"];

type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action>;

export type { AppDispatch, AppStore, AppThunk, RootState };

export { createStore };
