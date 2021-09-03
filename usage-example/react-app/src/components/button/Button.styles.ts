import styled from 'styled-components';

const BaseButton = styled.button`
  border: none;
  padding: 5px 15px;
  border-radius: 3px;
  margin: 5px;
`;

const PrimaryButton = styled(BaseButton)`
  background-color: #2D3142;
  color: white;
  font-weight: bold;
`;

export { BaseButton, PrimaryButton };
