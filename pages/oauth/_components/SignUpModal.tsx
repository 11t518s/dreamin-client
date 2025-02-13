import { useRouter } from 'next/router';
import { VFC } from 'react';

import Modal from '../../../components/common/Modal';
import ModalTemplate from '../../../components/common/Modal/ModalTemplate';
import SetUserProfile from '../../../components/initialRegister/SetUserProfile';

interface Props {
  isShowing: boolean;
  setModalVisible: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const SignUpModal: VFC<Props> = ({ isShowing }) => {
  const route = useRouter();

  const setModalVisible = () => {
    route.push('/');
  };
  return (
    <>
      <Modal isShowing={isShowing} hide={setModalVisible}>
        <ModalTemplate hide={setModalVisible} showDelete={false}>
          <SetUserProfile />
        </ModalTemplate>
      </Modal>
    </>
  );
};

export default SignUpModal;
