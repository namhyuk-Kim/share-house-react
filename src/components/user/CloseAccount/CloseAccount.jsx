import React from "react";
import classnames from "classnames/bind";
import styles from "./_CloseAccount.module.scss";

const cx = classnames.bind(styles);

class CloseAccount extends React.Component {
    render() {
        return (
            <div className={cx("modp")}>
                <button className={cx("close")}></button>
                <div className={cx("modp-wrap")}>
                    <h1>비밀번호 변경</h1>
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

                    <form>
                        <input type="submit" value="예" />
                        <input type="cancel" value="아니오" />
                    </form>
                </div>
            </div>
        );
    }
}

export default CloseAccount;
