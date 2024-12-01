import styles from './P&A.module.scss';

const DesktopProblemAnswer = () => {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.section}>
                    <div className={styles.keyTitle}>
                        <p className={styles.sectionHeader}>Your Ultimate Creative Ally</p>
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
        </>
    )
}

export default DesktopProblemAnswer;