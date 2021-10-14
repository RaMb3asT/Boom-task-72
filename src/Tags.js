export default function Tags(props) {
    const listOfTags = props.tags.map(tag => { return <div className="tag">#{tag}</div> })
    return <div className="tags">
        {listOfTags}
    </div>;
}