import React from "react";
import styles from "./_PasswordChange.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

class PasswordChange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={cx("chpw-wrap")}>
                <div>
                    <h1>비밀번호 변경</h1>
                    <p>비밀번호를 변경해 주세요.</p>
                    <form>
                        <input
                            type="password"
                            placeholder="새 비밀번호를 입력(8자리 이상)"
                            name="newpassword"
                        />
                        <input
                            type="password"
                            placeholder="비밀번호 확인"
                            name="re_newpassword"
                        />
                        <button>비밀번호 변경</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PasswordChange;
