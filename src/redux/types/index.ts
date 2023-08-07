import { ThunkDispatch } from "redux-thunk"
import { fetchIncrease, fetchDecrease, fetchSetDiff } from "../features"
import { RootState, RootDispatch } from "../stores"

// reducers
export interface ICounterState {
  number: number
  diff: number
  loading: boolean
  message: string
}

// actions
export type CounterAction =
  | ReturnType<typeof fetchIncrease>
  | ReturnType<typeof fetchDecrease>
  | ReturnType<typeof fetchSetDiff>

export type TypedThunkDispath = ThunkDispatch<
  ICounterState,
  unknown,
  CounterAction
>

// reducers
export type RootState = ReturnType<typeof RootState>
export type RootDispatch = typeof RootDispatch
