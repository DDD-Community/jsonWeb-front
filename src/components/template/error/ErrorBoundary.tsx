import { Component, PropsWithChildren, ReactNode } from 'react';
import styled from '@emotion/styled';
import { ErrorLogo } from '@assets/svg/icon';
import { captureException } from '@sentry/react';
import { ERROR } from '@src/constants';

interface ErrorBoundaryProps {
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMsg: string | null;
}

class ErrorBoundary extends Component<
  PropsWithChildren<ErrorBoundaryProps>,
  ErrorBoundaryState
> {
  constructor(props: PropsWithChildren<ErrorBoundaryProps>) {
    super(props);
    this.state = {
      hasError: false,
      errorMsg: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorMsg: error.name };
  }

  componentDidCatch(error: Error) {
    captureException(error);
  }

  render() {
    const { hasError, errorMsg } = this.state;
    const { fallback, children } = this.props;

    const errorText = (error: string | null): string => {
      if (error === 'Error') return 'NETWORK';
      return 'COMMON';
    };

    const meta = ERROR[errorText(errorMsg)];

    if (hasError) {
      if (fallback) return fallback;
      return (
        <LayoutWrapper>
          <Wrapper>
            <ErrorLogo />
          </Wrapper>
          <Wrapper>
            <Heading dangerouslySetInnerHTML={{ __html: meta.title }} />
          </Wrapper>
          <Wrapper>
            <Msg dangerouslySetInnerHTML={{ __html: meta.description }} />
            <Button onClick={() => window.location.reload()}>재시도</Button>
          </Wrapper>
        </LayoutWrapper>
      );
    }
    return children;
  }
}

export default ErrorBoundary;

const LayoutWrapper = styled.div`
  max-width: ${({ theme }) => theme.size.maxWidth};
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 20% 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap: 40px;
  margin-top: -120px;
`;

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const Heading = styled.div(
  { marginBottom: '-20px', marginTop: '-20px' },
  ({ theme }) => ({
    color: theme.color.primary.black,
    fontWeight: theme.font.weight.bold,
    fontSize: theme.font.size.xxl,
  })
);

const Msg = styled.span(
  { textAlign: 'center', marginBottom: '24px' },
  ({ theme }) => ({
    color: theme.color.grayscale.gray_200,
    fontWeight: theme.font.weight.medium,
    fontSize: theme.font.size.l,
  })
);

const Button = styled.button(
  {
    all: 'unset',
    cursor: 'pointer',
    padding: '10px 22px',
    borderRadius: '8px',
    ':active': {
      transform: 'scale(0.95)',
    },
    transition: 'transform .3s',
  },
  ({ theme }) => ({
    backgroundColor: theme.color.primary.purple_weak,
    color: theme.color.primary.purple,
  })
);
