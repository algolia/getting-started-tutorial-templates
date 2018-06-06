<template>
  <ais-index
    app-id="B1G2GM9NG0"
    api-key="aadef574be1f9252bb48d4ea09b5cfe5"
    index-name="demo_ecommerce"
    :query-parameters="{
      hitsPerPage: 5,
      attributesToSnippet: ['description:24'],
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
        <div id="brands">
          <ais-refinement-list
            attribute-name="brand"
            :class-names="{
              'ais-refinement-list__item': 'ais-refinement-list--item',
              'ais-refinement-list__label': 'ais-refinement-list--label',
              'ais-refinement-list__checkbox': 'ais-refinement-list--checkbox',
              'ais-refinement-list__count' : 'ais-refinement-list--count',
              'ais-refinement-list__item--active': 'ais-refinement-list--item__active'
            }"
          >
            <div slot="header" class="ais-refinement-list--header">Brands</div>
          </ais-refinement-list>
        </div>
      </div>
      <div class="right-panel">
        <div id="searchbox">
          <ais-search-box
            placeholder="Search for products"
            class="ais-search-box"
            :class-names="{
              'ais-input': 'ais-search-box--input',
              'ais-clear': 'ais-search-box--reset',
              'ais-clear--disabled': 'ais-SearchBox-reset--disabled',
              'ais-search-box__submit': 'ais-search-box--magnifier'
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
              <hits :result="result"></hits>
            </template>
          </ais-results>
        </div>
        <div id="pagination">
          <ais-pagination>
            <template slot="first">«</template>
            <template slot="previous">‹</template>
            <template slot="next">›</template>
            <template slot="last">»</template>
          </ais-pagination>
        </div>
      </div>
    </main>
  </ais-index>
</template>

<script>
import Hits from './Hits'

export default {
  components: { Hits }
}
</script>

<style src="./styles.css"></style>
