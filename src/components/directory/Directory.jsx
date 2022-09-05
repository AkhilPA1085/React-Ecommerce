import DirectoryItem from "../directory-item/directory-item.component"
import './directory.styles.scss'

const categories = [
    {
      id: 1,
      title: "Hats",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidKzuXqw2NphCRVBSx9_NqqfhiWXEmm1FyA&usqp=CAU",
      route:'shop/hats',  
    },
    {
      id: 2,
      title: "Jackets",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1UR8huJNzBSpC4_CD9vpUlxbDpq7GnMbRpQ&usqp=CAU",
      route:'shop/jackets',  
    },
    {
      id: 3,
      title: "Sneakers",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMZ9zEBGEGRBMaweIGA2AABJkk7WTv8dqhKw&usqp=CAU",
      route:'shop/sneakers',
    },
    {
      id: 4,
      title: "Womens",
      imgUrl:
        "https://i.pinimg.com/originals/aa/b3/6b/aab36bc9bcd252406bfd97a4700de0ba.png",
      route:'shop/womens',
    },
    {
      id: 5,
      title: "Mens",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUq8SIWK2QvdaVn5mOv42LUNm43pITlThng&usqp=CAU",
      route:'shop/mens',
    },
  ];

const Directory = () =>{
    return(
        <div className="directory-container">
            {categories.map((category) => (
            <DirectoryItem key={category.id} category={category}/>
            ))}
        </div> 
    )
}

export default Directory