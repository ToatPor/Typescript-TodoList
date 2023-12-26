import React, { PropsWithChildren, createContext, useContext } from 'react';
import { ITable } from './UI-Type/ITable';
import { IDashboardChildren } from '../feature/IFeature/IDashboard';
import styled from 'styled-components';

const StyledBox = styled.div<ITable>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: ${(props) => props.$column};
`;

const ContetInfo = styled.p<ITable>`
  color: var(--color-grey-100);
  font-size: 1.4rem;
  font-weight: 100;
  grid-column: ${(props) => props.$column};
  grid-row: 2;
`;

//need to specify type of value you gonna use and set default value
const Tablecontext = createContext<ITable>({ $column: '2/10' });

const Table = function (props: PropsWithChildren<ITable>) {
  const { children, $column } = props;

  return <Tablecontext.Provider value={{ $column }}>{children}</Tablecontext.Provider>;
};

const Header: React.FC<IDashboardChildren> = function (props) {
  const { $column } = useContext(Tablecontext);
  const { children } = props;
  return <StyledBox $column={$column}>{children}</StyledBox>;
};

const Body: React.FC<IDashboardChildren> = function (props) {
  const { $column } = useContext(Tablecontext);
  const { children } = props;
  return <ContetInfo $column={$column}>{children}</ContetInfo>;
};

const Footer: React.FC<IDashboardChildren> = function (props) {
  const { $column } = useContext(Tablecontext);
  const { children } = props;
  return <StyledBox $column={$column}>{children}</StyledBox>;
};

Table.Header = Header;
Table.Body = Body;
Table.Footer = Footer;
export default Table;
