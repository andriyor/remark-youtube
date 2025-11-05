import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import {visit} from "unist-util-visit";
import wikiLinkPlugin from "remark-wiki-link";

const youtubeImageToLinkWithPreview = () => {
  return function (tree) {
    visit(tree, "image", function (node, index, parent) {
      const match = node.url.match(/https:\/\/www\.youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/);
      if (match) {
        const videoId = match[1];
        const title = node.alt || `YouTube Video`;

        const imageUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
        const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

        // Replace the image node with a link node containing the image
        parent.children[index] = {
          type: "link", url: youtubeUrl, title, children: [{
            type: "image", url: imageUrl, alt: title,
          }],
        };
      }
    });
  };
};

export default {
  plugins: [remarkParse, wikiLinkPlugin, remarkStringify, youtubeImageToLinkWithPreview],
};
