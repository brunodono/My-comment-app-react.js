import "./style.css"
const CommentForm = (props) => {

    const { onAddComment, onFieldChanged, form} = props;

    return (

        <form className="comment-form" onSubmit={onAddComment}>

        <h2>Add a comment</h2>

        <div>
          <input 
          onChange={onFieldChanged}
          value={form.name}
          type="text" 
          name="name" 
          placeholder="Your name"
          required="required"
          />
        </div>

        <div>
          <input 
          onChange={onFieldChanged}
          value={form.email}
          type="email"
          name="email"
          placeholder="example@email.com"
          required="required"
          />
        </div>

        <div>
          <textarea
          onChange={onFieldChanged}
          value={form.message}
          name="message"
          rows="4"
          placeholder="Message"
          required="required" />
          </div>

          <button type='Submit'>Add comment</button>

      </form>

    )
};

export default CommentForm;