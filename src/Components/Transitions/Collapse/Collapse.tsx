import * as React from "react";

interface IProps {
  children: React.ReactNode;
  timeout?: number;
  visible: boolean;
}

enum EState {
  HIDDEN,
  ENTERING,
  ENTERED,
  EXITING  
}

function Collapse({ children, timeout = 250, visible }: IProps) {
  const wrapper = React.useRef<HTMLDivElement>();
  const content = React.useRef<HTMLDivElement>();
  const [state, setState] = React.useState<EState>(EState.HIDDEN);

  React.useLayoutEffect(() => {
    if (visible) {
      setState(EState.ENTERING);

      const timer = setTimeout(() => {
        setState(EState.ENTERED)
      }, timeout);

      return () => {
        clearTimeout(timer);
      }
    }

    setState(EState.EXITING);
    const timer = setTimeout(() => {
      setState(EState.HIDDEN);
    }, 0);

    return () => {
      clearTimeout(timer);
    }
  }, [visible]);

  function getWrapperStyles() {
    const styles: React.CSSProperties = {
      overflow: "hidden",
      transition: `all ${timeout}ms ease`
    };

    if ([EState.HIDDEN].includes(state)) {
      styles.height = 0;
      styles.opacity = 0;
    }

    if ([EState.ENTERING, EState.EXITING].includes(state)) {
      styles.height = content.current?.clientHeight;
      styles.opacity = 1;
    }

    return styles;
  }

  function getContentStyles(): React.CSSProperties {
    return {};
  }

  return (
    <div ref={wrapper} style={getWrapperStyles()}>
      <div ref={content} style={getContentStyles()}>
        {children}
      </div>
    </div>
  )
}

export default Collapse;