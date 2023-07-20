import React, { useState, useEffect } from "react";
import connexion from "../../services/connexion";
import NewBox from "../../components/NewBox/NewBox";
import logoLspd from "../../assets/logo_lspd.png";
import "./NewsPage.scss";

function NewsPage() {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const newsData = await connexion.get("/news");
    try {
      if (newsData) {
        setNews(newsData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="NewsContainer">
      <img className="logo-lspd" src={logoLspd} alt="Insignes de la LSPD" />

      {news.map((article) => (
        <NewBox key={article.id} article={article} />
      ))}
    </div>
  );
}

export default NewsPage;
