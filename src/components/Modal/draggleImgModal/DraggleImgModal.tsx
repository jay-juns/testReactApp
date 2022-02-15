import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '@iconify/react';

const DraggleImgModal = (
  { hideModal, modalType, toggleModal, children } : 
  { hideModal:boolean, modalType:string, toggleModal: Function, children:any 
  }) => {
  // if(hideModal || modalType !== 'draggle') return null;

  return ReactDOM.createPortal(
    <>
      {/* <div className='overlay none' onClick={(e)=> toggleModal(modalType, e)}></div> */}
      <div className={`modal-container none-bg ${hideModal ? '' : 'in active'}`}>
        <button className='modal-close__btn-wrapper' onClick={(e)=> toggleModal(modalType, e)}>
          <Icon className="" icon="ep:close-bold" />
        </button>
        {children}
      </div>
    </>,
    document.getElementById('portal')!
  )
}

export default DraggleImgModal;