
function Joke({ setup, punchline, onDelete }) {
    return (
      <div className="joke-card">
        <p className="setup">{setup}</p>
        <p>{punchline}</p>
        <button onClick={onDelete}>Delete</button>
      </div>
    );
  }
  
  export default Joke;