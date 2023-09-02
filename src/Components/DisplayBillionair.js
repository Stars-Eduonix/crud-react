import React, {useState, useEffect} from "react";
import axios from "axios";

const DisplayBillionair = () => {

    let [billionair, setBillionair] = useState([]);
    let [billionairDetails, setBillionairDetails] = useState({});


    useEffect(() => {
          axios.get("http://localhost:5000/view/all")
            .then((response) => setBillionair(response.data))
            .catch((err) => console.log(err));
    })

    function makeCapital(str){
        let firstLetter = str[0].toUpperCase();
        let rest = str.slice(1);
        return firstLetter + rest;
    }

    function getBillionairDetails(id){
         axios.get(`http://localhost:5000/view/id/${id}`)
            .then((response) => setBillionairDetails(response.data))
            .catch((err) => console.log(err));
    }



    return(
        <div className="display">
            <div className="display-billionair">
                    {
                        billionair.length > 0  && (
                            billionair.map((billi) => (
                                <h3 onClick={()=>getBillionairDetails(billi._id)} key={billi._id}> {makeCapital(billi.name)} </h3>
                            )
                        ))
                    }
                    
            </div>
            <div>
                  {
                        Object.keys(billionairDetails).length > 0 && (
                            <div className="billionair-details">
                                <h2>{makeCapital(billionairDetails.name)}</h2>
                                <h3>Age: {billionairDetails.age}</h3>
                                <h3>Wealth: {billionairDetails.wealth} </h3>

                            </div>

                        )
                  }
                  
            </div>

        </div>
    )
}

export default DisplayBillionair;