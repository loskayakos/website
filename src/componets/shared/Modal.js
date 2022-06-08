import React from 'react'
import Modal from 'react-modal'
import { Button } from './Button'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const CustomModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }
  return (
    <>
      <Button name='Rezerwuj' onClick={openModal} />
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel='Example Modal'>
        <button onClick={closeModal}>close</button>
        <div id='bookero'></div>
      </Modal>
    </>
  )
}

export default CustomModal
