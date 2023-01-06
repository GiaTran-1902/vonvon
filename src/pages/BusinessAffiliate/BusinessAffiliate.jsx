import { useState } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import { useFeedback } from 'hooks';
import { VALIDATE, TYPE, ROUTES } from 'utils';

import BongSinHandUp from 'assets/images/bongsin-handup.png';
import BongSinPourWater from 'assets/images/bongsin-pourwater.png';
import Banner from 'components/Banner';
import Button from 'components/Button';
import Modal from 'components/Modal';

const BusinessAffiliate = () => {
  const { formatMessage } = useIntl();
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const feedback = useFeedback();
  const navigate = useNavigate();

  const isValidEmail = email => VALIDATE.regexEmail.test(email);

  const handleChange = e => {
    if (!isValidEmail(e.target.value)) {
      setError(formatMessage({ defaultMessage: 'Enter email format!' }));
    } else {
      setError(null);
    }

    setEmail(e.target.value);
  };

  const handChangeContent = e => {
    setContent(e.target.value);
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleSubmit = async () => {
    const data = {
      type: TYPE.advertising,
      email,
      content,
    };

    try {
      await feedback(data);
    } catch (error) {
      console.log(error);
      //API is not working
      navigate(ROUTES.success, { replace: true });
    }
  };

  return (
    <div className="Affiliate">
      <Banner
        style={{
          marginBottom: '48px',
          backgroundColor: '#FAEDED',
          paddingTop: '49px',
          paddingBottom: '156px',
        }}
        isBannerTitle
        bannerTitle={{
          first: formatMessage({ defaultMessage: '봉봉과' }),
          space: ' ',
          hightLight: formatMessage({ defaultMessage: '어떤 프로젝트' }),
          last: formatMessage({ defaultMessage: '를 진행하고 싶나봉?' }),
        }}
        bannerImage={BongSinPourWater}
        isSpeechBubble={false}
        className="image"
        speechText={
          <p className="banner-desc">
            {formatMessage({
              defaultMessage:
                '프로모션 및 파트너쉽과 관련한 문의사항을 보내주세요.',
            })}
          </p>
        }
      />
      <form className="Affiliate-form">
        <div className="Affliliate-flex Affiliate-form-email">
          <label className="Affiliate-form-label Affiliate-content">
            {formatMessage({ defaultMessage: '이메일' })}
          </label>
          <input
            className="Affiliate-form-input"
            type="email"
            onChange={handleChange}
            placeholder={formatMessage({
              defaultMessage: '이메일 주소 알려달라봉!',
            })}
          ></input>
          {error && <p className="Affiliate-error">{error}</p>}
        </div>
        <div className="Affliliate-flex Affiliate-form-content">
          <label className="Affiliate-form-label Affiliate-content">
            {formatMessage({ defaultMessage: '광고 및 제휴문의' })}
          </label>
          <div className="Affiliate-form-desc">
            <textarea
              className="Affiliate-form-textarea Affiliate-form-input"
              maxLength="300"
              onChange={handChangeContent}
            ></textarea>
            <div
              className="Affiliate-placeholder"
              id="placeholder"
              style={{ display: !content.length ? 'block' : 'none' }}
            >
              {formatMessage({
                defaultMessage: '아래 내용을 포함하면, 빠른 응대가 가능하다봉!',
              })}
              <br />
              <br />
              {formatMessage({
                defaultMessage: '- 브랜드 명 : (ex.브랜드 공식 홈페이지)',
              })}
              <br />
              {formatMessage({
                defaultMessage: '- 테스트를 진행하고자 하는 목적:',
              })}
              <br />{' '}
              {formatMessage({
                defaultMessage: '-오픈희망 일정:',
              })}
              <br />{' '}
              {formatMessage({
                defaultMessage: '- 유선 연락이 가능한 전화번호',
              })}
            </div>
          </div>
          <div className="Affiliate-count">
            <span>{content.length}</span>/300
          </div>
        </div>
        <Button
          className={
            !error && email.length && content.length
              ? 'btn-enable'
              : 'btn-disable'
          }
          disabled={error || !content.length || !email.length}
          type="button"
          onClick={showModal}
        >
          {formatMessage({ defaultMessage: '보내기' })}
        </Button>
      </form>
      {isOpen && (
        <Modal
          imgSrc={BongSinHandUp}
          description={formatMessage({
            defaultMessage: '이 문의를 제출하시겠어봉?',
          })}
          primaryBtnText={formatMessage({ defaultMessage: '보내기' })}
          secondBtnText={formatMessage({ defaultMessage: '취소' })}
          onClose={() => setOpen(false)}
          secondBtnAction={() => setOpen(false)}
          primaryBtnAction={handleSubmit}
        />
      )}
    </div>
  );
};

export default BusinessAffiliate;
