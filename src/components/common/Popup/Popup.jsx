import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import styles from "./_Popup.module.scss";

const Popups = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
`;

const Popup = ({ children, ...other }) => {
    return <Popups {...other}>{children}</Popups>;
};

export default Popup;
