import Button from '../atoms/Button';
import Input from '../atoms/Input';

function SearchForm({ keyword, onKeywordChange, onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <Input
        value={keyword}
        onChange={onKeywordChange}
        placeholder="名前・メールアドレス・会社名で検索"
      />
      <Button type="submit">検索</Button>
    </form>
  );
}

export default SearchForm;
