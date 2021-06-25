 
import React from 'react'
import Card  from './Card'

import image1 from '../img/image1.jpg'
import image2 from '../img/image2.jpg'
import image3 from '../img/image3.jpg'

const cards = [
    {
        id:1,
        title:'Ciclistas Colombianos',
        image: image1,
        URL: 'https://colombiamundociclistico.com'
    },
    {
        id:2,
        title:'Ciclista españoles',
        image: image2,
        URL: 'https://colombiamundociclistico.com'
    },
    {
        id:3,
        title:'Ciclista chinos',
        image: image3,
        URL: 'https://colombiamundociclistico.com'
    }
] 


 function Cards(){
     return (
         <div className="container d-flex justify-content-center aling-items-center h-100">
             <div className="row">
                {
                    cards.map(cards => (
                        <div className="col-md-4" key={cards.id}>
                            <Card title={cards.title} imageSource={cards.image} url={cards.url} />
                        </div>
                    ))
                }
             </div>
         </div>
     )
 }

 export default Cards

 