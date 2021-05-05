import { useOrderContext } from '../../hooks/useOrderContext';
import './Order.css';
import { typeMenu } from '../../constants/constans';
const Order = () => {

    const { order } = useOrderContext();
    
    const getDetailProduct = () => {
        const listItems = []
        const itemData ={};
        const orderDetail ={};
        if (order) {
            typeMenu.forEach((type) => {
                  if (type.key === order.typeMenu) {
                        orderDetail.description = type.description
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
        <div className='Order mt-3 pt-2 border rounded border-primary'>

            <h3 >Tu pedido</h3>
             { order && ( 
                 <>
                 <div>
                 {orderDetail.description}    
                 </div>
                 { <ul> 
                    {
                        // orderDetail.orderItems.map( (item) =>   (<li key={item.productId}>{item.quantity} x {item.productId}</li>))
                        order.orderItems.map( (item) =>   (<li key={item.productId}>{item.quantity} x {item.title}</li>))
                    }
                 </ul>
                  }
               </>

                )     } 

        </div>
    )
}


export default Order;