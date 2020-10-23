import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

//.find() return all items that are true
//currying => fx return fx
//code won't recompute its value when wrapped with memoize
export const selectCollection = memoize((collectionUrlParam) =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    ));