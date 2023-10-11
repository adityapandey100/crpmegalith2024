// import React from 'react'
// import imagee from '../../Assets/images/imagee.jpg'
// import './Incentives.css'
// import { motion } from 'framer-motion'
// import { fadeIn } from '../variants'

// function Incentives () {
//   const cardsContent = [
//     {
//       incentive: 'Certification',
//       description: 'Certificate of Appreciation!'
//     },
//     {
//       incentive: 'Free Accomodation',
//       description: 'Free accommodation & Registration in Megalith 2023!'
//     },
//     {
//       incentive: 'Endorsement',
//       description: 'Endorsement for your skills in Linkedin!'
//     },
//     {
//       incentive: 'Leadership',
//       description: 'Develop Leadership Skills!'
//     },
//     {
//       incentive: 'Network',
//       description: 'Build a network in your college!'
//     },
//     {
//       incentive: 'Merchandise',
//       description: 'Grab Official Megalith 2023 Merchandises!'
//     }
//   ]

//   return (
//     <div className='incentives'>
//       <h1 className='incentives-title'>Incentives</h1>
//       <div className='cards-container'>
//         {cardsContent.map((card, index) => {
//           return (
//             <motion.div
//               variants={fadeIn('right', 0.3)}
//               initial='hidden'
//               whileInView={'show'}
//               viewport={{ once: false, amount: 0.3 }}
//               className='card'
//               key={index}
//             >
//               <img src={imagee} className='card-img' alt='imageee' />
//               <div className='card-body'>
//                 <h1 className='card-title'>{card.incentive}</h1>
//                 <p className='card-info'>{card.description}</p>
//               </div>
//             </motion.div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default Incentives

import React from 'react'
import imagee from '../../Assets/images/imagee.jpg'
import './Incentives.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import "../Background/Background.css"

function Incentives () {
  const cardsContent = [
    {
      incentive: 'Certification',
      description: 'Certificate of Appreciation!',
      image:require('../../Assets/images/incentives-1.jpg')
    },
    {
      incentive: 'Free Accomodation',
      description: 'Free accommodation & Registration in Megalith 2023!',
      image:require('../../Assets/images/incentives-2.jpg')
    },
    {
      incentive: 'Endorsement',
      description: 'Endorsement for your skills in Linkedin!',
      image:require('../../Assets/images/incentives-3.jpg')
    },
    {
      incentive: 'Leadership',
      description: 'Develop Leadership Skills!',
      image:require('../../Assets/images/incentives-4.jpg')
    },
    {
      incentive: 'Network',
      description: 'Build a network in your college!',
      image:require('../../Assets/images/incentives-5.jpg')
    },
    {
      incentive: 'Merchandise',
      description: 'Grab Official Megalith 2023 Merchandises!',
      image:require('../../Assets/images/incentives-6.jpg')
    }
  ]

  return (
    <div className='incentives' id='incentives'>
    <div className='responsi'>
    <div className="area" >
            <ul className="circles">
    <h1 className='incentives-title'>Incentives</h1>
    <div className='cards-container'>
        {cardsContent.map((card, index) => {
          return (
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='card'
              key={index}
            >
              <img src={card.image} className='card-img' alt='imageee' />
              <div className='card-body'>
                <h1 className='card-title'>{card.incentive}</h1>
                <p className='card-info'>{card.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div>

    </div>
    
    </div>
  )
}

export default Incentives

