import React from "react";

function InvoiceOption(props){
    return(
        <div className="card" 
        style={{marginBottom: "1%"}}
        >
            <label>Invoice Type: </label>
            <p>{props.invoiceOption.invoiceTypeCode} - {props.invoiceOption.invoiceTypeDescription}</p>
            <label>Line Item Code: </label>
            <p>{props.invoiceOption.categoryId}.{props.invoiceOption.subCategoryId}</p>
            <label>Line Item Description: </label>
            <p>{props.invoiceOption.categoryDescription} - {props.invoiceOption.subCategoryDescription}</p>
        </div>
    )
}

export default InvoiceOption;