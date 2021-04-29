import React from 'react';
import Todo from '../Todo/Todo';
import styled from 'styled-components';

const StyledTodo = styled(Todo)`
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const App = (): JSX.Element => <StyledTodo />;

export default App;
