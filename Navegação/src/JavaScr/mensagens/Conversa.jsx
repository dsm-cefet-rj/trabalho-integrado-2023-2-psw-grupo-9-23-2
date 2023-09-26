import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'

export default function Conversa(props) {
  return (
    <>
      if(props.adm === true){
        <div className="col-12">
                <p style= "background-color:blue; text-align:right;" >
                 <b>{props.sender}</b><br />
                   {props.conteudo}<br />
               </p> 
         </div>
      }else{
          <div className="col-12">
                <p style= "background-color:green; text-align:left;" >
                 <b>{props.sender}</b><br/>
                   {props.conteudo}<br/>
               </p> 
         </div>
        
      }
    </>
  );
}