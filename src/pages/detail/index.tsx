import { useState } from 'react';
import Modal from '../../components/blocks/modal/modal';

export default function Detail() {
  const [onModal, setOnModal] = useState(false);

  const modalHandler = () => {
    setOnModal(!onModal);
  };

  return (
    <>
      <div>CafeDetail</div>
      <button type="button" onClick={modalHandler}>
        좋아요
      </button>
      {onModal && (
        <Modal
          visible={onModal}
          onClose={modalHandler}
          message="좋아요를 누르시려면"
        />
      )}
    </>
  );
}
