import styled from '@emotion/styled';

export const Table = styled.table`
border-collapse: separate;
  border: 3px solid gray;
  text-align: left;
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    `;

export const Title = styled.th`
    background-color: cyan;
    padding: 10px;
    `;

export const Container = styled.tr`
    &:nth-of-type(2n) {
  background-color: darkgrey;
  color: white;
}
&:nth-of-type(2n + 1) {
  background-color: dimgray;
  color: white;
}
`;

export const Value = styled.td`
    padding: 10px;`