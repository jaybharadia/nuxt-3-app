const fields = [
    "title",
    "date_created",
    "id",
    "slug",
    "status",
    "summary",
    "user_created.first_name",
    "user_created.last_name",
    "user_created.avatar.id",
    "cover.id",
];

export const useArticles = async () => {
    const { $items } = useNuxtApp();
    console.log("🚀 ~ file: article.js:4 ~ useArticles ~ $items:", $items);
    const item = await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                item: "asdasidjasdij2993293",
            });
        }, 1000);
    });

    return item;
};

export const useUser = async () => {
    const { $items } = useNuxtApp();
    console.log("🚀 ~ file: article.js:17 ~ useUser ~ $items:", $items);

    const user = await new Promise(async (resolve) => {
        await useArticles();
        setTimeout(() => {
            resolve({
                name: "jay",
                age: 20,
            });
        }, 3000);
    });

    return user;
};

export const useArticleSettings = () => {
    console.log("inside article settings call");
    const { getItems } = useDirectusItems();

    return getItems({
        collection: "dp_settings",
        params: {
            fields: ["featured_article", "popular_articles.*.*.*"],
        },
    });
};

export const useFeaturedArticleId = () => {
    return useArticleSettings().then((settings) => {
        return settings.featured_article;
    });
};

export const useArticleById = (id, getItemById) => {
    console.log(
        "🚀 ~ file: article.js:65 ~ useArticleById ~ getItemById:",
        getItemById
    );
    const fields = [
        "title",
        "date_created",
        "id",
        "slug",
        "status",
        "summary",
        "user_created.first_name",
        "user_created.last_name",
        "user_created.avatar.id",
        "cover.id",
    ];

    console.log("🚀 ~ file: article.js:64 ~ useArticleById ~ id:", id);

    // const { $getItemById } = useNuxtApp();
    // const { getItemById } = useDirectusItems();

    return getItemById({
        collection: "dp_articles",
        id,
        params: {
            fields,
        },
    });
};

export const useFeaturedArticle = () => {
    // return useFeaturedArticleId().then((featureArticleId) => {
    //     console.log(
    //         "🚀 ~ file: article.js:78 ~ returnuseFeaturedArticleId ~ featureArticleId:",
    //         featureArticleId
    //     );

    //     useArticleById(featureArticleId).then((result) => {
    //         console.log(
    //             "🚀 ~ file: article.js:84 ~ returnuseArticleById ~ result:",
    //             result
    //         );

    //         return {
    //             result,
    //             title: result.title,
    //             slug: result.slug,
    //             coverId: result.cover,
    //         };
    //     });
    // });

    return new Promise(async (resolve) => {
        const { getItemById } = useDirectusItems();

        const featureArticleId = await useFeaturedArticleId();

        console.log("get Item bt id --->", getItemById);

        const featuredArticle = await useArticleById(
            featureArticleId,
            getItemById
        );
        console.log(
            "🚀 ~ file: article.js:117 ~ returnnewPromise ~ featuredArticle:",
            featuredArticle
        );

        resolve(featuredArticle);
    });
};
