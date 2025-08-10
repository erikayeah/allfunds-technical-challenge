import NewsCard from "../newsCard/NewsCArd";

const NewsList = ({ allNewsList, confirmArchive, confirmRemove }) => {
  const renderNews = () => {
    if (!allNewsList || allNewsList.length === 0) {
      return <p> Sorry! there is no news to show </p>;
    }

    return allNewsList.map((news, index) => (
      <NewsCard
        key={index}
        news={news}
        confirmArchive={confirmArchive}
        confirmRemove={confirmRemove}
      />
    ));
  };

  return <div>{renderNews()}</div>;
};

export default NewsList;
