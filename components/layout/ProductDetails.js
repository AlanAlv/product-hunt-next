import styled from '@emotion/styled';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Product = styled.li`
    padding: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E1E1E1;
`;

const ProductDescription = styled.div`
    flex: 0 1 600px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 2rem;

`;

const Title = styled.a`
    font-size: 2rem;
    font-weight: bold;
    margin: 0;

    :hover {
        cursor: pointer;
    }
`

const DescriptionText = styled.p`
    font-size: 1.6rem;
    margin: 0;
    color: #888;
`;

const Comments = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;

    div {
        display: flex;
        align-items: center;
        border: 1px solid #E1E1E1;
        padding: .3rem 1rem;
        margin-right: 2rem;
    }

    img {
        width: 2rem;
        margin-right: 2rem;
    }

    p{
        font-size: 1.6rem;
        margin-right: 1rem;
        font-weight: 700;
        &:last-of-type {
            margin: 0;
        }
    }
`


const Image = styled.img`
    width: 200px;
`;

const Votes = styled.div`
    flex: 0  0 auto;
    text-align: center;
    border: 1px solid #E1E1E1;
    padding: 1rem 3rem;

    div {
        font-size: 2rem;
    }

    p {
        margin: 0;
        font-size: 2rem;
        font-weight: 700;
    }
`;

const ProductDetails = ({product}) => {

    const { id, comments, created, description, company, name, url, imageUrl, votes} = product
    console.log(product);
    return ( 
        <Product>
            <ProductDescription>
                <div>
                    <Image src={imageUrl} />
                </div>

                <div>
                    <Title>{name}</Title>
                    <DescriptionText>{description}</DescriptionText>

                    <Comments>
                        <div>
                            <img src="/static/img/comment.png" alt=""/>
                            <p>{comments.length} Comments</p>
                        </div>
                    </Comments>

                    <p>Published on: {formatDistanceToNow(new Date(created))}</p>
                </div>

            </ProductDescription>

            <Votes>
                <div> &#9650; </div>
                <p>{votes}</p>
            </Votes>
        </Product>
     );
}
 
export default ProductDetails;