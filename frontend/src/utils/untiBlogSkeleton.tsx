import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const unitBlogSkeleton = () => {
  return (
    <div className="py-8 px-12 mt-16 min-h-screen">
      <div className="mb-4">
        <Skeleton height={40} width={300} baseColor="#cccccc"/>
      </div>
      <div className="mb-4">
        <Skeleton height={20} count={5} baseColor="#cccccc"/>
      </div>
    </div>
  );
};

export default unitBlogSkeleton;
