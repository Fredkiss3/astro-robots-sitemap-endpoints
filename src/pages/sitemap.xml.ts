// Outputs: /builtwith.json
export async function get({ params, request }) {
  console.log({
    url: new URL(request.url).toString(),
  });
  return {
    body: `<urlset>
<url>
<loc>${new URL(request.url).toString()}</loc>
<priority>1.0</priority>
</url>
<url>
<loc>http://www.welcomecourtier.com/projet</loc>
<priority>0.5</priority>
</url>
</urlset>`,
  };
}
