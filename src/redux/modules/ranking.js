// 랭킹 정보를 넣어줄거야
// 랭킹 정보에 하나를 더 추가해 줄거야 (추가되는 정보는 퀴즈 푼 유저 정보야 {점수, 이름, 메세지})
import {db} from "../../firebase";
import {collection, doc, getDoc, getDocs, addDoc} from "firebase/firestore";

const LOAD_RANK = "ranking/LOAD_RANK";
const ADD_RANK = "ranking/ADD_RANK";


export const loadRank = (ranking_list) => {
    return{type:LOAD_RANK, ranking_list};
}
export const addRank = (user_ranking) => {
    return{type: ADD_RANK, user_ranking}
}

const initialState = {
    title : "My Dictionary",
    ranking : [],
};

export const loadRankFB = () => {
    return async function (dispatch) {
        //파이어스토어에서 랭킹정보 가져오기
        const ranking_data = await getDocs(collection(db, "ranking"));
        console.log (ranking_data);
        let ranking_list = [];

        ranking_data.forEach((r) => {
            ranking_list.push({...r.data()});
        })

        console.log(ranking_list);
        //넣어준다.
        dispatch(loadRank(ranking_list));
    }
}

export default function reducer(state=initialState, action ={}){
    switch (action.type) {
        case "ranking/LOAD_RANK": {
            return{...state, ranking: action.ranking_list};
        }
        case "ranking/ADD_RANK": {
            console.log(action);
            console.log(state);
            const new_ranking_list = [...state.ranking, action.user_ranking];
        return {...state, ranking : new_ranking_list};
    }

    default:
        return state;
    }
}