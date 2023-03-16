// Outputs: /builtwith.json
export async function get({ params, request }) {
  return {
    body: `User-agent: *
Allow: /
Sitemap: https://www.welcomecourtier.com/sitemap-index.xml
Host: welcomecourtier.com
User-agent: *
Disallow: /
    `,
  };
}
