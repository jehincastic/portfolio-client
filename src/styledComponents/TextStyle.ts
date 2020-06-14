import styled from 'styled-components';

interface DisplayProps {
  screenType: string;
}

const Heading = styled.h1`
  color: white;
  padding: 0;
  padding-left: 8%;
  margin: 0;
`;

const MainHeading = styled(Heading)`
  ${(props: DisplayProps): string => {
    const { screenType } = props;
    if (screenType === 'desktop') {
      return (
        `width: 50%;
        font-size: 4rem;`
      );
    }
    if (screenType === 'tablet') {
      return (
        `width: 60%;
        font-size: 4rem;`
      );
    }
    return (
      `width: 80%;
      font-size: 2.2rem;`
    );
  }};
`;

const SubHeading = styled(Heading)`
  ${(props: DisplayProps): string => {
    const { screenType } = props;
    if (screenType === 'desktop') {
      return (
        `width: 30%;
        font-size: 1.5rem;
        margin-top: 15px;`
      );
    }
    if (screenType === 'tablet') {
      return (
        `width: 40%;
        font-size: 1.5rem;
        margin-top: 15px;`
      );
    }
    return (
      `width: 65%;
      font-size: 1.5rem;
      margin-top: 15px;`
    );
  }};
`;

const Text = styled(Heading)`
  ${(props: DisplayProps): string => {
    const { screenType } = props;
    if (screenType === 'desktop') {
      return (
        `font-weight: 300;
        font-size: 2rem;
        width: 50%;`
      );
    }
    if (screenType === 'tablet') {
      return (
        `font-weight: 300;
        font-size: 2rem;
        width: 50%;`
      );
    }
    return (
      `font-weight: 300;
      font-size: 2rem;
      width: 70%;`
    );
  }};
`;
export {
  MainHeading,
  SubHeading,
  Heading,
  Text,
};
