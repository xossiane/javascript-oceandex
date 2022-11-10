import styles from "../styles/home.module.scss";
import Background from "@atoms/Background";
import Heading from "@atoms/Heading/Heading";

function Home() {
    return (
        <>
            <main className={styles.container}>
                <div className={styles.container}>
                    <Heading level="1" size="large" color="black" weight="bold">
                        What marine creature are you looking for?
                    </Heading>
                    <div>
                    </div>

                        
                </div>
            </main>
            <Background/>
        </>
    );
}

export default Home;
