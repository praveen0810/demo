
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
           
              Music
        
          </span>
          <span className="postCat">
            
              Life
           
          </span>
        </div>
        <span className="postTitle">
       Dil Me Mere Khyal Aya
        
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      India should discuss its concerns on terrorism directly with the Taliban,
       said U.S. Special Representative for Afghanistan Reconciliation Zalmay Khalilzad, 
       adding that he had discussed how India could play a “more active role”
       in the Afghan reconciliation process during his talks in Delhi on Thursday.
      </p>
    </div>
  );
}
