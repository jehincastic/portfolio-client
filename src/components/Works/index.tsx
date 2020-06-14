import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import { useMediaQuery } from 'react-responsive';

import { MainHeading, Text } from '../../styledComponents/TextStyle';
import Button from '../../styledComponents/Buttons';
import WrapperDiv from '../../styledComponents/WrapperDiv';
import { Project } from '../../models/Project';
import fetchFn from '../../graphql';

const Works: React.FC = () => {
  const history = useHistory();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1025px)',
  });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const displayType = isDesktopOrLaptop ? 'desktop' : isTablet ? 'tablet' : isMobile ? 'mobile' : '';
  const [pages, setPages] = useState<Project[]>([]);
  const [index, set] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const onClickNext = useCallback(
    () => set((state) => (state + 1) % pages.length),
    [pages.length],
  );

  const onClickPrevious = useCallback(
    () => set((state) => (state - 1) % pages.length),
    [pages.length],
  );

  const transitions = useTransition(index, (p) => p, {
    from: {
      opacity: 0,
      transform: 'translate3d(100%,0,0)',
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0%,0,0)',
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(-50%,0,0)',
    },
  });

  const handleClick = (url = '/'): void => {
    history.push(url);
  };

  useEffect(() => {
    const query = `{
      projects {
        id,
        title,
        description,
        imgName,
        url
      }
    }`;
    fetchFn('projects', query).then((data) => {
      setPages(data);
      setLoading(false);
    }).catch((err) => {
      setLoading(false);
    });
  }, []);

  return (
    <WrapperDiv>
      {loading
        ? ''
        : transitions.map(({ item, props, key }) => {
          const Page = pages[item];
          return (
            <animated.div className="project" style={{ ...props }} key={key}>
              <WrapperDiv key={key}>
                <MainHeading screenType={displayType}>{Page.title}</MainHeading>
                <Text screenType={displayType}>{Page.description}</Text>
                <Button
                  screenType={displayType}
                  onClick={(): void => handleClick(Page.url)}
                  className="m-top"
                >
                  View Project
                </Button>
                <Button
                  screenType={displayType}
                  onClick={(): void => handleClick('/profile')}
                  className="m-left"
                >
                  View Profile
                </Button>
                {
                  index === (pages.length - 1)
                    ? null
                    : (
                      <Button
                        screenType={displayType}
                        onClick={onClickNext}
                        className="m-left"
                      >
                        Next Project
                      </Button>
                    )
                }
                {
                  index === 0
                    ? null
                    : (
                      <Button
                        screenType={displayType}
                        onClick={onClickPrevious}
                        className="m-left"
                      >
                        Previous Project
                      </Button>
                    )
                }
              </WrapperDiv>
            </animated.div>
          );
        })}
    </WrapperDiv>
  );
};

export default Works;
