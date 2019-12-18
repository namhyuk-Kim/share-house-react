import React from "react";
import classNames from "classnames/bind";
import styles from "./_MainTemplate.module.scss";
import Header from "containers/common/header/HedaerContainer";
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
        this.setState({ isModalOpen: false });
    };

    render() {
        return (
            <div className={cx("base")}>
                <Header
                    openModal={this.openModal}
                    closeModal={this.closeModal}
                    isModalOpen={this.state.isModalOpen}
                    member_name={this.props.member_name}
                />
                {this.props.children}

                <Footer />
                <MobileFooter />
            </div>
        );
    }
}

export default MainTemplate;
