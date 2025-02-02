import React from "react";
import PhotoFrame from "@/components/PhotoFrame";

const ProfileBadgePage: React.FC = () => {
  return (
    <div className="relative">
      {/* <h1 className="text-4xl font-bold text-center text-squidPink pt-24">
        Profile Badge Creator
      </h1> */}

      {/* Header */}
      <div className="text-center mb-16 pt-[7rem]">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-squidPink via-purple-500 to-squidTeal bg-clip-text text-transparent">
            Profile Badge Creator
          </span>
        </h1>
        <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-squidPink to-squidTeal rounded-full"></div>
      </div>
      <PhotoFrame />
    </div>
  );
};

export default ProfileBadgePage;

// import React from 'react';
// import PhotoFrame from '../../components/PhotoFrame';

// const ProfileBadgePage: React.FC = () => {
//   return (
//     <div>
//       <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Profile Badge Creator</h1>
//       <PhotoFrame />
//     </div>
//   );
// };

// export default ProfileBadgePage;
