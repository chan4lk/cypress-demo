'use client';

import ErrorPlaceholder from '../components/error-placeholder/ErrorPlaceholder';
type Props = {
    error: string
}
export default function Error({ error }: Props) {
  return <ErrorPlaceholder error={error} />;
}
