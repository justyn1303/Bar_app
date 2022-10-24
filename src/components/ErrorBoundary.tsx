import React, { FC, useState } from "react";
import { withErrorBoundary, useErrorBoundary } from "react-use-error-boundary";

const ErrorBoundaryComponent: FC = withErrorBoundary(() => {
  const [shouldThrow, setShouldThrow] = useState(false);
  const [error, resetError] = useErrorBoundary((error, errorInfo) => {
    console.info("componentDidCatch handler called");
    console.error(error);
    console.error(errorInfo);
  });

  const Text: string = "Bombs away 💣";

  if (error) {
    const message = error instanceof Error ? error.message : (error as string);
    return (
      <>
        <div>Error: {message}</div>
        <button
          onClick={() => {
            setShouldThrow(false);
            resetError();
          }}
        >
          Reset Error
        </button>
      </>
    );
  }

  return (
    <>
      <div>Happy Path</div>
      {shouldThrow && Text}
      <button
        onClick={() => {
          setShouldThrow(true);
        }}
      >
        Throw Error
      </button>
    </>
  );
});

export default ErrorBoundaryComponent;
