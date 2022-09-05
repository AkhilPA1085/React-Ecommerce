import { useNavigate } from "react-router-dom"

import "./directory-item.styles.scss"

const DirectoryItem = ({category})=>{
    const {title,imgUrl,route} = category
    const navigate = useNavigate();
    const navigateHandler =()=> navigate(route)
    return(
        <div className="directory-item-container" onClick={navigateHandler}>
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