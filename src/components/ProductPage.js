import { useNavigate, useParams } from "react-router-dom";
const ProductPage = ()=>{
    const { id } = useParams();
    return(
    <><h1>선택하신 상품은 {id} 번 상품입니다</h1></>)}
export default ProductPage;

