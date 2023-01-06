import { useGetAllCategories } from 'hooks';
import { queryParams } from 'utils';

import CardItem from 'components/CardItem';

const QuizzByCategory = ({ categoryId }) => {
  const PARAMS = {
    type: 'recommendation',
    tab: 'vonvon',
    categoryId,
  };

  const { data } = useGetAllCategories(PARAMS);

  return (
    <div className="quizzes-list-bycategory">
      {data?.results.map((cardItem, id) => (
        <CardItem
          key={id}
          data={cardItem}
          className="carditem-bycategory"
          url={`/web/home?${queryParams(PARAMS)}`}
        />
      ))}
    </div>
  );
};
export default QuizzByCategory;
