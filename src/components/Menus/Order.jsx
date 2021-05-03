import { useOrderContext } from '../../hooks/useOrderContext';
//import { getProduct } from '../../services/ProductService';
import './Order.css';
import { typeMenu } from '../../constants/constans';
const Order = () => {

    const { order } = useOrderContext();
   

    // const getDescProduct = (id) => {
    //     getProduct(id)
    //     .then((dish) => {
    //         if (dish) {
    //             console.log(dish.title)
    //             return dish.title
    //         } else
    //         return '';
            
    //     })

    // }

    
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
                console.log('itemData: ', itemData)
                listItems.push(itemData);    

            })
            console.log('items: ' , listItems)
            orderDetail.orderItems = listItems;
             return orderDetail

        }
        else {
            return null
        }

    };

    const orderDetail = getDetailProduct();
    console.log('order detail items: ', orderDetail.orderItems);
    orderDetail.orderItems.map( (item) =>  {
        console.log(Object.keys(item));
        console.log('item : ', item)
        
    })

    return (
        <div className='Order mt-3 pt-2 border rounded border-primary'>

            <h3 >Tu pedido</h3>


             { orderDetail && ( 
                 <>
                 <div>
                 {orderDetail.description}    
                 </div>
                 { <ul> 
                    {
                        orderDetail.orderItems.map( (item) =>   (<li key={item.productId}>{item.quantity} x {item.productId}</li>))
                         
                    }
                 </ul>
                  }
               </>

                )     } 

        </div>
    )
}


export default Order;