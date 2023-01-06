import { useIntl } from 'react-intl';

import CardItem from 'components/CardItem';

const HomeCategory = ({ className, listCard, url, ...props }) => {
  const { formatMessage } = useIntl();
  return (
    <section
      className={className ? className : 'homecategory-container'}
      {...props}
    >
      <h2 className="homecategory-title">{listCard?.title}</h2>
      <div className="homecategory-carousel">
        {listCard?.quizzes?.map(cardItem => (
          <CardItem key={cardItem.id} data={cardItem} width="162px" url={url} />
        ))}
      </div>
    </section>
  );
};

export default HomeCategory;
