import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import People from '../people.png'
import Pump from '../pump.png'
import Speed from '../speed.png'
import Handle from '../handle.png'
import likedlike from '../like.png'
import unlike from '../unlike.png'

const Card = (props) => {
    console.log(props);
    const [like, setLike] = useState(false);
    const handleClick = () => {
        setLike(!like);
    }
    return (
        <div className="col-4" style={{ padding: "20px" }}>
            <div style={{
                width: "31rem",
                backgroundColor: "#F0F4FA",
                padding: "15px",
                borderRadius: "20px",
                boxShadow: "2px 2px 2px 5px #E7E9F0"
            }}>
                <img src={props.imgUrl}
                    style={{ borderRadius: "15px", height: "304px", width: "456px" }}
                />
                <div style={{ display: "flex", padding: "15px", justifyContent: "space-between" }}>
                    <div style={{
                        color: "#47475F",
                        fontWeight: "600",
                        fontSize: "24px"
                    }}>
                        {props.name}
                    </div>
                    <div style={{
                        border: "3px dotted #BBDAF6",
                        borderRadius: "15px",
                        padding: "4px",
                        width: "60px",
                        color: "#47475F",
                        fontWeight: "bold"
                    }}>
                        2022
                    </div>
                </div>
                <div style={{ paddingBottom: "10px", paddingLeft: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", width: "50%" }}>
                            <img src={People} style={{ height: "30px" }}>
                            </img>
                            <div style={{
                                color: "#47475F",
                                fontWeight: "600",
                                fontSize: "18px",
                                paddingLeft: "10px"
                            }}>
                                4 People
                            </div>
                        </div>
                        <div style={{ display: "flex", alignContent: "left", width: "50%" }}>
                            <img src={Pump} style={{ height: "30px" }}>
                            </img>
                            <div style={{
                                color: "#47475F",
                                fontWeight: "600",
                                fontSize: "18px",
                                paddingLeft: "10px"
                            }}>
                                Hybrid
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ paddingBottom: "20px", paddingLeft: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", width: "50%" }}>
                            <img src={Speed} style={{ height: "30px" }}>
                            </img>
                            <div style={{
                                color: "#47475F",
                                fontWeight: "600",
                                fontSize: "18px",
                                paddingLeft: "10px"
                            }}>
                                6.1 km / 1-litre
                            </div>
                        </div>
                        <div style={{ display: "flex", alignContent: "left", width: "50%" }}>
                            <img src={Handle} style={{ height: "30px" }}>
                            </img>
                            <div style={{
                                color: "#47475F",
                                fontWeight: "600",
                                fontSize: "18px",
                                paddingLeft: "10px"
                            }}>
                                Automatic
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: "100%", border: "1px solid #E8ECF4", paddingLeft: "40px" }}></div>
                <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: "20px", paddingTop: "5px" }}>
                    <div style={{
                        color: "#47475F",
                        fontWeight: "600", fontSize: "26px"
                    }}>440$ / month</div>
                    <div style={{ display: "flex" }}>
                        <div style={{ backgroundColor: "#DBEAFA", padding: "6px", borderRadius: "10px" }}>
                            {like ? <img src={likedlike} onClick={handleClick} style={{ height: "30px" }} />
                                :
                                <img style={{ height: "30px" }} src={unlike} onClick={handleClick} />}</div>
                        <div>
                            <Container><button style={{ backgroundColor: "#4999EC", color: "white", borderRadius: "10px", padding: "6px", paddingLeft: "10px", paddingRight: "10px", border: "1px solid #4999EC" }}>Rent now</button></Container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card