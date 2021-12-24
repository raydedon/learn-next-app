import {FC} from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.scss";

const Layout: FC = (props) => {
    const {children} = props;
    return (
        <div className={styles.container}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;