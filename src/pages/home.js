import Card from "../components/Card"
import React, { useState, useEffect } from 'react'
import Left from '../left.png'
import Right from '../right.png'
import cars from '../cars.json';
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const Home = () => {
    var {page} = useParams();
    page = parseInt(page);
    console.log(page)
    const navigate = useNavigate();
    const state = useSelector((state)=>state.counter.value)
    const [array, setArray] = useState([]);
    const customSort = (a, b) => {
        const countA = (a.name.match(new RegExp(state, 'gi')) || []).length;
        const countB = (b.name.match(new RegExp(state, 'gi')) || []).length;
        return countB - countA;
    }
    useEffect(() => {
        cars.sort(customSort);
    }, [state])
    
    return (
        <div className="flex" style={{ padding: "20px" }}>
            <div className="row">
                {cars.slice((page-1)*6, page*6).map((car, index) => (
                    <Card key={index} imgUrl={car.img} name={car.name} />
                ))}
            </div>
            <div style={{
                display: "flex",
                float:"right",
                paddingBottom:"30px",
                paddingRight:"30px"
                }}>
                <button
                disabled={page - 1 <= 0 ? true : false}
                onClick={() => { navigate(`/page/${page-1}`) }}
                style={{padding:"0px", backgroundColor:"#F5F6F5", border: "1px solid #E8ECF4", borderRadius: "10px", boxShadow: "2px 2px 2px 5px #E7E9F0", height:"30px",width:"30px", paddingBottom:"10xp"}}>
                    <img src={Left} style={{height:"20px", width:"15px", paddingTop:"4px"}}/>
                </button>
                <div>
                    {page - 1 <= 0 ? "" : <button style={{
                        margin:"5px", 
                        backgroundColor:"#F5F6F5", 
                        border: "1px solid #E8ECF4",
                        borderRadius: "10px", 
                        boxShadow: "2px 2px 2px 5px #E7E9F0"
                        }} onClick={()=>{ navigate(`/page/${page-1}`) }}>{page - 1}</button>}
                    <button style={{margin:"5px", backgroundColor:"#F5F6F5", borderRadius: "10px", border: "1px solid #E8ECF4", boxShadow: "2px 2px 2px 5px #E7E9F0"}}>{page}</button>
                    {page + 1 > 10 ? "" : <button style={{
                        margin:"5px", 
                        backgroundColor:"#F5F6F5",
                         border: "1px solid #E8ECF4", 
                         borderRadius: "10px", 
                         boxShadow: "2px 2px 2px 5px #E7E9F0"
                         }}onClick={()=>{ navigate(`/page/${page+1}`) }}>{page + 1}</button>}
                </div>
                <button
                disabled={page + 1 > 10 ? true : false}
                onClick={() => { navigate(`/page/${page+1}`) }}
                style={{padding:"0px", backgroundColor:"#F5F6F5", border: "1px solid #E8ECF4", borderRadius: "10px", boxShadow: "2px 2px 2px 5px #E7E9F0", height:"30px",width:"30px", marginTop:"50xp"}}>
                   <img src={Right} style={{height:"20px", width:"15px", paddingTop:"4px"}}/>
                </button>
            </div>
        </div>
    )
}

export default Home