import React from "react";
import Article from "./Article";

function ArticleList({title, date, preview}){
    return(
        <main>
            <Article title={title}/>      
            <Article date={date}/>      
            <Article preview={preview}/>      
        </main>
    )
}
export default ArticleList;