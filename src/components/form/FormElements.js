import styled from "styled-components";

export const FormBtn = styled.button`
  border-radius: 4px;
  background: #05a30b;
  padding: 10px 22px;
  width: ${({ width }) => (width ? width : "122px")};
  color: #fff;
  font-size: 18;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "24px")};
  align-items: center;
  justify-content: center;
  align-content: center;
  display: flex;

  /* Second Nav */
  //   &:hover {
  //     transition: all 0.2s ease-in-out;
  //     background: #fff;
  //     color: #808080;
  //   }
`;

export const TransparentFormBtn = styled.button`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  width: ${({ width }) => (width ? width : "122px")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-size: 18;
  font-weight: 600;
  border: 2px solid #05a30b;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "24px")};
  align-items: center;
  justify-content: center;
  align-content: center;
  display: flex;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #fff;
  }
`;
