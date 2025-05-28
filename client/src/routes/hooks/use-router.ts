import { useRouter as useNextRouter } from 'next/router';
import { useMemo } from 'react';

// ----------------------------------------------------------------------

export function useRouter() {
  const nextRouter = useNextRouter();

  const router = useMemo(
    () => ({
      back: () => nextRouter.back(),
      forward: () => window.history.forward(),
      refresh: () => nextRouter.reload(),
      push: (href: string) => nextRouter.push(href),
      replace: (href: string) => nextRouter.replace(href),
      pathname: nextRouter.pathname,
      query: nextRouter.query,
    }),
    [nextRouter]
  );

  return router;
}
