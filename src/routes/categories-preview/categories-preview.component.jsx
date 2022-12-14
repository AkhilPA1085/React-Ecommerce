import { Fragment, useContext } from "react"
import CategoryPreview from "../../components/category-preview/category-preview.component"

import { CategoriesContext } from "../../contexts/categories.context"


const CategoriesPreview = () =>{
    const{categoriesMap} = useContext(CategoriesContext)
    return(
        <Fragment>
            {
                Object.keys(categoriesMap).map(title =>{
                    const products = categoriesMap[title]
                    return (
                        <div className="body-container">
                            <CategoryPreview key={title} title={title} products={products}/>
                        </div>
                    )
                })
            }
        </Fragment>
    )
}
export default CategoriesPreview