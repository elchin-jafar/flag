import React from "react";

const LazyFilter = React.lazy(() => import("./Filter"));

export default function () {
  <React.Suspense fallback={<Filter />}>
    <LazyFilter />
  </React.Suspense>;
}
