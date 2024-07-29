import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const blogSkeleton = () => {
  return (
    <SkeletonTheme>
      <div className="mb-12 flex items-center justify-between mx-5">
        <Skeleton className="text-sm" count={5} />
      </div>
      <h2>
        <Skeleton className="text-xl" />
      </h2>
    </SkeletonTheme>
  );
};

export default blogSkeleton;

{
  /* <article className="mb-12 font-myFont flex items-center justify-between mx-5">
      <div className="text-sm">
        <span>{date}</span>
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
    </article> */
}
