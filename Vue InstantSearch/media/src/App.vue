<template>
  <ais-index
    app-id="B1G2GM9NG0"
    api-key="aadef574be1f9252bb48d4ea09b5cfe5"
    index-name="demo_media"
    :query-parameters="{
      hitsPerPage: 3,
      attributesToSnippet: ['content:14'],
      snippetEllipsisText: ' [...]',
      highlightPreTag: '<em class=\'highlight\'>',
      highlightPostTag: '</em>'
    }"
  >
    <main class="search-container">
      <div class="left-panel">
        <div id="categories">
          <ais-refinement-list
            attribute-name="categories"
            :class-names="{
              'ais-refinement-list__item': 'ais-refinement-list--item',
              'ais-refinement-list__label': 'ais-refinement-list--label',
              'ais-refinement-list__checkbox': 'ais-refinement-list--checkbox',
              'ais-refinement-list__count' : 'ais-refinement-list--count',
              'ais-refinement-list__item--active': 'ais-refinement-list--item__active'
            }"
          >
            <div slot="header" class="ais-refinement-list--header">Categories</div>
          </ais-refinement-list>
        </div>
      </div>
      <div class="right-panel">
        <div id="searchbox">
          <ais-search-box
          placeholder="Search articles"
          class="ais-search-box"
          :class-names="{
            'ais-input': 'ais-search-box--input',
            'ais-clear': 'ais-search-box--reset',
            'ais-clear--disabled': 'ais-SearchBox-reset--disabled',
            'ais-search-box__submit': 'ais-search-box--magnifier',
            'ais-search-box__loading-indicator': 'ais-SearchBox-loadingIndicator',
          }"></ais-search-box>
        </div>
        <div id="stats">
          <ais-stats>
            <template slot-scope="{ totalResults, processingTime, query, resultStart, resultEnd }">
              ⚡️ <strong>{{ totalResults }}</strong> results found <span v-if="query !== ''">for <strong>"{{ query }}"</strong></span> in <strong>{{ processingTime }}ms</strong>
            </template>
          </ais-stats>
        </div>
        <div id="hits">
          <ais-results class="ais-hits">
            <template slot-scope="{ result }">
              <div class="ais-hits--item">
                <article>
                  <div class="post-img">
                    <a :href="result.permalink">
                      <img :src="result.image">
                    </a>
                  </div>
                  <div class="post-content">
                    <div class="post-date">{{ result.post_date_formatted }}</div>
                    <h2 class="entry-title">
                      <a :href="result.permalink" rel="bookmark">
                        <ais-highlight :result="result" attribute-name="post_title"></ais-highlight>
                      </a>
                    </h2>
                    <div class="post-excerpt">
                      <ais-snippet :result="result" attribute-name="content"></ais-snippet>
                    </div>
                    <div class="entry-meta clear">
                      <div class="author-gravatar">
                        <img :src="result.author_image_url" width="40" height="40">
                      </div>
                      <div class="entry-author-content">
                        <div class="author-name">
                          <ais-highlight :result="result" attribute-name="author_name"></ais-highlight>
                        </div>
                        <div class="post-meta-info">
                          {{ result.time_to_read }} min read in
                          <span v-html="result._highlightResult.categories[0].value"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <h2>
                <a :href="result.url">
                  {{ result.title }}
                </a>
              </h2>
              <p>{{ result.description }}</p>
            </template>
          </ais-results>
        </div>
        <div id="pagination">
          <ais-pagination
            :class-names="{
              'ais-pagination': 'ais-pagination',
              'ais-pagination__item': 'ais-pagination--item',
              'ais-pagination__item--next': 'ais-pagination-item__next',
              'ais-pagination__item--previous': 'ais-pagination-item__previous',
              'ais-pagination__item--disabled': 'ais-pagination--item__disabled',
              'ais-pagination__item--first': 'ais-pagination--item__first',
              'ais-pagination__item--last': 'ais-pagination--item__last',
              'ais-pagination__link': 'ais-pagination--link',
              'ais-pagination__item--active': 'ais-pagination--item__active'
            }"
          >
            <template slot="first">«</template>
            <template slot="previous">‹</template>
            <template slot="next">›</template>
            <template slot="last">»</template>
          </ais-pagination>
        </div>
      </div>
    </main>
    <footer>Source Code on <a href="#">Github</a></footer>
  </ais-index>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

html,
body {
  padding: 0;
  margin: 0;
}

body {
  min-height: 100%;
  padding: 24px;
  font-size: 14px;
  line-height: 24px;
  overflow-y: scroll;
  font-family: "Open Sans", sans-serif;
  background: #f0f2f5;
}

[class^="ais-"] {
  font-size: inherit;
}

a {
  color: #5468ff;
}

.highlight {
  font-style: normal;
  font-weight: bold;
}

.ais-index {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.search-container {
  flex-grow: 1;
  display: flex;
  width: 960px;
  min-height: 100%;
  margin: 0 auto;
}

@media (max-width: 1007px) {
  .search-container {
    width: 100%;
  }
}

#categories {
  margin-right: 24px;
  padding: 8px 0;
}

#categories,
.ais-hits--item,
.ais-search-box--input {
  height: auto;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.ais-search-box--input:focus {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.left-panel {
  flex: 0 0 240px;
}

.right-panel {
  width: calc(100% - 256px);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

#searchbox {
  flex-grow: 0;
  margin-bottom: 8px;
}

#searchbox,
#stats {
  flex-grow: 0;
}

.ais-search-box {
  position: relative;
  height: auto;
  width: 100%;
}

.ais-search-box--magnifier,
.ais-search-box--reset {
  position: absolute;
  top: 0;
  left: inherit;
  margin: 14px 16px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
}

.ais-SearchBox-reset--disabled {
  display: none;
}

.ais-search-box--magnifier svg,
.ais-search-box--reset svg {
  width: 13px;
  height: 13px;
  display: block;
}

.ais-search-box--magnifier svg {
  fill: #5468ff;
}

.ais-search-box--reset svg {
  fill: #ed5a6a;
}

.ais-search-box--magnifier {
  right: 0;
}

.ais-search-box--reset {
  background: none;
  padding: 0;
  border: none;
  right: 30px;
}

.ais-search-box--input {
  width: 100%;
  padding: 8px 16px;
  font-weight: normal;
  border: none;
  font-family: inherit;
  line-height: inherit;
}

#stats {
  flex-grow: 0;
  margin-bottom: 16px;
}

.ais-stats {
  font-size: 12px;
  color: #697782;
  opacity: 1;
}

#hits {
  flex-grow: 1;
}

.ais-refinement-list--header {
  font-weight: bolder;
  margin: 0;
  padding: 0 16px 8px;
  font-size: inherit;
  text-transform: uppercase;
  border-bottom: 1px solid #eee;
}

.ais-hits--item {
  margin-bottom: 24px;
}

.ais-hits--item article {
  display: flex;
}

.ais-hits--item .entry-author-content {
  font-size: 13px;
}

.ais-hits--item .post-date,
.ais-hits--item .post-meta-info {
  color: #999;
  font-size: 12px;
}

.ais-hits--item .entry-meta {
  display: flex;
}

.ais-hits--item .entry-title a {
  text-decoration: none;
}

.ais-hits--item .author-gravatar img {
  border-radius: 50%;
  margin-right: 8px;
  display: block;
}

.ais-hits--item .post-img a,
.ais-hits--item .post-img img {
  width: 100%;
  display: block;
}

@media (min-width: 768px) {
  .ais-hits--item .post-img {
    flex: 0 0 240px;
    overflow: hidden;
  }

  .ais-hits--item .post-img,
  .ais-hits--item .post-img a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ais-hits--item .post-img a {
    height: 100%;
  }

  .ais-hits--item .post-img img {
    width: auto;
    height: 100%;
    display: block;
  }
}

@media (max-width: 767px) {
  .ais-hits--item article {
    flex-direction: column;
  }
}

.ais-hits--item .post-excerpt {
  margin-bottom: 16px;
}

.ais-hits--item .entry-title {
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: normal;
}

.ais-hits--item .post-content {
  padding: 16px;
}

.ais-refinement-list--item {
  padding: 8px 16px;
}

.ais-refinement-list--label,
.ais-refinement-list--label:hover {
  color: black;
  cursor: pointer;
}

.ais-refinement-list--count {
  background: none;
  padding: 0;
  font-size: 12px;
  line-height: 24px;
  color: #999;
  float: right;
}

.ais-refinement-list--checkbox {
  margin: 0 8px 0 0;
}

.ais-refinement-list--item__active .ais-refinement-list--label {
  font-weight: 700;
}

.ais-refinement-list--item__active .ais-refinement-list--count {
  font-weight: normal;
}

.ais-pagination {
  display: flex;
  margin: 0 0 16px;
  padding: 0;
  background: none;
  list-style: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  box-shadow: none;
  flex-wrap: wrap;
}

.ais-pagination--item,
.ais-pagination--item__disabled {
  flex: 0 0 40px;
  width: auto;
  height: auto;
  margin: 4px;
  background-color: #5468ff;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  text-align: center;
  border-radius: 4px;
  transition: all 0.1s linear;
}

.ais-pagination--item__disabled {
  display: none;
}

.ais-pagination--item:hover,
.ais-pagination--item__active {
  background-color: #3a46a1;
}

.ais-pagination--item .ais-pagination--link,
.ais-pagination--item__disabled .ais-pagination--link {
  text-decoration: none;
  color: #fff;
  line-height: 32px;
}

footer {
  flex-grow: 0;
  text-align: center;
  font-size: 12px;
  color: #999;
}

/* Placeholders */

#searchbox:empty:before,
#hits:empty:before,
#categories:empty:before,
#stats:empty:before,
#pagination:empty:before {
  display: block;
  color: #999;
  padding: 16px;
}

#searchbox:empty,
#hits:empty,
#categories:empty,
#stats:empty,
#pagination:empty {
  padding: 0;
  background: none;
  border: dashed 3px #ddd;
  box-shadow: none;
  border-radius: 4px;
}

#searchbox:empty,
#stats:empty,
#hits:empty,
#pagination:empty {
  margin-bottom: 24px;
}

#searchbox:empty:before {
  content: "Uncomment the searchBox widget to add a search bar.";
}

#hits:empty:before {
  content: "Uncomment the hits widget to add hits list.";
}

#stats:empty:before {
  content: "Uncomment the stats widget to add search stats.";
}

#categories:empty:before {
  content: "Uncomment the categories widget to add categories stats.";
}

#pagination:empty:before {
  content: "Uncomment the pagination widget to add pagination.";
}
</style>
