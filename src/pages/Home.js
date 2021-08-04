import React, { useEffect } from 'react';

import { Manganelo } from 'manganelo';
const manganelo = new Manganelo();

const Home = () => {
  async function chapterPanels() {
    const blackClover = await manganelo.getMangaByID('black_clover');
    const panels = await manganelo.getChapterPanels(blackClover.slug, '1');
    return panels;
  }

  useEffect(() => {
    chapterPanels();
  }, []);

  return (
    <div className="container">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
