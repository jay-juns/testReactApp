import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { actions, IPlus, IMinus } from '../../redux/count/Count.reducer';

export default function useCounterActions() {
  const dispatch = useDispatch();

  const onPlus = useCallback((param: IPlus) => dispatch(actions.plus(param)), [
    dispatch
  ]);
  const onMinus = useCallback((param: IMinus) => dispatch(actions.minus(param)), [dispatch]);
  const onPlusRandom = useCallback(() => dispatch(actions.plusRandom()), [
    dispatch
  ]);
  const onPlusAfterOneSeconds = useCallback(
    () => dispatch(actions.plusAfterOneSeconds()),
    [dispatch]
  );
  const onMiusRandom = useCallback(() => dispatch(actions.minusRandom()), [
    dispatch
  ]);

  return { onPlus, onMinus, onPlusRandom, onPlusAfterOneSeconds, onMiusRandom };
}