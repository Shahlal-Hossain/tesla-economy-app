import products from '../../productData.json'
import Product from '../Product/Product';
import styled from 'styled-components';



const Home = () => {
    
    

    return (
        <>
        
        <Container>
            {
                products.map(pd => <Product pd={pd}  key={pd.id}></Product>)
            };
        </Container>
        </>
    );
};

export default Home;




const Container =styled.div`
    height: 100wh;
`