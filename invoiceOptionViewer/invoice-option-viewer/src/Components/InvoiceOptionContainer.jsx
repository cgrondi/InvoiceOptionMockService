import React from "react";
import InvoiceOption from "./InvoiceOption";

function InvoiceOptionContainer(props){
    if(props.loading){
        return <h2>Loading...</h2>
    }
    if(props.invoiceOptions.length===0){
        return <h2>No Invoice Options found</h2>
    }
    return(
        props.invoiceOptions
            .map((item, index) =>{
            return <InvoiceOption invoiceOption={item} key={index} />
        })
    )
}

export default InvoiceOptionContainer;