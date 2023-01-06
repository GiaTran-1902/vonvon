import dayjs from 'dayjs';
import { cloneElement } from 'react';
import { utils, writeFile } from 'xlsx';

/* <Excel
  fileName="posts"
  data={[
    {
      columns: [
        {
          title: 'User Id',
          dataIndex: 'userId',
          width: 5,
        },
        {
          title: 'title',
          dataIndex: 'title',
          width: 20,
        },
        {
          title: 'Description',
          dataIndex: 'body',
          width: 50,
        },
      ],
      data,
      tabName: 'report',
    },
    {
      columns: [
        {
          title: 'User Id 1',
          dataIndex: 'userId',
          width: 5,
        },
        {
          title: 'title 1',
          dataIndex: 'title',
          width: 20,
        },
        {
          title: 'Description 1',
          dataIndex: 'body',
          width: 50,
        },
      ],
      data,
      tabName: 'report 1',
    },
  ]}
>
  <button>export excel</button>
</Excel> */

function getXlsxData(data, dataIndexes) {
  if (data) {
    return data.map(item =>
      dataIndexes.reduce((acc, d) => {
        acc[d] = item[d];
        return acc;
      }, {})
    );
  }
  return [];
}

function appendData(item, wb) {
  const { columns, data, tabName } = item;
  const ws = utils.json_to_sheet([]);
  const header = columns.map(c => c.title);
  utils.sheet_add_aoa(ws, [header]);
  utils.sheet_add_json(
    ws,
    getXlsxData(
      data,
      columns.map(c => c.dataIndex)
    ),
    {
      origin: 'A2',
      skipHeader: true,
    }
  );
  ws['!cols'] = columns.map(c => ({ wch: c.width }));
  utils.book_append_sheet(wb, ws, tabName ?? 'Sheet 1');
}

function exportXlsx(wb, fileName) {
  writeFile(
    wb,
    fileName
      ? `${fileName}-${dayjs(Date.now()).format('YYYY-MM-DD-HH-mm-ss')}.xlsx`
      : 'data.xlsx'
  );
}

const Excel = ({ data, children, fileName }) => {
  const handleClick = () => {
    const wb = utils.book_new();
    if (Array.isArray(data)) {
      data.forEach(item => {
        appendData(item, wb);
      });
      exportXlsx(wb, fileName);
    } else if (data) {
      appendData(data, wb);
      exportXlsx(wb, fileName);
    }
  };
  return cloneElement(children, { onClick: handleClick });
};

export default Excel;
