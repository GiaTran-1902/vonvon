import { useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import { useFeedback } from 'hooks';
import { VALIDATE, TYPE, ROUTES } from 'utils';

import IconClose from 'assets/icons/icon-close.svg';
import IconImage from 'assets/icons/icon-image.png';
import BongSinHandUp from 'assets/images/bongsin-handup.png';
import BongSinListen from 'assets/images/bongsin-listen.png';
import Banner from 'components/Banner';
import Button from 'components/Button';
import Modal from 'components/Modal';

const OpinionOptions = [
  {
    value: '이런 걸 원해요!',
  },
  {
    value: '문제를 발견했어요!',
  },
  {
    value: '화이팅! 응원 메세지',
  },
  {
    value: '아무말 대잔치',
  },
];

const Placeholder = {
  '이런 걸 원해요!': '봉봉이 만들어 줬으면 하는 콘텐츠는?',
  '문제를 발견했어요!':
    '봉봉 이용에 불편 사항을 자세히 알려주라봉! 빠르게 고치겠다봉!',
  '화이팅! 응원 메세지': '헤헤. 봉봉을 응원해준다구?',
  '아무말 대잔치': '내 이름은 봉신이다봉. 기억해봉~',
};

const SendOpinion = () => {
  const { formatMessage } = useIntl();
  const inputRef = useRef(null);

  const [opinion, setOpinion] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorContent, setErrorContent] = useState(null);
  const [placeholder, setPlaceholder] = useState('');

  const feedback = useFeedback();
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);
  const handleChangeOpinion = e => {
    const { value } = e.target;

    setPlaceholder(
      formatMessage(
        { defaultMessage: '{placeholder}' },
        { placeholder: Placeholder[value] }
      )
    );

    setOpinion(e.target.value);
  };

  const handleChangeEmail = e => {
    if (!VALIDATE.regexEmail.test(e.target.value)) {
      setErrorEmail(formatMessage({ defaultMessage: 'Enter email format!' }));
    } else {
      setErrorEmail(null);
    }

    setEmail(e.target.value);
  };

  const handleChangeContent = e => {
    e.preventDefault();

    if (
      e.target.value.length < 2 ||
      VALIDATE.regexSpecialCharacter.test(e.target.value) ||
      VALIDATE.regexVietnamese.test(e.target.value) ||
      !VALIDATE.regxEnglishKorean.test(e.target.value)
    ) {
      setErrorContent(
        formatMessage({
          defaultMessage: 'Enter at least 2 English or Korean characters',
        })
      );
    } else {
      setErrorContent(null);
    }

    setContent(e.target.value);
  };

  const handleChangeImages = e => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map(file =>
      URL.createObjectURL(file)
    );

    if (imagesArray.length > 5 - images.length) {
      imagesArray.length = 5 - images.length;
    }

    setImages(previousImages => previousImages.concat(imagesArray));
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleSubmit = async () => {
    const data = {
      type: TYPE.feedback,
      opinion,
      email,
      content,
      images,
    };
    console.log('data:', data);

    try {
      await feedback(data);
    } catch (error) {
      console.log(error);

      //API is not working
      navigate(ROUTES.success, { replace: true });
    }
  };

  return (
    <div className="Opinion">
      <Banner
        style={{
          marginBottom: '80px',
          backgroundColor: '#FAEDED',
          paddingTop: '49px',
          paddingBottom: '110px',
        }}
        isBannerTitle
        bannerTitle={{
          first: formatMessage({ defaultMessage: '봉봉은' }),
          space: ' ',
          hightLight: formatMessage({ defaultMessage: '당신의 목소리' }),
          last: formatMessage({ defaultMessage: '에 귀 기울인다봉!' }),
        }}
        isSpeechBubble={true}
        speechText={
          <div className="Banner-speechtext-content">
            <p className="Banner-speechtext-desc">✔ 문제점</p>
            <p className="Banner-speechtext-desc">✔ 당신만의 특별한 아이디어</p>
            <p className="Banner-speechtext-desc">✔ 궁금한 점, 하고싶은 말</p>
            <p className="Banner-speechtext-title">무엇이든 환영한다봉! 🤗</p>
          </div>
        }
        bannerImage={BongSinListen}
        className="Banner-image-bongsinlisten"
      />
      <form className="Opinion-form">
        <div className="Opinion-type">
          <label className="Opinion-label opinion-label-select">
            {formatMessage({ defaultMessage: '의견 유형' })}
          </label>
          <select
            className="Opinion-select"
            required
            onChange={handleChangeOpinion}
            name="opinion"
            defaultValue={''}
          >
            <option value="" disabled hidden>
              {formatMessage({ defaultMessage: '의견 유형을 선택해주세요' })}
            </option>
            {OpinionOptions.map(item => (
              <option key={item.value} value={item.value}>
                {item.value}
              </option>
            ))}
          </select>
        </div>
        <div className="Opinion-column">
          <label className="Opinion-label opinion-label-email">
            {formatMessage({ defaultMessage: '이메일' })}
          </label>
          <input
            className="Opinion-input-email"
            type="email"
            placeholder={formatMessage({
              defaultMessage: '이메일 주소 알려달라봉!',
            })}
            onChange={handleChangeEmail}
            name="email"
          ></input>
          <p className="Opinion-error">{errorEmail}</p>
        </div>
        <div className="Opinion-column Opinion-content">
          <label className="Opinion-label opinion-label-email">
            {formatMessage({ defaultMessage: '내용' })}
          </label>
          <textarea
            className="Opinion-texterea"
            onChange={handleChangeContent}
            name="content"
            placeholder={placeholder}
          ></textarea>
          <p className="Opinion-error">{errorContent}</p>
        </div>
        <div className="Opinion-column">
          <label className="Opinion-label opinion-label-email">
            {formatMessage(
              { defaultMessage: '사진첨부 <subcontent>(선택)</subcontent>' },
              {
                subcontent: str => (
                  <span className="Opinion-texterea-subcontent">{str}</span>
                ),
              }
            )}
          </label>
          <div className="Opinion-wrap-img">
            <div
              onClick={() => inputRef.current.click()}
              className="Opinion-img Opinion-empty-img"
            >
              <span className="Opinion-desc">
                <img className="Opinion-icon-img" src={IconImage}></img>
                <span className="Opinion-count-img">
                  <span>{images.length}</span>
                  {formatMessage({ defaultMessage: '/5' })}
                </span>
              </span>
              <input
                ref={inputRef}
                className="Opinion-input-file"
                type="file"
                onChange={handleChangeImages}
                name="images"
                multiple
                disabled={images.length === 5}
              ></input>
            </div>
            {images &&
              images.map(image => (
                <div key={image} className="Opinion-img Opinion-preview">
                  <img
                    className="Opinion-img-preview"
                    src={image}
                    alt="image preview"
                  />
                  <img
                    className="Opinion-icon-close"
                    src={IconClose}
                    alt="icon close"
                    onClick={() => setImages(images.filter(e => e !== image))}
                  />
                </div>
              ))}
          </div>
        </div>
        <Button
          className={
            !errorEmail &&
            !errorContent &&
            email.length &&
            content.length &&
            opinion.length
              ? 'btn-enable'
              : 'btn-disable'
          }
          disabled={
            errorEmail ||
            errorContent ||
            !email.length ||
            !content.length ||
            !opinion.length
          }
          type="button"
          onClick={showModal}
        >
          보내기
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

export default SendOpinion;
