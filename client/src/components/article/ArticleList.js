import React,{useEffect,useState} from "react";


import { addArticle, editArticle, getArticles } from '../../js/actions/articleAction';
import {useDispatch,useSelector} from "react-redux"
import Spinner from "../layout/Spinner"
import AddArticle from './AddArticle';
import ArticleItem from './ArticleItem';
import { setAlert } from "../../js/actions/alertAction";
import Swal from "sweetalert2"
function ArticleList() {
    const [title, setTitle] = useState("");
   
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");
    const [id, setId] = useState(0)
    const [edit, setEdit] = useState(false)
 
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.article.articles);
    const { isLoading } = useSelector((state) => state.article);
    const { user } = useSelector((state) => state.auth);
  
 
 
   useEffect(() => {
     dispatch(getArticles());
   }, []);
 
   const addarticle = () => {
 
    if( (title.trim() !== "")  && (category.trim() !== "") && (content.trim() !== "") && (date.trim() !== "")){
     
     dispatch(addArticle({ title,category,content,date }));
   
     setTitle('');
     
     setCategory('');
     setContent('');
     setDate('');
     Swal.fire('Good job!',"articleadded with success","success")
    
  } else {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'please fill in the fields!!'
  })}}




   const editarticlee=()=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You would save the modified field!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, save modif!'
    }).then((result) => {
      if (result.isConfirmed) {
    
         dispatch(editArticle(id,{id,title,category,content,date}))
        
         Swal.fire(
          'Saved!',
          'Your change has been saved.',
          'success'
        )
      }
    })
    
     
     setEdit(false)
     setTitle("")
   
     setCategory("")
     setContent("")
     setDate("")
     setId(0)
   
   
   }
 
   
   const getArticle=(article)=>{
    if (user.id==article.user.id ){
   
    
    setTitle(article.title)
     setCategory(article.category)
     setContent(article.content)
     setDate(article.date)
     setId(article._id)
     setEdit(true)
    
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'you are not authorise to edit this article!'
      })}
    }

   //spinner
   if (isLoading) {
     return <div><Spinner /></div>
     }
     return (
       
       <div>
        
         <div>
           <AddArticle title={title} category={category}content={content}date={date} 
           setTitle={setTitle} 
           setCategory={setCategory} setContent={setContent}setDate={setDate} 
           
            action={edit? editarticlee : addarticle }
          
           edit={edit} />
 
           </div>
    
   < div>
 { articles.map((article,i)=>
     <ArticleItem key ={i} article={article} getArticle={getArticle} />
 )} 
     </div>
  
     </div>
    
   
     )
 }

export default ArticleList