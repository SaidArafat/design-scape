import React from "react";

const StatusIndicator = ({ isLoading, error, children }) => {
  if (isLoading) {
    return (
      <div className="text-center">
        <i className="spinner-border text-secondary" />
      </div>
    );
  }

  if (error) {
    return <div className="alert text-danger">{error}</div>;
  }

  return <>{children}</>;
};

export default StatusIndicator;
