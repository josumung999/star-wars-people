import LoadingSpinner from "./LoadingSpinner";

export const QueryResult = ({loading, error, data, children}) => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return (
      <LoadingSpinner/>
    );
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    return children;
  }
};