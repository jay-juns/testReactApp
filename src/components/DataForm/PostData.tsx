import React, { useState } from "react";
import { postTypes } from "../../redux/post/Post.types";
import DraggleImgModal from "../../components/Modal/draggleImgModal/DraggleImgModal";
import './data.css'

type Props = {
  datas: postTypes[] | undefined;
}

function PostData(props: Props) {
  const { datas } = props;
  const [hideModal, setHideModal] = useState<boolean>(true);
  const [modalType, setModalType] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const toggleModal = (type:string, event:any) => {
    setUrl(event.target.dataset.url);
    setModalType(type);
    setHideModal(!hideModal);
  };
  const configModal = {
    hideModal,
    modalType,
    toggleModal
  };

  return (
    <>
      <div className="post-card__wrapper">
        {datas && datas.map((data, index) => (
            <div className="post-card__items" key={index}>
              <button className="btn" onClick={(e) => toggleModal('draggle', e)}>
                <img src={data.thumbnailUrl} data-url={data.url} alt={`thumbnail_${data.title}`} />
              </button>
              <p>{data.title}</p>
            </div>
        ))}
      </div>
      <DraggleImgModal {...configModal}>
          <img src={url} alt="img" />
        </DraggleImgModal>
      </>
  )
}

export default PostData;