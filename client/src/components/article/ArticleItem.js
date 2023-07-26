import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { deleteArticle } from '../../js/actions/articleAction';

import "./ArticleItem.css"
import { setAlert } from '../../js/actions/alertAction';
import Swal from "sweetalert2"
function ArticleItem({article ,getArticle}) {
    const { user ,loading} = useSelector((state) => state.auth);
    const dispatch = useDispatch()

    
    const deleteArticles=()=>{
  
  if (user.id === article.user.id) {
        
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
  dispatch(deleteArticle(article._id))
  
    
    
  Swal.fire(
    'Deleted!',
    'Your file has been deleted.',
    'success'
  )
}
})
}else {
Swal.fire({
icon: 'error',
title: 'Oops...',
text: 'you are not authorise to delete this article',
})
}
}
    return (
        
      <div>
      <ul className="products">
     
        <li key={article._id}>
          <div className="product">
        
            <div className="title">{article && article.title}</div>
            <div className="date">{article  && article .date}</div>
            <div className="product-brand">{article  && article.category}</div>
            <div className="description">{article  && article.content}</div>
            <div className="btns">
           
    <button type="submit" className="btn1" onClick={deleteArticles}>Delete</button> 
      <button type="submit" className="btn2" onClick={()=>getArticle(article)}>Edit</button>
    </div>
          </div>
        </li>
      
    </ul>
    <div>
      
    </div>
    </div>

 
 
    )
}


export default ArticleItem