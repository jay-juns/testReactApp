import { useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { GET_POST_REQUEST } from "../../redux/post/Post.reducer";
import PostData from "../../components/DataForm/PostData";
import useIntersectionObserver from "../../customHooks/useIntersectionObserver";

const Dashboard = () => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  const [firstNum, setFirstNum] = useState<number>(0);
  const [lastNum, setLastNum] = useState<number>(15);
  const { posts } = useSelector((state: RootState)=> state.posts);

  useEffect(()=>{
    if (posts.length === 0) {
      getAPI()
    }
  },[]);
  useEffect(()=> {
    if(isVisible) {
      getAPI()
    }
  },[isVisible]);

  const getAPI = () => {
    console.log("post request")
    dispatch({
      type: GET_POST_REQUEST,
      data: {
        first: firstNum,
        last: lastNum
      }
    })
    upadateNumber();
  }

  const upadateNumber = useCallback(()=> {
    setFirstNum((num) => num + 15);
    setLastNum((num) => num + 15);
  }, []);

  return(
    <>
      <div>
        <PostData datas={posts} />
        <div ref={ref}>
          is loading
        </div>
      </div>
    </>
  )
}

export default Dashboard;