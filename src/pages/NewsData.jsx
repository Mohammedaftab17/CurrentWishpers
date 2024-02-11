import React, { useEffect, useState } from "react";
import Cart from "../Components/Cart";
import Loading from "../Components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";

function NewsData({ country, category }) {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const [Data, setData] = useState({
    articles: [],
    loading: true,
    page: 1,
    totalresult: 0,
  });

  useEffect(() => {
    fetchData();
  }, [category, country]);

  const fetchData = async () => {
    const pageSize = 8;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }&page=${Data.page}&pageSize=${pageSize}`;
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData((prevData) => ({
        articles: result.articles || [],
        loading: false,
        totalresult: result.totalResults,
        page: prevData.page + 1,
      }));
    } catch (error) {
      console.error(error);
      setData((prevData) => ({ ...prevData, loading: false }));
    }
  };

  const fetchMoreData = async () => {
    try {
      const pageSize = 8;
      const newUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }&page=${Data.page}&pageSize=${pageSize}`;
      const responseData = await fetch(newUrl);
      const response = await responseData.json();
      setData((prevData) => ({
        articles: [...prevData.articles, ...response.articles],
        totalresult: response.totalResults,
        page: prevData.page + 1,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>

      <h2 className= {`text-center text-3xl font-semibold py-3 ${
                     darkMode ? "bg-black text-white" : "bg-white text-black"
                  }`}>
        Current Wishpers- Top{" "}
        {category.charAt(0).toUpperCase() + category.slice(1)} Headlines
      </h2>
      <InfiniteScroll
        dataLength={Data.articles.length}
        next={fetchMoreData}
        hasMore={Data.articles.length !== Data.totalresult}
        loader={<Loading />}
      >
        <div className= {`container `}>
          <div className="row">
            {Data.articles.map((item, index) => (
              <div className="col md-8" key={index}>
                <Cart
                  title={
                    item.title ? item.title.slice(0, 30) : "No Title Available"
                  }
                  description={
                    item.description
                    ? item.description.slice(0, 80)
                    : "No Description Available"
                  }
                  imgurl={
                    item.urlToImage
                    ? item.urlToImage
                    : "https://www.shutterstock.com/image-vector/news-background-world-map-backdrop-260nw-691718833.jpg"
                  }
                  author={!item.author ? "Unknown" : item.author}
                  date={new Date(item.publishedAt).toGMTString()}
                  source={item.source.name}
                  url={
                    item.url
                    ? item.url
                    : "https://www.theverge.com/2023/11/29/23982046/sam-altman-interview-openai-ceo-rehired"
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
                  
    </>
  );
}

export default NewsData;
