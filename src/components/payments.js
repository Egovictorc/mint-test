import React, { useState, useEffect} from "react";
import {connect } from "react-redux"
import * as actions from "../actionCreators/actionCreator"


import PaymentsHeading from "./paymentHeading"


//////////IMPORT ITEMS TABLE
import ItemsTable from "./itemsTable";


const Payments = (props) => {
  const [items, setItems ] = useState([])
  const [ selectedCategory, setSelectedCategory ] = useState({name: "all", value: "all"})

  useEffect( () =>{
    ///////GET ALL ITEMS
    props.getAll();
    ////////////SET ITEMS TO ALL ITEMS
    setItems(props.allItems)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedCategory({name, value})
  }

  return (
    <>
      <PaymentsHeading handleChange={handleChange} selectedCategory={selectedCategory} />

    <ItemsTable items={items} />
    </>
  );
};



const mapStateToProps = state => ({allItems: state.allItems})
const mapDispatchToProps = {...actions }


export default connect(mapStateToProps, mapDispatchToProps )(Payments)
