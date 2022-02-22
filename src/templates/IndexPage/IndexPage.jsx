import React from 'react';
import Searcher from "components/Searcher/Searcher";
import Grid from "components/Grid/Grid";
import Card from "components/Card/Card";
import './styles.scss'
import Paginator from "components/Paginator/Paginator";
import Loading from "components/Loading/Loading";
import ErrorAlert from "components/ErrorAlert/ErrorAlert";
import {useIndexPage} from "templates/IndexPage/useIndexPage";
import {useTranslation} from "react-i18next";

const IndexPage = (
  {
    client,
    title,
    searcherFilters,
    cardParseFn
  }) => {

  const {
    data,
    loading,
    error,
    count,
    next,
    previous,
    filters,
    directionChange,
    orderByChange,
    searchChange,
    handleFilter,
    fetch,
    handleChangePagination,
    handleClearError
  } = useIndexPage({
    searcherFilters,
    client,
  })
  const {t} = useTranslation()
  const paginatorVisible = !!next || !!previous;

  let component;
  if (error) component = <ErrorAlert error={error} onHide={handleClearError}/>
  else if (loading) component = <Loading/>
  else component = (
      <>
        <Grid>
          {data?.map((item, index) => {
              const props = cardParseFn(item)
              return (
                <Card
                  key={index}
                  {...props}
                />
              )
            }
          )}
        </Grid>
        {paginatorVisible &&
          <Paginator
            count={count}
            next={next}
            previous={previous}
            onChange={handleChangePagination}
          />
        }
      </>

    )
  return (
    <div className="list-page">
      {title && <div className="title-page">{t(title)}</div>}
      <Searcher
        options={Object.values(searcherFilters)}
        values={filters}
        directionChange={directionChange}
        orderByChange={orderByChange}
        searchChange={searchChange}
        onSearch={fetch}
        onFilter={handleFilter}
      />
      {component}
    </div>
  );
};

export default IndexPage;
