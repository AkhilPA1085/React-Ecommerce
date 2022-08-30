import "./categories.styles.scss";

import Directory from "./components/directory/Directory";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidKzuXqw2NphCRVBSx9_NqqfhiWXEmm1FyA&usqp=CAU",
    },
    {
      id: 2,
      title: "Jackets",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1UR8huJNzBSpC4_CD9vpUlxbDpq7GnMbRpQ&usqp=CAU",
    },
    {
      id: 3,
      title: "Sneakers",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMZ9zEBGEGRBMaweIGA2AABJkk7WTv8dqhKw&usqp=CAU",
    },
    {
      id: 4,
      title: "Womens",
      imgUrl:
        "https://i.pinimg.com/originals/aa/b3/6b/aab36bc9bcd252406bfd97a4700de0ba.png",
    },
    {
      id: 5,
      title: "Mens",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUq8SIWK2QvdaVn5mOv42LUNm43pITlThng&usqp=CAU",
    },
  ];
  return (
    <Directory categories = {categories}/>
  );
};

export default App;
