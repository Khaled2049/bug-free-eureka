import React from 'react';
import TableRow from '../components/TableRow';
const Home = () => {
  return (
    <div>
      <h4>The Frontend Master Project</h4>
      <p>
        I enjoy learning new things. But I must admit that I also forget things
        I have learned if I don't use them. I wanted a place where I could come
        back to in the future. To see the things that I had learned in the past
        so that I may use it again if I ever need to. A single source of truth.
        Therefore, I decided to create this base project which contains some of
        the mini-projects that I have worked on. Enjoy!
      </p>
      <div>
        <h4>Projects</h4>
        <table className="table table-responsive">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Project Name</th>
              <th scope="col">Description</th>
              <th scope="col">Tools</th>
              <th scope="col">Completed</th>
            </tr>
          </thead>
          <tbody>
            <TableRow
              number="1"
              name="ArtGallery"
              desc="View art and add to shopping cart used context for state
                management"
              tools={['React', 'Typescript', 'Unsplash API']}
              completed="95%"
            />
            <TableRow
              number="2"
              name="CryptoAlert"
              desc="Watch news and view stats of cryptocurrency, and set alerts."
              tools={['React', 'Typescript', 'Alphavantage API', 'News API']}
              completed="75%"
            />
            <TableRow
              number="3"
              name="Blog"
              desc="What I learned from my classes at CUB"
              tools={['React', 'Typescript']}
              completed="0%"
            />
            <TableRow
              number="4"
              name="Movie Fight"
              desc="See movie stats & see which one to see"
              tools={['React', 'Typescript', 'omdb api']}
              completed="0%"
            />
            <TableRow
              number="5"
              name="MatterJs"
              desc="2d game using MatterJs"
              tools={['React', 'Typescript', 'matterjs']}
              completed="0%"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
