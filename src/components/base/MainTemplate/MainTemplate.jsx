import React from "react";
import classNames from "classnames/bind";
import styles from "./_MainTemplate.module.scss";
import Header from "components/common/Header/Header";
import Footer from "components/common/Footer/Footer";
// import Main from "components/common/Main/Main";

const cx = classNames.bind(styles);

class MainTemplate extends React.Component {
    render() {
        return (
            <div className={cx("base")}>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default MainTemplate;
