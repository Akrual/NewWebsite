import Post from "./post.js";

// Register the Post component as the preview for entries in the blog collection
CMS.registerPreviewTemplate("blog", Post);

CMS.registerPreviewStyle("/admin/styles.css");

// Register any CSS file on the home page as a preview style
fetch("/")
  .then((response) => response.text())
  .then((html) => {
    const f = document.createElement("html");
    f.innerHTML = html;
    for (const tag of f.getElementsByTagName("link")) {
      if (tag.rel === "stylesheet" && !tag.media) {
        CMS.registerPreviewStyle(tag.href);
      }
    }
  });
