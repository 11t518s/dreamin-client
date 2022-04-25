import React from 'react';

import Modal from '../components/common/modal'
import ModalTemplate from '../components/common/modal/ModalTemplate';
import SetUserProfile from '../components/initialRegister/SetUserProfile';

import useModal from '../hooks/useModal';

const Index: React.FC = () => {
  const { isShowing, setModalVisible } = useModal();

  // return <Login />;
  return (
    <>
    <button onClick={setModalVisible}>test</button>
    <Modal isShowing={isShowing} hide={setModalVisible}>
      <ModalTemplate hide={setModalVisible}>
        <SetUserProfile />
      </ModalTemplate>
    </Modal>
    </>
  )
};

export default Index;
