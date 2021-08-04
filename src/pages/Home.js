import React, { useEffect } from 'react';
import getChapterPanels from '../api/chapterPanels';

const Home = () => {
  useEffect(() => {
    const panelData = getChapterPanels('https://readmanganato.com/manga-eh951664/chapter-264');
    const panelList = panelData.map((panel) => <img src={panel.uri} alt={panel.id} />);
    console.log(panelList);
  });
  return (
    <div className="container">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
