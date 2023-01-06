import { useIntl } from 'react-intl';

import { useGetAllCategories } from 'hooks';
import { queryParams } from 'utils';

import card_1 from 'assets/images/Numbers/1.svg';
import card_2 from 'assets/images/Numbers/2.svg';
import card_3 from 'assets/images/Numbers/3.svg';
import card_4 from 'assets/images/Numbers/4.svg';
import card_5 from 'assets/images/Numbers/5.svg';
import card_6 from 'assets/images/Numbers/6.svg';
import card_7 from 'assets/images/Numbers/7.svg';
import CardItem from 'components/CardItem';
const PARAMS = {
  type: 'best-content',
  tab: 'home',
  pagination: { page: 1, pageSize: 7 },
};
const BestContentCategory = () => {
  const { formatMessage } = useIntl();
  const number = [card_1, card_2, card_3, card_4, card_5, card_6, card_7];
  const { data } = useGetAllCategories(PARAMS);

  return (
    <section className="carousel-bestcontent">
      <h2 className="carousel-title">
        {formatMessage(
          {
            id: 'carousel-title',
            defaultMessage: '실시간  <highlight>BEST</highlight> 콘텐츠',
            description: 'Real-time best content',
          },
          {
            highlight: str => <span>{str}</span>,
          }
        )}
      </h2>
      <div className="carousel-bestcontainer">
        {data?.results?.map((cardItem, index) => (
          <CardItem
            key={cardItem.id}
            data={cardItem}
            cardNumber={number[index]}
            className="carditem-shadowcard"
            width="256px"
            url={`/web/home?${queryParams(PARAMS)}`}
          />
        ))}
      </div>
    </section>
  );
};

export default BestContentCategory;
