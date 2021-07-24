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


const Returnmodal=(props)=> {
const [price, setprice] = React.useState();
const [number, setnumber] = React.useState();
   
   function closeModal() {
    props.setReturnmodalIsOpen(false);
  }
  const onpricehandler=()=>{
  //--------------------------------------CALCULATING PRICE-----------------------------------------    
  const totalprice=number*price;
  props.returnpricehandler(totalprice)
  props.setReturnPricemodalIsOpen(true)
  closeModal()
  
  

  }

  return (
    
      <Modal
        isOpen={props.ReturnmodalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="rtrn">
          <b>Return a product !</b><br/><br/>
        <select onChange={(e)=>setprice(e.target.value)}>
          {
            props.data.map(val=><option key={val.code} value={val.price}>
              {
                val.name
              }
            </option>)
          }
        </select><br/><br/>
        Used Mileage:  <input type="number" onChange={(e)=>setnumber(e.target.value)}/><br/><br/>
        
        <button onClick={closeModal}>No</button>&nbsp;
        <button onClick={onpricehandler}>Yes</button>
        
        </div>
        
      </Modal>
    
  );
}
export default Returnmodal

