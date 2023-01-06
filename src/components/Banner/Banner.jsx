import { useIntl } from 'react-intl';

import imageBonbon from 'assets/images/image-banner-bonbon.svg';

const Banner = ({
  style,
  isBannerTitle,
  bannerTitle = {},
  isSpeechBubble,
  speechText,
  className,
  bannerImage,
}) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <div className="banner-wrapper" style={style}>
        {isBannerTitle && (
          <h2 className="banner-title">
            {bannerTitle.first} {bannerTitle.space}
            <span className="banner-title-highlight">
              {bannerTitle.hightLight}
            </span>
            {bannerTitle.last}
          </h2>
        )}
        <div className={isSpeechBubble ? 'banner-speech-bubble' : ''}>
          {speechText
            ? speechText
            : formatMessage({ defaultMessage: 'No content of speech bubble!' })}
        </div>
        <div
          className={className ? `banner-image ${className}` : 'banner-image'}
        >
          <img
            src={bannerImage ? bannerImage : imageBonbon}
            alt="image-bongsin"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Banner;
