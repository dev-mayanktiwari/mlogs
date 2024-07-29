import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const blogSkeleton = () => {
  return (
    <SkeletonTheme>
      <article className="mb-12 font-myFont flex items-center justify-between mx-5">
        <div className="text-sm">
          <Skeleton width={100} height={20} count={10} baseColor="#cccccc"  className="mb-5"/>
        </div>
        <h2 className="text-xl font-semibold">
          <Skeleton width={500} height={30} count={10} baseColor="#cccccc" className="mb-5" />
        </h2>
      </article>
    </SkeletonTheme>
  );
};

export default blogSkeleton;
