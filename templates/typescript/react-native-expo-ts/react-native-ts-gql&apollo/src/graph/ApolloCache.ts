import {InMemoryCache, NormalizedCacheObject} from 'apollo-cache-inmemory';
import {CachePersistor} from 'apollo-cache-persist';
import { AsyncStorage } from 'react-native';
import {PersistedData, PersistentStorage} from 'apollo-cache-persist/types';

export const cache = new InMemoryCache();

export const CacheManager = new CachePersistor({
    cache,
    storage: AsyncStorage as PersistentStorage<
        PersistedData<NormalizedCacheObject>
        >,
    maxSize: false,
    debug: __DEV__,
});
