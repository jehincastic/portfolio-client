import styled from 'styled-components';

interface DisplayProps {
  screenType: string;
}

const Button = styled.button`
  background: white;
  border: 0;
  padding: 0;
  margin-left: 8%;
  margin-top: 20px;
  color: #EF565D;
  font-weight: 800;
  transition: all .300s ease;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  ${(props: DisplayProps): string => {
    const { screenType } = props;
    if (screenType === 'desktop') {
      return (
        `width: 180px;
        height: 70px;
        font-size: 1.01rem;
        `
      );
    }
    if (screenType === 'tablet') {
      return (
        `width: 180px;
        height: 70px;
        font-size: 1.01rem;
        `
      );
    }
    return (
      `width: 140px;
      height: 60px;
      margin-left: 20px;
      font-size: 1rem;
      `
    );
  }};
`;

export default Button;
