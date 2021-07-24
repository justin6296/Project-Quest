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


const Bookmodal=(props)=> {
  const [price, setprice] = React.useState();
  const [from, setfrom] = React.useState("");
  const [to, setto] = React.useState("");
 
  
   
   function closeModal() {
    props.setBookmodalIsOpen(false);
  }
  const onpricehandler=()=>{
  //--------------------------------------CALCULATING PRICE-----------------------------------------  
  const date1 = new Date(from);
  const date2 = new Date(to);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  const totalprice=diffDays*price;
  props.pricehandler(totalprice)
  props.setPricemodalIsOpen(true)
  closeModal()
  
  

  }
  return (
    
    
      <Modal
        isOpen={props.BookmodalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="popp">
         <b>Book a product !</b>  <br/><br/>

        <select onChange={(e)=>setprice(e.target.value)}>
          {
            props.data.map(val=><option key={val.code} value={val.price}>
              {
                val.name
              }
            </option>)
          }
        </select><br/><br/>
        From : <input type="date" onChange={(e)=>setfrom(e.target.value) }/> &nbsp;
        To : <input type="date" onChange={(e)=>setto(e.target.value)}/><br/><br/>
        <button onClick={closeModal}>No</button> &nbsp;
        <button onClick={onpricehandler}>Yes</button>
        </div>
        
        
      </Modal>
    
  );
}
export default Bookmodal


