import React, { useState } from 'react'
import "../Style/Rating.css";

// import heart from '../assets/hearts-removebg-preview.png'
// import {thankyou} from '../assets/illustration-thank-you.svg'

import { text } from '@fortawesome/fontawesome-svg-core'

export function Rating(){
  const[selectedRating, setSelectedRating]=useState<number>();
  const[isSubmitted,setIsSubmitted]=useState(false);
  const[comment, setComment]=useState("");
  const[comments, setComments]=useState<string[]>([]);

  const onClickHandler=()=>{
    setComments((comments)=> [...comments, comment]);
  };

  const onChangeHandler=(e:any)=> {
    setComment(e.target.value);
  };

  function handleSelectedRating(rating:number){
    setSelectedRating(rating);
  }

  function handleFormnSubmitted(e:React.FormEvent){
    e.preventDefault();
    setIsSubmitted(true);
  }

  return isSubmitted ? (
     <div className="thankyoupanel-rating">
      {/* <img src={thankyou}/> */}

      <h4 className="selected-rating">You selected {selectedRating} out of 5</h4>
      <h1 className="title-rating">Thank you!</h1>
  
      <p className="description-rating">We appreciate taking the time to give us the rating.
      If you ever need more support don't hesitate to keep in touch. 
      </p>

     </div>
     ) : (

      <form onSubmit={(handleFormnSubmitted)=> setIsSubmitted(true)}
    className="panel-rating">
      {/* <img className="star" src={star} /> */}
      <h1 className="title-rating">How did we do?</h1>
  
      <p className="description-rating">Please Let us know how we did in your support feedback. 
        All feedback is appreciated to help us improve our offering.
      </p>
  
    <div className="group-rating">
      {[1,2,3,4,5].map((rating) =>(

      <button
      type='button'
       onClick={() =>
        handleSelectedRating(rating)} 
        className="rating-rating"> 

      {rating}

      </button>

      ))}
     
    </div>

      <button disabled={selectedRating==undefined} className="submit-rating">Submit</button>
    

      <div className="maincontainor-rating">
        
        <div className="comment_flexbox-rating">

          <h4 className="comment-rating">Give us your Comment</h4>

         {/* <img className="heart" src={heart}/> */}

         <textarea 
         value={comment}
          onChange={onChangeHandler}
           name="write your feedback" id="" className="textarea-rating"></textarea>
          {/* <button  disabled={selectedRating==undefined}  onClick={onClickHandler} className="btn2-rating">Write Comment</button> */}

          

        {/* <div className="comment_containor-rating">{comment}</div> */}
        </div>
      </div>
    </form>
     )
    

     
}