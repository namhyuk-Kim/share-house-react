import React from "react";
import styled from "styled-components";

const Popups = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
`;

const Popup = ({ children, closeModal, isModalOpen }) => {
    return !isModalOpen ? null : (
        <Popups closeModal={closeModal}>{children}</Popups>
    );
};

export default Popup;
