import React from "react";
import classnames from "classnames/bind";
import styles from "./_CloseAccount.module.scss";
import * as UserAction from "stores/modules/user";

const cx = classnames.bind(styles);

class CloseAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={cx("modp")}>
                <button
                    className={cx("close")}
                    onClick={this.props.closeModal}
                ></button>
                <div className={cx("modp-wrap")}>
                    <h1>회원탈퇴</h1>
                    <span>
                        회원을 탈퇴할 경우 Come&Stay에서
                        <br />
                        관리하던 개인 정보 및 입주상담,계약 이력 등의
                        <br />
                        데이터가 전부 삭제됩니다.
                        <br />
                        삭제된 데이터는 다시 가입하시더라도
                        <br />
                        복원이 불가능합니다. 탈퇴하시겠습니까?
                    </span>

                    <div>
                        <input
                            type="button"
                            value="예"
                            onClick={e => this.props.CloseAccount(e)}
                        />
                        <input
                            type="cancel"
                            value="아니오"
                            onClick={this.props.closeModal}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default CloseAccount;
