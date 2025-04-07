// "use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const useSearchQuery = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const createSearchQueryString = useCallback((name, value) => {
      const params = new URLSearchParams(searchParams?.toString());
      params.set(name, value);
      return params.toString();

  }, [searchParams]);
  return {
    createSearchQueryString,
    pathName,
    searchParams,
    router,
  };
};

export default useSearchQuery;
