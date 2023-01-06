import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useGetMe, useUpdateMe, useUpload, useGetFile } from 'hooks';

import iconArrowDown from 'assets/icons/icon-arrow-down.svg';
import iconPencil from 'assets/icons/icon-pencil.svg';
import iconSetting from 'assets/icons/icon-setting.svg';
import avatarBongsin from 'assets/images/avatar-bongsin.png';

const User = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState({
    username: '봉봉신',
    mbti: 'ENFP',
    avatar: avatarBongsin,
  });
  const [avatar, setAvatar] = useState();

  const userData = useGetMe();
  const updateUsername = useUpdateMe();
  const updateAvatar = useUpdateMe();
  const uploadFile = useUpload();
  const getAvatar = useGetFile();

  const handleSubmit = async () => {
    try {
      if (user?.username) {
        await updateUsername({ username: user?.username });
      }
      setIsEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeImage = async e => {
    //display avatar on the screen
    if (e.target.files && e.target.files[0]) {
      setAvatar(URL.createObjectURL(e.target.files[0]));

      //upload avatar
      try {
        const formData = new FormData();
        formData.append('files', e.target.files[0]);
        const res = await uploadFile(formData);
        //After the avatar was uploaded successfully, the file's id will update the user data.
        const avatarId = res[0]?.id;
        if (avatarId) {
          console.log('avatar id', avatarId);
          await updateAvatar({ avatar: { id: avatarId } });
          console.log('success');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const fetchData = async () => {
    try {
      const user = await userData();
      const avatar = await getAvatar(user?.avatar?.id);
      if (avatar || user) {
        setAvatar(avatar?.url);
        setUser({
          username: user?.username,
          mbti: user?.mbti,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user?.id) {
      console.log('fetch data');
      fetchData();
    }
  }, [isEdit, user?.name]);
  return (
    <>
      <div className="user">
        <div className="account">
          <Link className="account-setting" to={'/setting'}>
            <img
              src={iconSetting}
              className="account-setting-icon"
              alt="setting"
            />
            <span className="account-setting-content">계정설정</span>
          </Link>
          <form className="account-avatar">
            <input
              type={'file'}
              onChange={handleChangeImage}
              className="filetype"
            />
            <img alt="avatar" className="avatar" src={avatar} />
          </form>
          <div className="account-mbti">
            <span className="account-mbti-label">MBTI</span>
            <span className="account-mbti-value">{user?.mbti}</span>
          </div>
          <div className="account-name">
            <input
              type={'text'}
              className="account-name-content"
              value={user?.username}
              onChange={e => setUser({ username: e.target.value })}
              disabled={!isEdit}
            />
            {!isEdit ? (
              <img
                src={iconPencil}
                alt="edit"
                className="account-name-edit"
                onClick={() => setIsEdit(true)}
              />
            ) : (
              <img src={iconArrowDown} alt="save" onClick={handleSubmit} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default User;
