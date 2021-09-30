import React from "react";
import dictionary from "./dictionary.jpg";
import { useHistory } from "react-router-dom";
import { useSelector} from "react-redux";
import Button from '@material-ui/core/Button';




const Start = (props) => {
  const history = useHistory();
  const title = useSelector(state => state.ranking.title);

  console.log(props);
  return (
    
    <div style = {{
      display : "flex",
      height : "100vh",
      flexDirection : "column",
      padding : "16px",
      boxSizing : "border-box",
      justifyContent : "center",
      width : "100%",
    }}>
      <h1 style={{
        fontSize : "1.5em",
        
      }}> <span style ={{
        backgroundColor : "slateblue",
        color : "white",
        padding : "5px 10px",
        borderRadius : "30px",
        
        
      }}>
        {title}</span></h1>
      <img src={dictionary} style = {{
        maxWidth : "60vh",
        margin : "16px",
        borderRadius : "100px",
        
      }}/>
      
    
      <Button
        className = "start"
        onClick={()=>{
          history.push("/message")
        }}
       style = {{
        padding : "10px",
        backgroundColor : "#dadafc",
        border : "#dadafc",
        borderRadius : "30px",
        margin : "100px 0px",
        color : "white",
        fontSize : "20px",
        fontWeight : "bold",
      }}
      
      onmouseover = "this.style.backgroundColor ='slateblue';"
      >시작하기</Button>
      
    </div>
  );
}

export default Start;