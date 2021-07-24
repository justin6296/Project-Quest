import React from 'react';

import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


const Pricemodal=(props)=> {
   
   function closeModal() {
    props.setPricemodalIsOpen(false);
    window.alert("Your Booking is Succesful")
  }

  return (
    
      <Modal
        isOpen={props.PricemodalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <div className="bookpop">
              <b>Book A Product ! </b> <br/><br/>
              Your estimated price <b>${props.data}</b>  <br/><br/>
              Do you want to proceed ?<br/><br/>
              &nbsp;<button onClick={closeModal}>Yes</button>
          </div>
        
      </Modal>
    
  );
}
export default Pricemodal

