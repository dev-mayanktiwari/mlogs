import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const unitBlogSkeleton = () => {
  return (
    <div className="py-8 px-12 mt-16 min-h-screen">
      <div className="mb-4">
        <Skeleton height={40} width={300} count={1} baseColor="#cccccc" highlightColor="#d9d9d9" className="mb-7"/>
      </div>
      <div className="mb-4">
        <Skeleton height={20} count={10} baseColor="#cccccc" highlightColor="#d9d9d9"/>
      </div>
    </div>
  );
};

export default unitBlogSkeleton;
