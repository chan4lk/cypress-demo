import { useEffect } from "react";
type Props = {
    error: string
}
export default function ErrorPlaceholder({ error }: Props) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <span>{`Application error: a server-side exception has occurred`}</span>
  );
}
