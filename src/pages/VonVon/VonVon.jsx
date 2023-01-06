import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import useSWR from 'swr';

import { useGetMe } from 'hooks';
import { getLocalStorage, ROUTES, STORAGE_TOKEN } from 'utils';

import bannerBackground from 'assets/images/banner-background.svg';
import Banner from 'components/Banner';
import Category from 'components/Category';

const VonVon = () => {
  const { formatMessage } = useIntl();
  const [user, setUser] = useState();
  const userData = useGetMe();
  const token = getLocalStorage(STORAGE_TOKEN, '');

  const fetchData = async query => {
    try {
      // const { data } = userData();
      // const user = await userData();
      // console.log('data', data);
      // if (data) {
      //   setUser(data);
      // }
      const user = await userData();
      return user;
      // if (user) {
      //   setUser(user);
      // }
    } catch (err) {
      const error = new Error('An error occurred while fetching the data.');
      throw error;
    }
  };
  const { data } = useGetMe();
  useEffect(() => {
    if (token) {
      if (data) {
        console.log(data);
        setUser(data);
      }
      // fetchData();
      // if (data) {
      //   // console.log('data', data);
      //   setUser(data);
      // }
    }
  }, [token, data]);

  return (
    <>
      <Banner
        style={{
          backgroundImage: `url(${bannerBackground})`,
          paddingBottom: 123,
        }}
        isSpeechBubble={true}
        speechText={
          <>
            <p className="banner-speech-title">
              {(token && (
                <>
                  <span>{user?.username}</span>
                  <span>
                    {formatMessage({ defaultMessage: '! 어서와 🤗' })}
                  </span>
                </>
              )) ||
                formatMessage({ defaultMessage: '반가워🤗' })}
            </p>
            <p className="banner-speech-titleDesc">
              {formatMessage({ defaultMessage: '오늘은 어떤 테스트를 할까?' })}
            </p>
          </>
        }
        className="image-bonsing"
      />
      <Category />
    </>
  );
};

export default VonVon;
