import React from 'react';
import PhotoFrame from '@/components/PhotoFrame';

const ProfileBadgePage: React.FC = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center text-squidPink pt-24'>Profile Badge Creator</h1>
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
