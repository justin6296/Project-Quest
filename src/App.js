import React from 'react'
import './App.css';
import data from '../src/components/Data.json'
import Bookmodal from './Bookmodal'
import Returnmodal from './Returnmodal'
import Pricemodal from './Price'
import ReturnPricemodal from './Returnprice'




function App() {
    const [BookmodalIsOpen, setBookmodalIsOpen] = React.useState(false);
    const [ReturnmodalIsOpen, setReturnmodalIsOpen] = React.useState(false);
    const [PricemodalIsOpen, setPricemodalIsOpen] = React.useState(false);
    const [price, setprice] = React.useState();
    const pricehandler=(totalprice)=>{
        setprice(totalprice)
    }
    const [ReturnPricemodalIsOpen, setReturnPricemodalIsOpen] = React.useState(false);
    const [returnprice, setreturnprice] = React.useState();
    const returnpricehandler=(totalprice)=>{
        setreturnprice(totalprice)
    }
    return ( 
        
    <div className = "App" >
        <table>
            <tr>
                <th>
                    code
                </th>
                <th>
                     name
                </th>
                <th>
                    Type
                </th>
                <th>
                availability
                </th>
                <th>
                needing_repair
                </th>
                <th>
                durability
                </th>
                <th>
                max_durability
                </th>
                <th>
                mileage
                </th>
                <th>
                price
                </th>
                <th>
                minimum_rent_period
                </th>
                

            </tr>
            {
                data.map(val =>{
                    return <tr>
                        <th>
                            {
                                val.code
                            }
                        </th>
                        <th>
                            {
                                val.name
                            }
                        </th> <th>
                            {
                                val.type
                            }
                        </th> <th>
                            {
                                val.availability ? "true" :"false"
                            }
                        </th> <th>
                            {
                                val.needing_repair ? "true" :"false"
                            }
                        </th> <th>
                            {
                                val.durability
                            }
                        </th> <th>
                            {
                                val.max_durability
                            }
                        </th> <th>
                            {
                                val.mileage ? val.mileage : "null"
                            }
                        </th> <th>
                            {
                                val.price
                            }
                        </th> <th>
                            {
                                val.minimum_rent_period
                            }
                        </th>
                    </tr>
                })
            }
        </table>
        <div className="btn">
            <br/><br/>
            <button type="submit" className="btn btn-success" onClick={()=>setBookmodalIsOpen(true)}>Book</button> &nbsp;
            <button type="submit" onClick={()=>setReturnmodalIsOpen(true)}>Return</button>
        </div>
            <Bookmodal BookmodalIsOpen={BookmodalIsOpen} setBookmodalIsOpen={setBookmodalIsOpen} data={data} pricehandler={pricehandler} setPricemodalIsOpen={setPricemodalIsOpen} />
            <Returnmodal ReturnmodalIsOpen={ReturnmodalIsOpen} setReturnmodalIsOpen={setReturnmodalIsOpen} data={data}  returnpricehandler={returnpricehandler} setReturnPricemodalIsOpen={setReturnPricemodalIsOpen}/>
            <Pricemodal PricemodalIsOpen={PricemodalIsOpen} setPricemodalIsOpen={setPricemodalIsOpen} data={price}/>
            <ReturnPricemodal ReturnPricemodalIsOpen={ReturnPricemodalIsOpen} setReturnPricemodalIsOpen={setReturnPricemodalIsOpen} data={returnprice}/>
    </div>
    );
}

export default App;