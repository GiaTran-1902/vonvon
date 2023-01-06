import { useIntl } from 'react-intl';

import Footer from 'components/Footer';

const PrivacyPolicy = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <div className="policy-wrapper">
        <h1 className="policy-title">
          {formatMessage({ defaultMessage: '(주)어쎈딩미디어' })}
          <br></br>
          {formatMessage({ defaultMessage: '개인정보처리방침' })}
        </h1>
        <p className="policy-content">
          {formatMessage({
            defaultMessage:
              '주식회사 어쎈딩미디어(이하 “회사")는 개인정보 보호법에 따라 봉봉(VONVON) 서비스(이하 "서비스")가 제공하는 콘텐츠 및 기타 서비스를 이용하는 회원 및 비회원(이하 “이용자")의 개인정보를 보호하고 이와 관련한 고충을 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립•공개합니다.',
          })}
        </p>
        <p className="policy-content detail">
          {formatMessage({ defaultMessage: '제1조(개인정보의 처리 목적)' })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '1. "회사"는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.',
          })}
          <br></br>
          {formatMessage({ defaultMessage: '1) 홈페이지 회원가입 및 관리' })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '2) 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별•인증, 회원자격 유지•관리, 서비스 부정이용 방지, 각종 고지•통지 목적으로 개인정보를 처리합니다.마케팅 및 광고에의 활용',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '2. 신규 서비스(제품) 개발 및 맞춤형 서비스 제공, 이벤트 및 맞춤형 광고성 정보 제공 및 참여기회 제공 , 인구통계학적 특성에 따른 서비스 제공 및 광고 게재 , 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.',
          })}
          <br></br>
          <br></br>
          {formatMessage({
            defaultMessage: '제2조(개인정보 수집 항목 및 방법)',
          })}
          <br></br>
          {formatMessage({
            defaultMessage: '1. 수집하는 개인정보의 항목',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '“회사"가 수집하는 항목은 이용자가 서비스를 이용하기 위해 필수로 필요한 항목과 이용자의 선택에 따른 항목이 있습니다.',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '1) 필수 항목 : ID, PW, 이메일 주소, 콘텐츠 이용내역, 질문 별 답변, 성별, 출생년도, 접속 IP 정보, 기기정보, “서비스"이용기록, 접속 로그(자동수집), 회원가입 시 선택한 SNS 계정의 닉네임과 프로필 사진과 이메일',
          })}
          <br></br>
          {formatMessage({
            defaultMessage: '2) 선택 항목 : 성별, 연령대',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '- “서비스"는 이용자의 기본적 인권 침해의 우려가 있는 민감한 개인정보(인종 및 민족, 사상 및 신조, 출신지 및 본적지 정치적 성향 및 범죄기록, 건강상태 및 성생활 등)는 수집하지 않습니다.',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '- “서비스"는 법령에 따라 동의 없이 수집할 수 잇는 자동생성 정보(로그기록 등 서비스 계약 이행과정에서 자동적으로 생성되는 정보) 등을 필수동의 사항에 기재된 목적범위 내에서 수집하여 이용할 수 있습니다. (고객이 개별적으로 선택 동의에도 동의할 경우 해당 목적으로도 수집하여 이용)',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '- “서비스"는 수집한 개인정보를 개인을 알아볼 수 없는 통계자료 등으로 가공하여 이용 또는 제공할 수 있습니다.',
          })}
          <br></br>
          {formatMessage({
            defaultMessage: '2. 개인정보 수집 방법',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '1) “서비스”는 다음과 같은 방법으로 개인정보를 수집합니다.',
          })}
          <br></br>
          {formatMessage({
            defaultMessage: 'a. 사이트 가입 절차를 통한 수집',
          })}
          <br></br>
          {formatMessage({
            defaultMessage: 'b. 서비스 이용 과정에서 자동으로 수집',
          })}
          <br></br>
          {formatMessage({
            defaultMessage: 'c. 본인, 타인의 민원 또는 신고',
          })}
          <br></br>
          {formatMessage({
            defaultMessage: 'd. 생성정보 수집 툴을 통한 자동수집',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '2)“회사”에 회원가입 한 것은 “서비스”의 개인정보 수집에 동의한 것으로 간주합니다.',
          })}
          <br></br>
          <br></br>
          {formatMessage({
            defaultMessage:
              '1. “서비스"는 정보주체로부터 개인정보를 수집할 때 동의를 얻은 개인정보를 보유, 이용할 수 있으며 또는, 법령에 따른 개인정보 보유•이용기간 내 에서 개인정보를 처리•보유합니다.',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '2. 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '- 고객 가입 및 관리 : 고객의 가입신청일로부터 회원계약의 해지일까지',
          })}
          <br></br>
          {formatMessage({
            defaultMessage: '- 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '- 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년',
          })}
          <br></br>
          {formatMessage({
            defaultMessage: '- 대금결제 및 재화 등의 공급에 관한 기록 : 5년',
          })}
          <br></br>
          {formatMessage({
            defaultMessage: '- 계약 또는 청약철회 등에 관한 기록 : 5년',
          })}
          <br></br>
          {formatMessage({
            defaultMessage: '- 표시/광고에 관한 기록 : 6개월',
          })}
          <br></br>
          {formatMessage({
            defaultMessage: '- 접속에 관한 기록 : 1년',
          })}
          <br></br>
          <br></br>
          {formatMessage({
            defaultMessage: '제4조 (동의의 거부권)',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '이용자는 개인정보 수집, 이용에 관한 동의를 거부할 권리가 있습니다.',
          })}
          <br></br>
          <br></br>
          {formatMessage({
            defaultMessage: '제 5조 (개인정보의 파기)',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '1. “회사”는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 해당 개인정보를 파기합니다. 단, 관계법령에 따라 개인정보를 보존하여야 하는 경우에는 해당 기간 경과 후 재생 불가능한 방법으로 파기합니다.',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '2. “회사”는 다음의 방법으로 개인정보를 파기합니다.',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '- 전자적 파일 : 기록을 재생할 수 없는 기술적 방법을 사용하여 파기',
          })}
          <br></br>
          {formatMessage({
            defaultMessage: '3. 개인정보 파기기한',
          })}
          <br></br>
          <br></br>
          {formatMessage({
            defaultMessage: '제6조 (이용자의 권리와 그 행사방법)',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '1. “이용자”는 언제든지 등록되어있는 이용자의 개인정보를 열람하거나 수정할 수 있으며, 자신의 개인정보에 대한 열람을 요청할 수 있습니다.',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '2. “이용자”는 언제든지 개인정보 처리의 정지를 요청할 수 있으며, 법률에 특별한 규정이 있는 등의 경우에는 처리정지 요청을 거부할 수 있습니다.',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '3. “이용자"는 “서비스" 이용 동의(기존 회원은 회원가입) 등을 통해 개인정보의 수집, 이용, 제공에 대한 동의하신 내용을 언제든지 철회할 수 있습니다.',
          })}
          <br></br>
          <br></br>
          {formatMessage({
            defaultMessage: '제7조 (수집한 개인정보의 제 3자 제공)',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '“회사”는 정보주체의 별도 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조에 해당하는 경우 외에는 개인정보를 제3자에게 제공하지 않습니다.',
          })}
          <br></br>
          <br></br>
          {formatMessage({
            defaultMessage:
              '제8조 (개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항)',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '“회사”는 이용자의 정보를 수시로 저장하고 찾아내는 “쿠키(cookie)” 등을 사용합니다. "쿠키(cookie)"란 사이트 접속 시 이용자의 저장장치에 전송하는 특별한 텍스트 파일(text file)을 말합니다. 쿠키는 웹사이트가 이용자의 컴퓨터 인터넷 브라우저로 전송하는 소량의 정보이며, 컴퓨터 디스크에 저장됩니다. 모바일 애플리케이션과 같이 쿠키 기술을 사용할 수 없는 경우에는 쿠키와 유사한 기능을 수행하는 기술(광고식별자 등)을 사용할 수도 있습니다.',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '● 쿠키 등 사용 목적 로그인 식별/이용자의 사용 기록/기존 홈페이지 방문 또는 앱 사용 회수 파악 등을 통한 개인 맞춤 “서비스” 제공 등을 위해 쿠키를 운용합니다. 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다.',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '● 쿠키 설정 거부 방법 쿠키 설정을 거부하는 방법으로는 이용자가 사용하는 앱이나 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.',
          })}
          <br></br>
          <br></br>
          {formatMessage({
            defaultMessage: '제 9조 (개인정보처리의 위탁)',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '1. “회사”는 개인정보 처리업무를 위탁하고 있지 않습니다.',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '2. 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.',
          })}
          <br></br>
          <br></br>
          {formatMessage({
            defaultMessage: '제 10조(개인정보의 안전성 확보 조치)',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '“회사”는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '- 관리적 조치 : 내부관리계획 수립 및 시행. 개인정보 취급 담당자, 직원 등에 대한 정기적 교육',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '- 기술적 조치 : 개인정보처리시스템(또는 개인정보가 저장된 컴퓨터)의 비밀번호 설정 등 접근권한 관리, 개인정보가 저장된 파일의 암호화 등의 별도 보안기능 사용',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '- 물리적 조치 : 개인정보가 저장․보관된 장소의 접속시간, 출입통제 등',
          })}
          <br></br>
          <br></br>
          {formatMessage({
            defaultMessage: '제11조 (개인정보 보호책임자)',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '“회사”는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제를 처리하기 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.',
          })}
          <br></br>
          <br></br>
          {formatMessage({
            defaultMessage: '▶ 개인정보 보호책임자',
          })}
          <br></br>
          {formatMessage({
            defaultMessage: '성명 : 한이준',
          })}
          <br></br>
          {formatMessage({
            defaultMessage: '소속 및 직위 : CEO / 대표이사',
          })}
          <br></br>
          {formatMessage({
            defaultMessage: '연락처 : sunking@ascending.media',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '기타 개인정보침해에 관한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하여 주시기 바랍니다.',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '개인정보침해신고센터(privacy.kisa.or.kr / 국번없이 118)',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '대검찰청 사이버수사과(www.spo.go.kr / 국번없이 1301)',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '경찰청 사이버안전국(www.cyber.go.kr / 국번없이 182)',
          })}
          <br></br>
          {formatMessage({
            defaultMessage:
              '개인정보 분쟁조정위원회(www.kopico.go.kr/ 1833-6972)',
          })}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
