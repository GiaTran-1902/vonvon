import { queryParams } from 'utils';

import BestContentCategory from 'components/BestContent';
import HomeCategory from 'components/HomeCategory';
import { useGetAllCategories } from 'hooks/services';

const PARAMS = {
  type: 'recommendation',
  tab: 'home',
};
const Home = () => {
  const { data } = useGetAllCategories(PARAMS);

  return (
    <>
      <BestContentCategory />
      {data?.results?.map(
        (category, index) =>
          index < 18 && (
            <HomeCategory
              key={category.id}
              listCard={category}
              url={`/web/home?${queryParams(PARAMS)}`}
            />
          )
      )}
    </>
  );
};

export default Home;
