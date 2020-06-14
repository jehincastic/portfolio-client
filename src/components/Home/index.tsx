import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { MainHeading, SubHeading } from '../../styledComponents/TextStyle';
import Button from '../../styledComponents/Buttons';
import WrapperDiv from '../../styledComponents/WrapperDiv';

const Home: React.FC = () => {
  const history = useHistory();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1025px)',
  });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const displayType = isDesktopOrLaptop ? 'desktop' : isTablet ? 'tablet' : isMobile ? 'mobile' : '';
  const handleClick = (url: string): void => {
    history.push(url);
  };

  return (
    <WrapperDiv>
      <MainHeading screenType={displayType}>Hello, I am Castic Jehin.</MainHeading>
      <SubHeading screenType={displayType}>
        I am a Full-Stack Web Developer. I primarly work on Node JS and React
        JS.
      </SubHeading>
      <Button
        screenType={displayType}
        onClick={(): void => handleClick('/works')}
        type="button"
      >
        View My Works
      </Button>
      <Button
        screenType={displayType}
        onClick={(): void => handleClick('/profile')}
        type="button"
        className="m-left"
      >
        View My Profile
      </Button>
    </WrapperDiv>
  );
};

export default Home;
