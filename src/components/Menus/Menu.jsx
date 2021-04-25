import React, { Fragment, useEffect, useState } from 'react';
import { getProductsList } from '../../services/ProductService';
import Navbar from '../navbar/Navbar';
import Products from './Products';
import SyncLoader from 'react-spinners/SyncLoader';




const Menu = () => {

  // state for type of course

  // Tengo que darle como valor por defecto main
  // tengo que cambiar el valor cada vez que se cambie de pestaña
  const [course, setCourse] = useState('starter')

  // state for list of products
  const [products, setProducts] = useState([])
 




  // OJO ahora no depende de nada para ejecutarse. debo añadir en el segundo parametro que se ejecute cada vez que cambie el course
  useEffect(() => {
    getProductsList()
      .then((dishes) => {
        setProducts(dishes)
   

      })
  }, [])


  return (
    <div className="Menu">
      <Navbar />

     {
       (!products)
       ?
       (
           <div className="text-center">
               <SyncLoader color="blue" />
           </div>
       )
       : (
         <Fragment>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
            Entrante
      </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
            Principal
      </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
            Postre
      </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="extra-tab" data-bs-toggle="tab" data-bs-target="#extra" type="button" role="tab" aria-controls="extra" aria-selected="false">
            Extra
      </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="finalizar-tab" data-bs-toggle="tab" data-bs-target="#finalizar" type="button" role="tab" aria-controls="finalizar" aria-selected="false">
            Finalizar
      </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <Products products={products} />
        </div>
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <p>
            Placeholder content for the tab panel. This one relates to the home tab. Takes you miles high, so high, 'cause she’s got that one international smile. There's a stranger in my bed, there's a pounding in my head. Oh, no. In another life I would make you stay. ‘Cause I, I’m capable of anything. Suiting up for my crowning battle. Used to steal your parents' liquor and climb to the roof. Tone, tan fit and ready, turn it up cause its gettin' heavy. Her love is like a drug. I guess that I forgot I had a choice.
          </p>

        </div>
        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          <p>
            Placeholder content for the tab panel. This one relates to the home tab. Takes you miles high, so high, 'cause she’s got that one international smile. There's a stranger in my bed, there's a pounding in my head. Oh, no. In another life I would make you stay. ‘Cause I, I’m capable of anything. Suiting up for my crowning battle. Used to steal your parents' liquor and climb to the roof. Tone, tan fit and ready, turn it up cause its gettin' heavy. Her love is like a drug. I guess that I forgot I had a choice.
          </p>

        </div>
        <div className="tab-pane fade" id="extra" role="tabpanel" aria-labelledby="extra-tab">
          <p>
            Placeholder content for the tab panel. This one relates to the home tab. Takes you miles high, so high, 'cause she’s got that one international smile. There's a stranger in my bed, there's a pounding in my head. Oh, no. In another life I would make you stay. ‘Cause I, I’m capable of anything. Suiting up for my crowning battle. Used to steal your parents' liquor and climb to the roof. Tone, tan fit and ready, turn it up cause its gettin' heavy. Her love is like a drug. I guess that I forgot I had a choice.
          </p>

        </div>
        <div className="tab-pane fade" id="finalizar" role="tabpanel" aria-labelledby="finalizar-tab">
          <p>
            Placeholder content for the tab panel. This one relates to the home tab. Takes you miles high, so high, 'cause she’s got that one international smile. There's a stranger in my bed, there's a pounding in my head. Oh, no. In another life I would make you stay. ‘Cause I, I’m capable of anything. Suiting up for my crowning battle. Used to steal your parents' liquor and climb to the roof. Tone, tan fit and ready, turn it up cause its gettin' heavy. Her love is like a drug. I guess that I forgot I had a choice.
          </p>

        </div>
      </div>

         </Fragment>



       )
     }

    </div>

  )

}

export default Menu;