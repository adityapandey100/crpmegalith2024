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
import imagee from '../../Assets/images/imagee.jpg'
import './Responsibilities.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import '../Background/Background1.css'

function Responsibilities () {
  const cardsContent = [
    {
      responsibility: 'Smt Fnnnnn',
      description: 'Certificate of Appreciation'
    },
    {
      responsibility: 'Smt Fnnnnn',
      description: 'Certificate of Appreciation'
    },
    {
      responsibility: 'Smt Fnnnnn',
      description: 'Certificate of Appreciation'
    },
    {
      responsibility: 'Smt Fnnnnn',
      description: 'Certificate of Appreciation'
    },
    {
      responsibility: 'Smt Fnnnnn',
      description: 'Certificate of Appreciation'
    },
    {
      responsibility: 'Smt Fnnnnn',
      description: 'Certificate of Appreciation'
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
                        src={imagee}
                        alt='imagee'
                        className='card-image-r'
                      ></img>
                    </div>
                    <div className='card-back-r'>
                      <img
                        src={imagee}
                        alt='imagee'
                        className='card-image-r'
                      ></img>
                      <h1 className='card-r-title'>{card.responsibility}</h1>
                      <p>{card.description}</p>
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

