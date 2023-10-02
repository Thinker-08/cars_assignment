import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { change } from '../redux/searchSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    return (
        <div className="flex" style={{ backgroundColor: "#F0F4FA", height: "65px", borderRadius: "10px", boxShadow: "2px 2px 2px 5px #E7E9F0" }}>
            <div className="row col-4" style={{ padding: "12px" }}>
                <div className="input-group">
                    <input className="form-control border-end-0 border rounded-pill" type="search" id="example-search-input" placeholder='Search..' onChange={(e)=>{dispatch(change({value:e.target.value}))}}></input>
                    <span className="input-group-append">
                        <button className="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5" type="button">
                            <i className="fa fa-search"></i>
                        </button>
                    </span>
                    <button className="btn" data-bs-toggle="dropdown">
                        Relevance{'  '}
                        <i className="fa fa-chevron-down" style={{ color: "#757b84" }}></i>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    <button className="btn" data-bs-toggle="dropdown">
                        All Brands{'  '}
                        <i className="fa fa-chevron-down" style={{ color: "#757b84" }}></i>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar