import React from "react";
import dictionary from "./dictionary.jpg";
import Button from '@material-ui/core/Button';
import {db} from "./firebase";
import { collection, addDoc } from "@firebase/firestore";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMessage } from "./redux/modules/user";
import {addRank} from "./redux/modules/ranking";

const Message = (props) => {

    const history = useHistory();
    const word_ref = React.useRef(null);
    const info_ref = React.useRef(null);
    const example_ref = React.useRef(null);
    const dispatch = useDispatch();



    return (
        <div style={{
            textAlign: "center"
        }}>
            <img src={dictionary} style={{
                 maxWidth : "60vh",
                 margin : "15px 20px 15px 0px",
                 borderRadius : "100px",
                 width : "100%",
                 display : "flex"
                 
            }}/>
            <h3>단어 추가하기</h3>
            <div style={{
                dispaly : "flex",
                flexDirection : "column",

            }}>
          단어<br/>
            <input ref={word_ref}
            style={{
                margin : "10px",
                width : "300px",
                height : "35px"
            }}
            placeholder="단어를 입력해주세요"/><br/>
            설명 <br/>
            <input ref={info_ref} style={{
                 margin: "10px",
                 width : "300px",
                 height : "35px"
            }}
            placeholder="뜻을 입력해주세요"/><br/>
            예시 <br/>
            <input ref={example_ref} style={{
                 margin : "10px",
                 width : "300px",
                 height : "80px"
            }}
            placeholder="예시를 입력해주세요"/><br/>
            </div>
            <br/>
   
            <Button 
             variant="contained"
             style = {{background : "#1976D2", 
                       color : "white", 
                       fontWeight : "bold" }}
            onClick={async() => {
                dispatch(setMessage(info_ref.current.value));
                dispatch(
                    addRank({
                        word: word_ref.current.value,
                        info: info_ref.current.value,
                        example: example_ref.current.value
                    })
                );
                const docRef = await addDoc(collection(db, "ranking"), {
                    word: word_ref.current.value,
                    info: info_ref.current.value,
                    example: example_ref.current.value
                });
            }}>단어 추가하기</Button>
            <Button style = {{
                marginLeft : "25px",
                background : "#1976D2", 
                color : "white", 
                fontWeight : "bold"}}
                onClick={() => {history.push("/ranking");}}>나만의 단어장으로 가기</Button>
        </div>
    )
}

export default Message;