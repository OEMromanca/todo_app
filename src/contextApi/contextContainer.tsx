import React from "react";

interface Props {
  components: React.ComponentType<{ children: React.ReactNode }>[];
  children: React.ReactNode;
}

const ContextContainer = (props: Props) => {
  const { components = [], children } = props;

  return (
    <>
      {components.reduce((acc, Component) => {
        return <Component>{acc}</Component>;
      }, children)}
    </>
  );
};

export default ContextContainer;
