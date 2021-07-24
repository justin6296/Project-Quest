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


const ReturnPricemodal=(props)=> {
   
   function closeModal() {
    props.setReturnPricemodalIsOpen(false);
    window.alert("Your Return Confirmed !")
  }

  return (
    
      <Modal
        isOpen={props.ReturnPricemodalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <div className="rtnpop">
             <b>Return a Product !</b>  <br/><br/>
              Your estimated price <b>${props.data}</b>  <br/>
              Do you want to proceed ?<br/><br/>
          </div>
          <br/> <button onClick={closeModal}>Confirm</button>
      </Modal>
    
  );
}
export default ReturnPricemodal

