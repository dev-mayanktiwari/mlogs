import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const blogSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#cccccc" highlightColor="#d9d9d9">
      <article className="mb-12 font-myFont flex flex-col md:flex-row items-center justify-between mx-5">
        <div className="text-sm mb-5 md:mb-0">
          <Skeleton
            width="100%"
            height={20}
            count={5}
            className="w-full md:w-[100px] mb-5"
          />
        </div>
        <h2 className="text-xl font-semibold w-full md:w-auto">
          <Skeleton
            width="100%"
            height={30}
            count={5}
            className="w-full md:w-[500px] mb-5"
          />
        </h2>
      </article>
    </SkeletonTheme>
  );
};

export default blogSkeleton;
