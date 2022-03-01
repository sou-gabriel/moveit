import { useContext } from 'react'
import Modal from 'react-modal'

import { ChallengeContext } from '../../contexts/ChallengeContext'

import CloseIcon from '../../assets/icons/close.svg'

import {
  OverlayStyle,
  ContentStyle,
  CloseModalButton,
  Header,
  Congratulations,
  Description,
} from './styles'

Modal.setAppElement('#__next')

export const NewLevelModal = () => {
  const { level, isNewLevelModalOpen, handleCloseNewLevelModal } =
    useContext(ChallengeContext)

  return (
    <Modal
      isOpen={isNewLevelModalOpen}
      onRequestClose={handleCloseNewLevelModal}
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => (
        <ContentStyle {...props}>{children}</ContentStyle>
      )}
      overlayElement={(props, contentElement) => (
        <OverlayStyle {...props}>{contentElement}</OverlayStyle>
      )}
    >
      <CloseModalButton onClick={handleCloseNewLevelModal}>
        <CloseIcon />
      </CloseModalButton>
      <Header>{level}</Header>
      <Congratulations>Parabéns</Congratulations>
      <Description>Você alcançou um novo level.</Description>
    </Modal>
  )
}
