import CreateImage from './ProfileImage';
import CreateUser from './User';
import CreateTime from './Timestamp';
import CreateMessage from './Message';
import CreateActions from './Actions';

function Tweet( props) {
 console.log("prooops",props)
 console.log("image",props.tweet.user.image)
  return (
    <div className="tweet">
    <CreateImage image={props.tweet.user.image} />
   
      <div className="body">
        <div className="top">
           <CreateUser userData={props.tweet.user}/>
           <CreateTime time={props.tweet.timestamp}/>
          </div>
          <CreateMessage message ={props.tweet.message}/>
          <CreateActions/>
      </div>
      <i class="fas fa-ellipsis-h"></i>
    </div>
    
    
  )
  
}

export default Tweet;
