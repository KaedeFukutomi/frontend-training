import Heading from '../atoms/Heading';
import Text from '../atoms/Text';

function PageHeader() {
  return (
    <header className="page-header">
      <Text className="site-name">Frontend Training</Text>
      <Heading>プロフィールカード一覧</Heading>
      <Text className="page-lead">
        カード一覧 UI を React コンポーネントで構成したサンプルです。
      </Text>
    </header>
  );
}

export default PageHeader;
