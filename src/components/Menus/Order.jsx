import { useOrderContext } from '../../hooks/useOrderContext';
import './Order.css';
import { typeMenu } from '../../constants/constans';
const Order = () => {

    const { order } = useOrderContext();

    const getDetailProduct = () => {
        const listItems = []
        const itemData = {};
        const orderDetail = {};
        if (order) {
            typeMenu.forEach((type) => {
                if (type.key === order.typeMenu) {
                    orderDetail.description = type.description
                    orderDetail.price = type.price;
                }
            })

            order.orderItems.forEach((item) => {
                itemData.productId = item.productId;
                itemData.quantity = item.quantity;
                //     itemData.description = getDescProduct(item.productId)
                itemData.description = item.description;
                listItems.push(itemData);

            })
            orderDetail.orderItems = listItems;
            return orderDetail

        }
        else {
            return null
        }

    };

    const orderDetail = getDetailProduct();

    return (
        <div className='Order mt-3 pt-2 px-5 border rounded border-primary'>

            <h3 >Tu pedido</h3>
            { order && (
                <>
                    <div className="d-flex flex-row justify-content-between">
                        <p className='paragraph'>  {orderDetail.description}  </p>
                        <p className='paragraph'>Precio: {orderDetail.price} €</p>
                    </div>
                    { <ul className="list-unstyled list-items">
                        {
                            order.orderItems.map((item) => (<li key={item.productId}>{item.quantity} x {item.title}</li>))
                        }
                    </ul>
                    }

                    <div className="border-bottom border-1 border-dark" style={{ height: "1px", width: "100%" }}></div>
                    <div className="d-flex flex-row justify-content-between total-order">
                        <p>Total:</p>
                        <p>{orderDetail.price} €</p>

                    </div>
                </>

            )}

        </div>
    )
}


export default Order;