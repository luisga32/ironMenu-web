import React from 'react';
import './OrderModal.css'


const OrderModal = ({ order, setShowModal }) => {

  return (
    <div className="OrderModal" >

      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel"> {order.id}</h5>
            <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
          </div>
          <div className="modal-body">
            <p>Fecha de su pedido: {order.date}</p>
            <div className="d-flex flex-row justify-content-between">
              <p className='paragraph'> {order.typeMenu}</p>
              <p className='paragraph'>Precio: {order.price} €</p>
              </div>
              <ul className="list-unstyled py-3 list-items">
              {order.productsOrder.map((dish) => <li key={dish._id}> {dish.quantity} x {dish.productId.title}</li> )
                }
              </ul>
                
          
            <div className="border-bottom border-1 border-dark" style={{ height: "1px", width: "100%" }}></div>
            <div className="d-flex flex-row justify-content-between total-order">
              <p>Total:</p>
              <p>{order.price} €</p>

            </div>


          </div>

        </div>
      </div>
      <div className="overlay"></div>
    </div>

  )

}

export default OrderModal;