import "./directory-item.styles.scss"

const DirectoryItem = ({category})=>{
    const {title,imgUrl} = category
    return(
        <div className="directory-item-container">
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${imgUrl})`,
            }}
          />
          <div className="directory-item-body">
            <h2>{title}</h2>
            <p>shop now</p>
          </div>
        </div>
    )
}

export default DirectoryItem