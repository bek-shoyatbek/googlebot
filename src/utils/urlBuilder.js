import { Filter, QueryFieldGroup, UrlBuilder } from 'google-advanced-search'


const queryBuilderParams = {
    queryWords: "",
    lang: "",
    region: ""
}

/**
 * 
 *
 * @param {queryBuilderParams} params
 * @return {string} google url
 */
function buildUrl(params) {
    const query = new QueryFieldGroup({ queryWords: params.queryWords })
    const filter = new Filter({
        language: params.lang || "English",
        region: params.region || 'any',
        termsAppearing: 'anywhereInThePage',
        safeSearch: 'showExplicitResults',
        fileType: 'any',
        usageRights: 'any'
    })
    const urlBuilder = new UrlBuilder()

    return urlBuilder.generateGoogleSearchUrl(query, filter);
}




export default buildUrl; 