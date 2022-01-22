import {
    createClient,
    createPreviewSubscriptionHook,
    createImageUrlBuilder,
    createPortableTextComponent

} from 'next-sanity';

const config = {
    projectId: 'mo9ps5pq',
    dataset: 'production',
    apiVersion: 'v2021-10-21',
    useCdn: false,

};

export const sanityClient = createClient()