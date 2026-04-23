import Heading from '../atoms/Heading';
import Text from '../atoms/Text';

function PageHeader() {
  return (
    <header className="page-header">
      <Text className="site-name">Frontend Training</Text>
      <Heading>ユーザー一覧</Heading>
      <Text className="page-lead">
        APIから取得したユーザー情報を表示し、検索できる一覧ページを作成します。
      </Text>
    </header>
  );
}

export default PageHeader;
