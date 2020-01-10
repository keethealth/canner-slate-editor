// @flow
import React, { Component } from "react";
import styled from "styled-components";
import UrlImage from "./UrlImage";
import type { Props } from "./EditImage";

const Content = styled.div`
  padding: 30px;
`;

export default class Container extends Component<Props> {
  render() {
    const { onChange, closeEditPopup } = this.props;
    return (
      <Content>
        <UrlImage onChange={onChange} closeEditPopup={closeEditPopup} />
      </Content>
    );
  }
}
