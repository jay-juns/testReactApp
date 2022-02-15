import React from "react";
import { todoTypes } from "../../redux/todo/Todo.types";
import './data.css'

type Props = {
  datas: todoTypes[] | undefined;
}

function TodoData(props: Props) {
  const { datas } = props;
  return (
    <div className="post-card__wrapper">
      {datas && datas.map((data, index) => (
        <div className="post-card__items" key={index}>
          <div>
            <p>{data.completed === true ? '완료' : '처리중'}</p>
          </div>
          <p>{data.title}</p>
        </div>
      ))}
    </div>
  )
}

export default TodoData;