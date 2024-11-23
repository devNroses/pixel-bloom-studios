import styles from './P&A.module.scss';

const MobileProblemAnswer = () => {
    return (
        <>
            <div className={styles.content}>
                 <div className={styles.section}>
                    <div className={styles.keyMobileTitle}>
                        <p className={styles.sectionMobileHeader}>Your ultimate creative ally</p>
                        <p>
                        Finding skilled and reliable freelancers can be time-consuming and unpredictable, 
                        while in-house hires are costly and often requires time to train them up. You 
                        don't need an agency or freelancer. you need an extension to your 
                        in-house team.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                 <div className={styles.section}>
                    <div className={styles.theAnswer}>
                        <p className={styles.sectionMobileHeader}>The Better Way</p>
                        <p>
                            Your brand designs are too important to be left in the hands of unreliable freelancers 
                            or expensive creative agencies. Why not hire an experienced, full-time designer 
                            who knows you by name and your brand by heart?
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileProblemAnswer;