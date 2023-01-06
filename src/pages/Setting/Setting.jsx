import { Link } from 'react-router-dom';
const Setting = () => (
  <>
    <p>This is a setting page.</p> <br></br>
    <p>Please click </p>
    <Link to={'./mbti'}>MBTI Settings</Link>
  </>
);
export default Setting;
