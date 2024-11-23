import styles from './App.module.scss';


function App() {

  return (
   <div>
    <header>
      <nav className={styles.navWrapper}>
         <img src='./logo_white.png' alt='Pixel Bloom Logo'/>
         <div>
          <ul>
            <li>Home</li>
            <li>Work</li>
            <li>Price</li>
            <li>FAQs</li>
          </ul>
         </div>
         <button> Get Started</button>
      </nav>
    </header>
    
    <div className={styles.hero}>
      <h1>A creative agency with a unique spin.</h1>
      <p>Design subscriptions made for everyone—flexible, hassle-free, and yours to pause or cancel anytime.</p>
      <button>Create Beyond Limits</button>
    </div>

    <div className={styles.miniPortfolio}>
      <p>Portfolio here</p>
    </div>
      
    
    <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.keyTitle}>
            <p className={styles.sectionHeader}>Your ultimate creative ally</p>
            <p>
              Finding skilled and reliable freelancers can be time-consuming and unpredictable, 
              while in-house hires are costly and often requires time to train them up. You 
              don't need an agency or freelancer. you need an extension to your 
              in-house team.
            </p>
          </div>
        </div>
        <div  className={styles.section} />
    </div>
    <div className={styles.content}>
        <div className={styles.section} />
          <div
            className={styles.section}
            style={{marginTop: '-5em'}}
            >
            <div className={styles.theAnswer}>
              <p className={styles.sectionHeader}>The Better Way</p>
              <p>
              Your brand designs are too important to be left in the hands of unreliable freelancers 
              or expensive creative agencies. Why not hire an experienced, full-time designer 
              who knows you by name and your brand by heart?
              </p>
            </div>
          </div>
    </div>
       
        <div className={styles.planIncludes}>
          <div className={styles.section}>
            <div>
              
              <p className={styles.moreInfo}> <hr /> included in all monthly and custom plans</p>
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

        <div className={styles.pricing}>
          <div className={styles.section}>
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
                </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.packages}>
              <h2>Membershps</h2>

              <p className={styles.pricing}>$4,995 <span>per month</span></p>
              <p className={styles.pricingDescription}>
                One active request at a time. Pause or cancel anytime.
              </p>

              <hr />

              <p>What's included</p>
              
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.packages}>
              <h2>Custom Projects</h2>

              <p className={styles.pricing}>$5,000+</p>
              <p className={styles.pricingDescription}>
                Will require a project consultation, strategy, design plan and build plan.
              </p>

              <hr />

              <p>What's included</p>
              
            </div>
          </div>
        </div>

   </div>
  )
}

export default App
