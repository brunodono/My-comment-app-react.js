import "./style.css";
import ProfileImg from "./programmer.png";
import { formatRelative } from "date-fns";

const Comment = (props) => {

    const {name, email, message, date, onDeleteComment} = props;

    return (

        <div className="comment">

            <div className="profile-img">
                <img src={ProfileImg} alt="User Avatar"/>
            </div>

            <div className="content">
                <h2 className="name">{name}</h2>
                <p className="email">{email}</p>
                <p className="message">{message}</p>
                <p className="date">{formatRelative(date, new Date())}</p>
                <button className="delete" onClick={onDeleteComment}>&times;</button>
            </div>
            
        </div>
    );
};

export default Comment;