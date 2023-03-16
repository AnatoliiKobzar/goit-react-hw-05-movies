import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 25px;
`;

export const Item = styled.li`
  max-width: 280px;
  color: black;
`;

export const ItemLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
