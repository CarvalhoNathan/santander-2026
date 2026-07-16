import React from "react";

interface WithLoadingProps {
  isLoading: boolean;
}

export function withLoading<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithLoadingComponent({ isLoading, ...props }: WithLoadingProps & P) {
    if (isLoading) {
      return (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <p>🔄️ Loading data...</p>
        </div>
      );
    }

    return <WrappedComponent {...(props as P)} />;
  };
}
