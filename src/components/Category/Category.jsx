import { useState, useEffect } from 'react';

import { useGetCategories } from 'hooks/services';

import QuizzByCategory from './QuizzByCategory';

const Category = () => {
  const [active, setActive] = useState();
  const [page, setPage] = useState(1);
  const [categoryId, setCategoryId] = useState();
  const query = {
    tab: 'vonvon',
    pagination: {
      page,
      pageSize: 20,
    },
  };
  const { data } = useGetCategories(query);

  useEffect(() => {
    if (data?.results) {
      const { results } = data;
      setActive(results?.[0]?.id);
      setCategoryId(results?.[0]?.id);
    }
  }, [data]);

  return (
    <>
      <div className="category">
        {data?.results.map((item, id) => (
          <div
            key={id}
            className="category-item"
            onClick={() => {
              setActive(item.id);
              setCategoryId(item.id);
            }}
          >
            <div
              className={`category-item-title ${
                active === item.id ? 'active' : ''
              }`}
            >
              {item.title}
            </div>
            {active === item.id && <div className="category-underline"></div>}
          </div>
        ))}
      </div>
      {categoryId && <QuizzByCategory categoryId={categoryId} />}
    </>
  );
};
export default Category;
