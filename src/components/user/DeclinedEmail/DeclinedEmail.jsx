import React from "components/user/DeclinedEmail/node_modules/react";
import styles from "./_DeclinedEmail.module.scss";
import classnames from "components/user/DeclinedEmail/node_modules/classnames/bind";

const cx = classnames.bind(styles);

class EmailOk extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={cx("chpw-wrap")}>
                <div>
                    <h1>E-Mail 승인 거부</h1>
                    <p>이메일 승인을 거부 처리하였습니다. 감사합니다.</p>
                    <button>홈으로 이동</button>
                </div>
            </div>
        );
    }
}

export default EmailOk;
