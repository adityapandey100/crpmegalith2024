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
      description: 'Certificate of Appreciation!'
    },
    {
      incentive: 'Free Accomodation',
      description: 'Free accommodation & Registration in Megalith 2023!'
    },
    {
      incentive: 'Endorsement',
      description: 'Endorsement for your skills in Linkedin!'
    },
    {
      incentive: 'Leadership',
      description: 'Develop Leadership Skills!'
    },
    {
      incentive: 'Network',
      description: 'Build a network in your college!'
    },
    {
      incentive: 'Merchandise',
      description: 'Grab Official Megalith 2023 Merchandises!'
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
              <img src={imagee} className='card-img' alt='imageee' />
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

