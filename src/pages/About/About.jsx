const members = [
  {
    name: 'Linh Tran',
    email: 'linhtran@example.net',
  },
  {
    name: 'Hoang Nguyen',
    email: 'hoangnguyen@example.net',
  },
  {
    name: 'Nhi Thai',
    email: 'nhithai@example.net',
  },
  {
    name: 'Dung Nguyen',
    email: 'dungnguyen@example.net',
  },
  {
    name: 'Liem Do',
    email: 'liemdo@example.net',
  },
  {
    name: 'Duy Phan',
    email: 'duyphan@example.net',
  },
  {
    name: 'Diem Nguyen',
    email: 'diemnguyen@example.net',
  },
  {
    name: 'Luan Vuong',
    email: 'luanvuong@example.net',
  },
  {
    name: 'Tu Bui',
    email: 'tubui@example.net',
  },
  {
    name: 'Khoa Vuong',
    email: 'khoavuong@example.net',
  },
  {
    name: 'Duc Vuong',
    email: 'ducvuong@example.net',
  },
  {
    name: 'Trang Cao',
    email: 'trangcao@example.net',
  },
  {
    name: 'Quang Ly',
    email: 'quangly@example.net',
  },
  {
    name: 'Tien Nguyen',
    email: 'tiennguyen@example.net',
  },
  {
    name: 'Quang Dang',
    email: 'quangdang@example.net',
  },
];
const About = () => (
  <div className="About">
    <h2 className="text-center text-2xl p-5">Our Team</h2>
    <div className="flex items-center flex-wrap justify-center gap-3">
      {members.map(({ name, email }) => (
        <div
          className="text-center border-solid border border-gray p-3 rounded"
          key={name}
        >
          <h2 className="text-xl mb-2">{name}</h2>
          <p className="title">Front End Developer</p>
          <p className="mb-2">{email}</p>
          <button className="bg-gray-dark block w-full p-2 rounded text-white">
            Contact
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default About;
