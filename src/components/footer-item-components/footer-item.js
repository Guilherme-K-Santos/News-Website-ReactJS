import '../../style-components/footer-item-style/footer-item.css'

function FooterItem(props) {
    const { imageUrl, alt } = props

    return (
      <div className="footer-item">
        <img src={imageUrl} className="pictures" alt={alt} />
        <div>
            <h1>{props.number}</h1>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
      </div>
    );
}

export default FooterItem;