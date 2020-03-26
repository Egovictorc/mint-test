import React, { useState, useEffect} from "react";
import {connect } from "react-redux"
import * as actions from "../actionCreators/actionCreator"


import PaymentsHeading from "./paymentHeading"


//////////IMPORT ITEMS TABLE
import ItemsTable from "./itemsTable";



const Payments = (props) => {
  const [items, setItems ] = useState([])

  useEffect( () =>{
    ///////GET ALL ITEMS
    props.getAll();
    ////////////SET ITEMS TO ALL ITEMS
    setItems(props.allItems)
  }, [])

  const handleSelect = () => {
    
  }

  return (
    <>
      <PaymentsHeading handleSelect={handleSelect} />

    <ItemsTable items={items} />
    </>
  );
};



const mapStateToProps = state => ({allItems: state.allItems})
const mapDispatchToProps = {...actions }


export default connect(mapStateToProps, mapDispatchToProps )(Payments)
