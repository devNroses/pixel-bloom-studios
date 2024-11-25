import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import styles from './App.module.scss';
import DesktopNav from './components/Nav/DesktopNav';
import MobileNav from './components/Nav/MobileNav';
import DesktopProblemAnswer from './components/Problem&Answer/DestopProblemAnswer';
import MobileProblemAnswer from './components/Problem&Answer/MoibleProblemAnswer';

function App() {
   const isTabletOrMobile = useMediaQuery({ query: '(max-width: 968px)' })

   console.log('isTablet/Mobile: ', isTabletOrMobile);
  return (
   <>
    <header>
      {isTabletOrMobile ? <MobileNav /> : <DesktopNav />}
    </header>
    
    <motion.div 
      className={styles.hero}
    >
      <h1>A creative agency with a unique spin.</h1>
      <p>Design subscriptions made for everyone—flexible, hassle-free, and yours to pause or cancel anytime.</p>
      <button>Create Beyond Limits</button>
    </motion.div>

    <div className={styles.miniPortfolio}>
      <p>Portfolio here</p>
    </div>
      
    
      {isTabletOrMobile ? <MobileProblemAnswer /> : <DesktopProblemAnswer />}
       
        <div className={styles.planIncludes}>
          <div className={styles.section}>
            <div>
              
              <p className={styles.moreInfo}> <hr /> included in all monthly plans</p>
              <h2>Exclusive membership benefits</h2>

              <p>
                We will take care of your creative needs. No hit or miss freelancers.
                No lengthy hiring processes. No contracts. Just your hit list of work getting done!
              </p>
            </div>
          </div>
          <div className={styles.section}>
            <ul className={styles.membershipBenefits}>
              <li>
                <p>Design board</p>
                <p>Easily manage your design queue with a Notion board</p>
              </li>
              <li>
                <p>Fast delivery</p>
                <p>Get your designs one at a time in just a few days on average.</p>
              </li>
              <li>
                <p>Fixed monthly rate</p>
                <p>Pay the same fixed price each month</p>
              </li>
              <li>
                <p>Top-notch quality</p>
                <p>Get an experienced senior designer whenever you need it.</p>
              </li>
              <li>
                <p>Flexible and scalable</p>
                <p>Switch between basic or premium as needed and pause or cancel your plan at anytime.</p>
              </li>
              <li>
                <p>You own designs</p>
                <p>Each of your desings is made for you and is 100% yours.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.statement}>
         <p>
          Let pixel bloom take care of the creative and bring your ideas to life
         </p>
        </div>
        <div className={styles.pricing}>
          <div className={styles.section}>
            <div className={styles.joinOptions}>
              <h1>Join <br /> Pixel Bloom</h1>

              <div className={styles.options}>
                  <div className={styles.minorOfferings} role='button'>
                      <p>Book Day Rates</p>
                      <p>
                        $1000
                        <span>/day</span>
                      </p>
                      <p>
                        Can book day rates for up to 12 days at a time. 
                        Delivery of assets will be determined by the 
                        scope of work needed.
                      </p>

                      <a target='_blank'>Book Time</a>
                  </div>
                  <div className={styles.minorOfferings} role='button'>
                      <p>Consultation</p>
                      <p>
                        $500 <span>*up tp 2 hrs</span>
                      </p>
                      <p>
                        Can book up to two hours to review your website 
                        UI/UX experience and will provide a strategy on 
                        how to improve features to drive better 
                        expereinec for your customers. 
                      </p>

                       <a target='_blank'>Book time</a>
                  </div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.packagesBasic}>
              <h2>Base Package</h2>

              <p className={styles.pricingLabel}>$2,995 <span>per month</span></p>
              <p className={styles.pricingDescription}>
                One active request at a time. Pause or cancel anytime.
              </p>

              <hr />

              <p>What's included</p>
              <ul>
                <li>One request at a time</li>
                <li>Average 72 hour delivery</li>
                <li>Unlimited brands</li>
                <li>Pause or cancel anytime</li>
                <li>Unlimited revisions</li>
                <li>Unlimited users</li>
                <li>Squarespace development available</li>
                <li>Framer development available</li>
              </ul>
              
              <a target='_blank'>Get Started</a>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.packagesPremium}>
              <h2>Premium Package</h2>

              <p className={styles.pricingLabel}>$4,995 <span>per month</span></p>
              <p className={styles.pricingDescription}>
               Two active requests at a time. Pause or cancel anytime.
              </p>

              <hr />

              <p>What's included</p>
               <ul>
                <li>Two requests at a time</li>
                <li>Average 72 hour delivery</li>
                <li>Unlimited brands</li>
                <li>Pause or cancel anytime</li>
                <li>Unlimited revisions</li>
                <li>Unlimited users</li>
                <li>Squarespace development available</li>
                <li>Framer development available</li>
              </ul>

              <a target='_blank'>Get Started</a>
            </div>
          </div>
        </div>

   </>
  )
}

export default App


//  <div className={styles.section}>
//             <div className={styles.packages}>
//               <h2>Custom Projects</h2>

//               <p className={styles.pricing}>$5,000+</p>
//               <p className={styles.pricingDescription}>
//                 Will require a project consultation, strategy, design plan and build plan.
//               </p>

//               <hr />

//               <p>What's included</p>
              
//             </div>
//           </div>
//         </div>