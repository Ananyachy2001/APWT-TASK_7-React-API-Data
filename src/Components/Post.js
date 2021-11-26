import React from "react";

const Post = (props)=>{

    const PostStyle={
        backgroundColor: "#7badd1",
        color:"#fff",
        padding: "10px",
    }

    return (
            <div style={PostStyle}>

                <span>Id: {props.id} <b/></span>
                <span>Med name: {props.med_name}<b/></span>
                <span>Med details: {props.med_details}<b/></span>
                <span>Men date: {props.men_date}<b/></span>
                <span>Exp date: {props.exp_date}<b/></span>
                <span>Med category: {props.med_cat}<b/></span>
                <span>Quantity: {props.quantity}<b/></span>
                <br></br>
            </div>
                    
                    
    )

}
export default Post;