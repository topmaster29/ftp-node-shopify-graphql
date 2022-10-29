const { Shopify } = require('@shopify/shopify-api');
Shopify.Context.initialize({
    API_KEY: '93883939a7c64715b330ca0d88a59744',
    API_SECRET_KEY: '6ed086dd920e6ed840b53472df28c1a6',
    API_VERSION: '2021-10',
    HOST_NAME: 'looma-us.myshopify.com ',
    SCOPES: ['orders'],
    HOST_SCHEME: 'https',
})
const client = new Shopify.Clients.Graphql('looma-us.myshopify.com', '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');


const orderjson=async ()=>{
    const data = await client.query({
        data: `query {
            orders(first: 10) {
              edges {
                node {
                  id
                }
              }
            }
          }`,
    });
    console.log(JSON.stringify(data.body.data.orders))
}

orderjson();