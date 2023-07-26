import axios from "axios";
import {
      GET_ARTICLE,
      SET_LOADING,
      ARTICLE_ERROR
  } from "../const/actionTypes";
  import { setAlert } from "./alertAction";

  //Add  article
  
export const addArticle = (newArticle) => async dispatch => {
  
  
      
    try {
   
      const res = await axios.post("/api/article/addArticle", newArticle);
      
     dispatch(getArticles());
     
    } catch (err) {
        dispatch({
          type: ARTICLE_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status }
        });
  };
}

  
  //Get article
export const getArticles = () => async dispatch => {
    try {
      const res = await axios.get("/api/article/");
      dispatch({
        type: GET_ARTICLE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ARTICLE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  
  

  
 
  //delete article
  export const deleteArticle =(id)=> dispatch => {
    dispatch(setLoading());
    
    try {
    
    const res =axios.delete(`/api/article/deleteArticle/${id}`);
      dispatch(getArticles());
      
      
    } catch (err) {
      dispatch({
        type: ARTICLE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
    };
 
    //editannonce ar
    export const editArticle=(id,updateArticle)=>dispatch=>{
        dispatch(setLoading()); 
    try {
   
        const res =axios.put(`/api/article/editArticle/${id}`,updateArticle)
        dispatch(getArticles());
     
    } catch (err) {
      dispatch({
        type: ARTICLE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
    };

      const setLoading = () => (dispatch) => {
        dispatch({
          type: SET_LOADING,
        });
      };

