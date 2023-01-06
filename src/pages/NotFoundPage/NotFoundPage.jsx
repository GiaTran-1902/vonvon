import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="flex items-center justify-center h-screen mx-2 my-2 overflow-hidden ">
      <div className="px-6 py-4 rounded text-center">
        <div className="mb-2 text-xl font-bold">
          {formatMessage({
            defaultMessage: '404 - Sorry could not find this page 😅',
          })}
        </div>
        <Link to="/">
          <button className="rounded border-solid bg-gray-dark text-white p-2 mt-2">
            {formatMessage({ defaultMessage: 'GO TO HOMEPAGE' })}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
