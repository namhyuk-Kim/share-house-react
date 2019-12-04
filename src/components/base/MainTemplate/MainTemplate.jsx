import React from "react";
import classNames from "classnames/bind";
import styles from "./_MainTemplate.module.scss";
import Header from "components/common/Header/Header";
import Footer from "components/common/Footer/Footer";
import MobileFooter from "components/common/MobileFooter/MobileFooter";
// import Main from "components/common/Main/Main";

const cx = classNames.bind(styles);

class MainTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
    }

    openModal = e => {
        e.preventDefault();
        this.setState({ isModalOpen: true });
    };

    closeModal = e => {
        e.preventDefault();
        this.setState({ isModalOpen: false });
    };

    render() {
        return (
            <div className={cx("base")}>
                <Header
                    openModal={this.openModal}
                    closeModal={this.closeModal}
                    isModalOpen={this.state.isModalOpen}
                />
                {this.props.children}
                <Footer />
                <MobileFooter />
            </div>
        );
    }
}

export default MainTemplate;
