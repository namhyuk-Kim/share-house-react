import React from "react";
import classnames from "classnames/bind";
import styles from "./_InhabiMobile.module.scss";

const cx = classnames.bind(styles);

class InhabiMobile extends React.Component {
    render() {
        return (
            <div className={cx("m-inhabi")}>
                <div className={cx("content")}>
                    <h2>Come&Stay의 청년주거 백과</h2>
                    <div className={cx("young-search")}>
                        <h3>
                            서울시 청년주택
                            <br />
                            <span>찾아보기</span>
                        </h3>
                        <p>
                            그게 뭐야?
                            <br />
                            자가용이 안된다고?
                        </p>
                    </div>
                    <div className={cx("house-guide")}>
                        <h3>
                            쉐어하우스
                            <br />
                            <span>가이드</span>
                        </h3>
                        <p>
                            쉐어하우스에
                            <br />
                            관한다양한 정보를
                            <br />
                            알고싶다면
                        </p>
                    </div>
                    <div className={cx("young-guide")}>
                        <h3>
                            청년주택
                            <br />
                            <span>가이드</span>
                        </h3>
                        <p>
                            쳥년주택에 관한
                            <br />
                            자세한 정보를
                            <br />
                            알고싶다면
                        </p>
                    </div>
                    <div className={cx("house-comic")}>
                        <h3>
                            쉐어하우스
                            <br />
                            <span>사는 애 이야기</span>
                        </h3>
                        <p>
                            Vol 9. 입주시즌에
                            <br />
                            벌어지는 일
                        </p>
                    </div>
                    <div className={cx("house-story")}>
                        <h3>
                            쉐어하우스
                            <br />
                            <span>스토리</span>
                        </h3>
                        <p>
                            쉐어하우스 반려동물
                            <br />
                            밍키의 쉐어라이프
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default InhabiMobile;
