import { useState } from 'react';

import { useUpdateMe } from 'hooks';

import bongsin from 'assets/images/settings/bongsin-basic-spoon.png';
import Button from 'components/Button';
import MBTITable from 'components/MBTITable';

const MBTISettings = () => {
  const [mbti, setMbti] = useState(['E', 'S', 'T', 'P']);
  const updateMe = useUpdateMe();

  //update the new list mbti
  const handleUpdateMbti = async mbti => {
    try {
      await updateMe({ mbti });
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
      <div className="mbtisettings">
        <p className="mbtisettings-title">내 MBTI가 바뀐 것 같아!</p>
        <div className="mbtisettings-content">
          <MBTITable initMBTIs={mbti} onChange={setMbti} />
          <div className="mbtisettings-content-bongsin">
            <p className="mbtisettings-bongsin-talk">
              살다보면 MBTI가 바뀔 수도 있지! 고럼고럼!
            </p>
            <img
              src={bongsin}
              alt="bongsin-spin"
              className="mbtisettings-bongsin-image"
            />
          </div>
        </div>
        <div className="mbtisettings-btn">
          <Button
            className={'btn-enable'}
            onClick={() => handleUpdateMbti(mbti)}
          >
            설정하기
          </Button>
        </div>
      </div>
    </>
  );
};
export default MBTISettings;
