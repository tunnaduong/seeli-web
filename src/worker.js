/**
 * SEELI landing page. Static files are served from the assets binding;
 * old and alternate hostnames are sent to https://seeli.cam (path and query kept).
 */
const CANONICAL = 'seeli.cam';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname !== CANONICAL || url.protocol !== 'https:') {
      url.hostname = CANONICAL;
      url.protocol = 'https:';
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
