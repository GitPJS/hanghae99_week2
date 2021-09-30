import React from "react";
import { loadRankFB } from "./redux/modules/ranking";
// 다른 페이지로 가려면 history 필요
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";

const Ranking = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(loadRankFB());
    },[]);

    const _user_data = useSelector(state => state.ranking.ranking);
    //sorting
    const user_data = _user_data.sort((a, b) => {
        return b.score - a.score;
    });

    return (
        <div>
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    borderBottom: "1px solid #888",
                    width: "100vw",
                    padding: "16px",
                    backgroundColor: "#fff"
                }}>
                {user_data.length}개의 단어가 등록되었습니다.
            </div>
            <div style={{margin: "10vh 0vh"}}>
                {
                    user_data.map((u, idx) => {
                        return (
                            <div
                                key = {idx} 
                                style={{
                                    display: "flex",
                                    border: "1px solid #888",
                                    padding: "15px",
                                    borderRadius: "20px",
                                    margin : "15px",
                                    backgroundColor : "#fff"
                                    
                                }}>
                                
                                <div>
                                    <h1 style = {{textAlign : "center", color : "midnightblue"}}>{u.word}</h1>
                                    <hr style = {{backgroundColor : "#5D2FC1", height : "3px", borderRadius : "50px", width : "280px"}}/>
                                    <hr style = {{backgroundColor : "#FEC400", height : "3px", borderRadius : "50px", width : "280px"}}/>
                                    <p style={{color : "#1D2A57",fontSize : "11px", textDecoration : "underline", textAlign :"left"}}>설명</p>
                                    <p style={{color : "#1D2A57", textAlign : "left"}}>{u.info}</p>
                                    <p style={{color : "#1D2A57", fontSize : "11px", textDecoration : "underline",  textAlign :"left"}}>예시</p>
                                    <p style={{color : "skyblue", textAlign : "left"}}>{u.example}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div
                style={{
                    position: "fixed",
                    bottom: "110px",
                    width: "90vw",
                    padding : "15px",
                    left: 0,
                    top : 680,
                    bottom : 0,
                    borderTop: "1px solid #888",
                    backgroundColor : "#fff",
                    heigth : "100px"
                }}
                onClick={() => {
                    history.push("/message");
                }}>
                뒤로가기
            </div>
        </div>
    )
}

export default Ranking;