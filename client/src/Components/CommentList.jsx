export default function CommentList(props) {
    return (
        <div className="container">
        {props.comments.length === 0 ? <div><p>Add comments here!</p></div> : (props.comments.map((item, index) => (
            <div
            className="card mb-3"
            key={index}>
                <div className="card-body">
                    <p className="card-text">{item}</p>
                </div>
            </div>
        )))}
        </div>
    );
}
