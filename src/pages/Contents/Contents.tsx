import { useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { GET_TODO_REQUEST } from "../../redux/todo/Todo.reducer";
import TodoData from "../../components/DataForm/TodoData";
import useIntersectionObserver from "../../customHooks/useIntersectionObserver";

const Contents = () => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  const [firstNum, setFirstNum] = useState<number>(0);
  const [lastNum, setLastNum] = useState<number>(30);
  const [loading, setLoading] = useState<boolean>(false);
  const { todos } = useSelector((state: RootState)=> state.todos); 
  useEffect(()=> {   
    if(todos.length < firstNum) {
      setLoading(true);
      return;
    }
    getAPI();
  },[isVisible]);

  const getAPI = () => {
    dispatch({
      type: GET_TODO_REQUEST,
      data: {
        first: firstNum,
        last: lastNum
      }
    })
    if(todos.length > 29) {
      upadateNumber();
    }
  }

  const upadateNumber = useCallback(()=> {
    setFirstNum((num) => num + 30);
    setLastNum((num) => num + 30);
  }, [])

  return (
    <div>
      <TodoData datas={todos} /> 
      {loading ? 
      ""
        :
      <div ref={ref}>
        is loading
      </div> 
    }
    </div>
  )
}

export default Contents;