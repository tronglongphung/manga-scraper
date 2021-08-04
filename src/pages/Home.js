import React, { useEffect } from 'react';
import getChapterPanels from '../api/chapterPanels';

const Home = () => {
  document.cookie =
    'panel-fb-comment=fb-comment-title-show; ci_session=WBMp%2BsL4bCpUf7oZJVPfQVybOSuJ7LM4NxI5nJz10e4Kn2wcrEVP7PXFmWtQC65Rn%2F1u1hVcnNQqgNDnqV%2Be6VUUqP2ao609uwHfBrMWcAjpWqyKTc9QVcrQlJS62lKcooAYotQMx6o%2F0dmN2y6lZF6GVFdrQJE87rrvvLT2NYKtJaRCOV%2FXJPGQs0pRzmLG%2FKVDd1DfC8bSHLNvXUDSFyLVH0OqJZBQh6QXrID9zHqefkXB%2Fsp4Evshx8kE9VGoQ1lct4URlC29VcNnsai%2B9p8qP3CsJ5C9J6oslcgniS6VYcE2%2FxOC9gnOEgjfCBmLVXdje20duWjWwOFFKcQgXyQBHJX5N%2BGqrRhRX7q3xEsF3OKee%2BegDA4uWKGwgjJZdwjJshMlVJAKbLL6XJG43z4ULFhuwv0ZQ4EHwtBWbyfGB94w%2B86IAcF1F7Gv5K%2FiBE23ODXuzBIlSosItilI5g%3D%3D212eccb57e38d01bc36e056fe4b0d56924025198';

  // useEffect(() => {
  //   const panelData = getChapterPanels('https://readmanganato.com/manga-eh951664/chapter-264');
  //   const panelList = panelData.map((panel) => <img src={panel.uri} alt={panel.id} />);
  //   console.log(panelList);
  // });
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Home</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}

          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          </div>

          {/* /End replace */}
        </div>
      </main>
    </>
  );
};

export default Home;
