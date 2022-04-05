import React, { Suspense } from "react";

export default function LazyLoading(Component) {
  return (props) => (
    <Suspense fallback={<span>LazyLoading.apply.apply.</span>}>
      <Component {...props} />
    </Suspense>
  );
}
