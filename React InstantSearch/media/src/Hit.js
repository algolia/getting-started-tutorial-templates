import React from 'react';
import {Highlight} from 'react-instantsearch-dom';

export default ({hit}) => <div>
<article>
  <div className="post-img">
    <a href={hit.permalink}>
      <img src={hit.image} />
    </a>
  </div>
  <div className="post-content">
    <div className="post-date">
      {hit.post_date_formatted}
    </div>
    <h2 className="entry-title">
      <a href={hit.permalink} rel="bookmark">
        <Highlight attribute="post_title" hit={hit} tagName="mark" />
      </a>
    </h2>
    <div className="post-excerpt">
      {hit._snippetResult.content.value}
    </div>
    <div className="entry-meta clear">
      <div className="author-gravatar">
        <img src={hit.author_image_url} width="40" height="40" />
      </div>
      <div className="entry-author-content">
        <div className="author-name">
          {hit._highlightResult.author_name.value}
        </div>
        <div className="post-meta-info">
          {hit.time_to_read} min read in <Highlight attribute="categories" hit={hit} tagName="mark" />
        </div>
      </div>
    </div>
  </div>
</article>
</div>