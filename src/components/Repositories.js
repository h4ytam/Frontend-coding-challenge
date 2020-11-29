import React from "react";
import RepoList from "./RepoList";
import InfiniteScroll from "react-infinite-scroll-component";

const Repositories = ({ items, onPageChange }) => {
  // console.log(currentPage);
  // const Pagination = () => {
  //   return currentPage + 1;
  // };

  return (
    <div>
      <h1>Repositories</h1>
      <InfiniteScroll
        dataLength={items.length}
        hasMore={true}
        next={() => onPageChange()}
      >
        {items && items.length
          ? items.map((item) => {
              return <RepoList key={item.id} items={item} />;
            })
          : null}
      </InfiniteScroll>
    </div>
  );
};

export default Repositories;
