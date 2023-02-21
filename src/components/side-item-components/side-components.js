import '../../style-components/side-item-style/side-item.css'

function SideItem(props) {
    return (
      <div className="side-item">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        {props.line}
      </div>
    );
}
  
export default SideItem;