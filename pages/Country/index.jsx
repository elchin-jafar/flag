import React, { Suspense } from "react";

const LazyCountry = React.lazy(() => import("./Country"));

export default function () {
  return (
    <Suspense fallback={<>Loading..</>}>
      <LazyCountry />
    </Suspense>
  );
}
