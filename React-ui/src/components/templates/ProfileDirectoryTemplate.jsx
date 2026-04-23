import PageFooter from '../organisms/PageFooter';
import PageHeader from '../organisms/PageHeader';

function ProfileDirectoryTemplate({ searchArea, contentArea }) {
  return (
    <div className="page">
      <div className="container">
        <PageHeader />
        <main>
          <section className="toolbar">{searchArea}</section>
          {contentArea}
        </main>
        <PageFooter />
      </div>
    </div>
  );
}

export default ProfileDirectoryTemplate;
