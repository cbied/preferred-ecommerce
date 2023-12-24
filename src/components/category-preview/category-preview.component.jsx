import ProductCard from '../product-card/product-card.component';
import { Link } from 'react-router-dom';
import { CategoryPreviewContainer,
         Title, Preview, ViewMore } from './category-preview.styles';
import { SHOP_DATA } from '../../shop-data'
import { useSelector } from 'react-redux';
import { selectCategories } from '../../store/categories/categories.selectors'

const CategoryPreview = ({ title, products }) => {
    const categoiresArray = useSelector(selectCategories)

    return(
        <CategoryPreviewContainer>
            
                <h2>
                    <Title>
                        <Link to={title}>{ title.toUpperCase() }</Link>
                    </Title>
                </h2>
            
            {
                <Preview>
                {
                    categoiresArray.length === 0 ? 
                    SHOP_DATA.slice(0,4)
                    .map((product) => <ProductCard key={product.id} product={product}/>)
                    :
                    products
                    .slice(0,4)
                    .map((product) => <ProductCard key={product.id} product={product}/>)
                }  
                </Preview>
                
            }

            <ViewMore>
                <Link to={title}>View More</Link>
            </ViewMore>
        </CategoryPreviewContainer>
    )
}


export default CategoryPreview