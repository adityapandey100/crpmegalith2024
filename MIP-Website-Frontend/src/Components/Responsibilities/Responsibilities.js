// import React from 'react'
// import imagee from '../../Assets/images/imagee.jpg'
// import './Responsibilities.css'
// import { motion } from 'framer-motion'
// import { fadeIn } from '../variants'

// function Responsibilities () {
//   const cardsContent = [
//     {
//       responsibility: 'Smt Fnnnnn',
//       description: 'Certificate of Appreciation'
//     },
//     {
//       responsibility: 'Smt Fnnnnn',
//       description: 'Certificate of Appreciation'
//     },
//     {
//       responsibility: 'Smt Fnnnnn',
//       description: 'Certificate of Appreciation'
//     },
//     {
//       responsibility: 'Smt Fnnnnn',
//       description: 'Certificate of Appreciation'
//     },
//     {
//       responsibility: 'Smt Fnnnnn',
//       description: 'Certificate of Appreciation'
//     },
//     {
//       responsibility: 'Smt Fnnnnn',
//       description: 'Certificate of Appreciation'
//     }
//   ]

//   return (
//     <div>
//       <h1 className='responsibilities-title'>Responsibilities</h1>
//       <div className='cards-container-r'>
//         {cardsContent.map((card, index) => {
//           return (
//             <motion.div
//               variants={fadeIn('left', 0.3)}
//               initial='hidden'
//               whileInView={'show'}
//               viewport={{ once: false, amount: 0.3 }}
//               key={index}
//             >
//               <div className='card-r'>
//                 <div className='card-front-r'>
//                   <img src={imagee} alt='imagee' className='card-image-r'></img>
//                 </div>
//                 <div className='card-back-r'>
//                   <img src={imagee} alt='imagee' className='card-image-r'></img>
//                   <h1 className='card-r-title'>{card.responsibility}</h1>
//                   <p>{card.description}</p>
//                 </div>
//               </div>
//             </motion.div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default Responsibilities



import React from 'react'
import './Responsibilities.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import '../Background/Background1.css'

function Responsibilities () {
  const cardsContent = [
    {
      responsibility: '',
      description: 'Publicize Megalith in a particular college or on social media handles, along with staying in touch with our team',
      image:require('../../Assets/images/responsibilities-1.jpg')
    },
    {
      responsibility: '',
      description: 'Create awareness and buzz about megalith, IIT Kharagpur by acting as the point of contact between us and your college',
      image:require('../../Assets/images/responsibilities-2.jpg')
    },
    {
      responsibility: '',
      description: 'Regularly update us on your work progress',
      image:require('../../Assets/images/responsibilities-3.jpg')
    },
    {
      responsibility: '',
      description: 'Leverage your social media network for the growth of the fest',
      image:require('../../Assets/images/responsibilities-4.jpg')
    },
    {
      responsibility: '',
      description: 'Working with us to get the participation of even better quality for various events that take place during the fest time',
      image:require('../../Assets/images/responsibilities-5.jpg')
    },
    {
      responsibility: '',
      description: 'Coordinate with Megalith, IIT Kharagpur to organize events in their college',
      image:require('../../Assets/images/responsibilities-6.jpg')
    }
  ]

  return (
    <div className='responsibilities-div' id='responsibilities'>
      <div class='full-screen'>
        <div>
          <h1 className='responsibilities-title'>Responsibilities</h1>
          <div className='cards-container-r'>
            {cardsContent.map((card, index) => {
              return (
                <motion.div
                  variants={fadeIn('left', 0.3)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.3 }}
                  key={index}
                >
                  <div className='card-r'>
                    <div className='card-front-r'>
                      <img
                        src={card.image}
                        alt='imagee'
                        className='card-image-r'
                      ></img>
                    </div>
                    <div className='card-back-r'>
                      <img
                        src={card.image}
                        alt='imagee'
                        className='card-image-r'
                      ></img>
                      <h1 className='card-r-title'>{card.responsibility}</h1>
                      <p className='description'>{card.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Responsibilities

