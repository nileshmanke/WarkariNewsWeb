import React, { useContext } from "react";
import UserContext from "./UserContext";

const NewsItem = ({ title, description, src, url, author, date, source }) => {

 const {color}= useContext(UserContext)
  return (
    <div className="my-3 hover:translate-y-[-4px] ">
      <div className={`card overflow-hidden w-[400px] ${color ? "bg-[#353b48] text-white":"bg-white text-black"}`}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}
        >
          <span className="badge rounded-pill bg-danger"> {source} </span>
        </div>
        <img
          src={src }
          className="card-img-top  w-[400px] h-[200px]"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title text-xl font-semibold ">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text ">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{' '}
              {new Date(date).toGMTString()}
            </small>
          </p>

          <div className="flex justify-between"> 
          
          <div>
          <a
            rel="noreferrer"
            href={url}
            target="_blank"
            className="btn btn-sm btn-dark mt-3"
          >
            Read More
          </a>
          </div>

          <div className="flex text-xl gap-3 mt-4"> 
          
<i className="fa-brands fa-facebook"></i>
<i className="fa-brands fa-instagram"></i>
<i className="fa-brands fa-square-whatsapp"></i>
  
   </div>
          </div>
         





        </div>
      </div>
    </div>
  );
};

export default NewsItem;





// import React from 'react'

// const NewsItem = (props)=> {
//         let { title, description, imageUrl, newsUrl, author, date, source } = props;
//         return (
            // <div className="my-3">
            //     <div className="card">
            //         <div style={{
            //             display: 'flex',
            //             justifyContent: 'flex-end',
            //             position: 'absolute',
            //             right: '0'
            //         }
            //         }> 
            //             <span className="badge rounded-pill bg-danger"> {source} </span>
            //         </div>
            //         <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
            //         <div className="card-body">
            //             <h5 className="card-title">{title}  </h5>
            //             <p className="card-text">{description}</p>
            //             <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
            //             <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            //         </div>
            //     </div>
            // </div>
//         )
     
// }

// export default NewsItem
