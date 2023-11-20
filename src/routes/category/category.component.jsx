import { useState, useEffect, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { selectCategoriesMap } from '../../store/categories/categories.selectors'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component'
import { CategoryContainer, CategoryTitle } from './category.styles'


const Category = () => {
    const { category } = useParams()
    const categoriesMap = useSelector(selectCategoriesMap)
    const [ products, setProducts ] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
        window.scrollTo(0, 0);
    }, [category, categoriesMap])

    

    return (
        <Fragment>
            <CategoryTitle as='h2'>{ category.toUpperCase() }</CategoryTitle>
            <CategoryContainer>
                { 
                    products &&
                    products.map(product => <ProductCard key={product.id} product={product} /> )        
                }
            </CategoryContainer>
        </Fragment>
    )
}

export default Category