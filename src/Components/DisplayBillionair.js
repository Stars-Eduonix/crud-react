import React, {useState, useEffect} from "react";
import axios from "axios";

const DisplayBillionair = () => {

    let [billionair, setBillionair] = useState([]);


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



    return(
        <div className="display-billionair">
                 {
                    billionair.length > 0  && (
                        billionair.map((billi) => (
                              <h3 key={billi._id}> {makeCapital(billi.name)} </h3>
                        )
                    ))
                 }
        </div>
    )
}

export default DisplayBillionair;