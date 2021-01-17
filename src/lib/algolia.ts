import algoliasearch, {
  AlgoliaSearchOptions,
  SearchClient,
} from "algoliasearch";
import Constants from "expo-constants";
import Nation from "../types/nation";

// アルゴリア初期化
const client: SearchClient = algoliasearch(
  Constants.manifest.extra.algolia.appId,
  Constants.manifest.extra.algolia.searchAPIKEY
);

// アルゴリア検索関数

export const seachAlgoila = async (items: string) => {
  // アルゴリアのINDEX名
  const index = client.initIndex("nations");
  //   検索
  return await index.search(items);
};
