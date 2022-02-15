import { createAction, ActionType, createReducer } from "typesafe-actions";

export interface IPlus {
  num?: number;
}
export interface IMinus {
  num?: number;
}
// Actions
export const PLUS = "counter/PLUS";
export const MINUS = "counter/MINUS";
export const PLUS_RANDOM = "counter/PLUS_RANDOM";
export const PLUS_AFTER_ONE_SECONDS = "counter/PLUS_AFTER_ONE_SECONDS";
export const MINUS_RANDOM = "counter/MINUS_RANDOM";

export const plus = createAction(PLUS)<IPlus>();
export const minus = createAction(MINUS)<IMinus>();
export const plusRandom = createAction(PLUS_RANDOM)();
export const plusAfterOneSeconds = createAction(PLUS_AFTER_ONE_SECONDS)();
export const minusRandom = createAction(MINUS_RANDOM)();

// Types
export const actions = { plus, minus, plusRandom, plusAfterOneSeconds, minusRandom };
type CounterAction = ActionType<typeof actions>;
type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0
};

// Reducer
const status = createReducer<CounterState, CounterAction>(initialState, {
  [PLUS]: (state, action) => {
    const { num } = action.payload;
    const { count } = state;
    const add = num || 1;
    const _count = count + add;
    return { count: _count };
  },
  [MINUS]: (state, action) => {
    const { num } = action.payload;
    const add = num || 1;
    const { count } = state;
    const _count = Math.max(count - add, 0);
    return { count: _count };
  }
});

export default status;