export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "606dd8b1e59a3d00bf22de35",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-i75mfgjp",
                  apiId: "c11f849a-eb7a-4077-9e69-b4fad7b915ed",
                },
                {
                  buildHookId: "606dd8b1b96115008fcceb88",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-a22ibsnr",
                  apiId: "6732bbd9-be58-4b83-b019-789abc15a3ef",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/sumairq/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-a22ibsnr.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
