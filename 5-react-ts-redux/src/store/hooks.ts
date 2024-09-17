/** @format */

import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { type AppDispatch, RootState } from "./store.ts";

type DispatchFunction = () => AppDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;

export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;