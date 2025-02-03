// // newsController.js
// const News = require('../models/newsModel');

// const getNewsByLanguage = async (req, res) => {
//     const lang = req.params.lang.toLowerCase();

//     try {
//         // Fetch the latest item based on the createdAt field in descending order
//         const newsItems = await News.find().sort({ createdAt: -1 });

//         if (!newsItems || newsItems.length === 0) {
//             return res.status(404).json({ error: 'No news items found' });
//         }

//         const response = newsItems.map(news => {
//             const createdAtDate = new Date(news.createdAt).toISOString().split('T')[0];
//             return {
//                 'en': {
//                     title: news.title,
//                     description: news.description,
//                     img: news.img,
//                     videoUrl: news.videoUrl,
//                     createdAt: createdAtDate
//                 },
//                 'pu': {
//                     title: news.titlePa || "No title in Punjabi available",
//                     description: news.descriptionPa || "No description in Punjabi available",
//                     img: news.img,
//                     videoUrl: news.videoUrl,
//                     createdAt: createdAtDate
//                 },
//                 'default': {
//                     error: 'Invalid language selection'
//                 }
//             }[lang] || { error: 'Invalid language selection' };
//         });
//         res.json(response);
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };
// module.exports ={getNewsByLanguage}
const mongoose = require('mongoose')
const News = require('../models/newsModel');
const Category = require('../models/categoryModel'); // Import your Category model

const getNewsByLanguage = async (req, res) => {
    const lang = req.params.lang.toLowerCase();
    const page = parseInt(req.query.page) || 1;
    const pageSize = 8;

    try {
        // Pagination logic

        // Use aggregation to join with categories based on categoryId
        const newsItems = await News.aggregate([
            {
                $match: { isActive: true, type: "news" }
            },
            {
                $sort: { createdAt: -1 } // Sorting by createdAt in descending order
            },
            {
                $lookup: {
                    from: 'categories', // Assuming your categories collection name is 'categories'
                    localField: 'categoryId', // Field in the News collection
                    foreignField: '_id', // Field in the Category collection
                    as: 'categoryData'
                }
            },
            {
                $addFields: {
                    category: {
                        $cond: [
                            { $eq: [lang, 'en'] },
                            { $arrayElemAt: ['$categoryData.category', 0] }, // English category
                            { $arrayElemAt: ['$categoryData.categoryPa', 0] }, // Punjabi category

                        ]
                    },
                    categoryHandle: {
                        $arrayElemAt: ['$categoryData.handle', 0]
                    }
                }
            },
            {
                $project: {
                    title: {
                        $cond: [
                            { $eq: [lang, 'en'] },
                            '$title',
                            '$titlePa'
                        ]
                    },
                    description: {
                        $cond: [
                            { $eq: [lang, 'en'] },
                            '$description',
                            '$descriptionPa'
                        ]
                    },
                    img: 1,
                    videoUrl: 1,
                    handle: 1,
                    createdAt: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                    category: 1,
                    categoryHandle: 1,
                    author: 1,
                    type: 1

                }
            },
            {
                $skip: (page - 1) * pageSize // Skip documents based on current page
            },
            {
                $limit: pageSize // Limit the number of docs
            }
        ]);

        if (!newsItems || newsItems.length === 0) {
            return res.status(404).json({ error: 'No news items found' });
        }
        // console.log(">",newsItems)

        res.json(newsItems);
    } catch (error) {
        console.error('Error fetching news by language:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getNewsByLanguagePress = async (req, res) => {
    const lang = req.params.lang.toLowerCase();
    const page = parseInt(req.query.page) || 1;
    const pageSize = 8;

    try {
        // Pagination logic

        // Use aggregation to join with categories based on categoryId
        const newsItems = await News.aggregate([
            {
                $match: { isActive: true, type: "Press Releases" }
            },
            {
                $sort: { createdAt: -1 } // Sorting by createdAt in descending order
            },
            {
                $lookup: {
                    from: 'categories', // Assuming your categories collection name is 'categories'
                    localField: 'categoryId', // Field in the News collection
                    foreignField: '_id', // Field in the Category collection
                    as: 'categoryData'
                }
            },
            {
                $addFields: {
                    category: {
                        $cond: [
                            { $eq: [lang, 'en'] },
                            { $arrayElemAt: ['$categoryData.category', 0] }, // English category
                            { $arrayElemAt: ['$categoryData.categoryPa', 0] }, // Punjabi category

                        ]
                    },
                    categoryHandle: {
                        $arrayElemAt: ['$categoryData.handle', 0]
                    }
                }
            },
            {
                $project: {
                    title: {
                        $cond: [
                            { $eq: [lang, 'en'] },
                            '$title',
                            '$titlePa'
                        ]
                    },
                    description: {
                        $cond: [
                            { $eq: [lang, 'en'] },
                            '$description',
                            '$descriptionPa'
                        ]
                    },
                    img: 1,
                    videoUrl: 1,
                    handle: 1,
                    createdAt: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                    category: 1,
                    categoryHandle: 1,
                    author: 1,
                    type: 1

                }
            },
            {
                $skip: (page - 1) * pageSize // Skip documents based on current page
            },
            {
                $limit: pageSize // Limit the number of docs
            }
        ]);

        if (!newsItems || newsItems.length === 0) {
            return res.status(404).json({ error: 'No news items found' });
        }
        // console.log(">",newsItems)

        res.json(newsItems);
    } catch (error) {
        console.error('Error fetching news by language:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getNewsById = async (req, res) => {
    const lang = req.params.lang.toLowerCase()
    // const articleId = req.params.id 
    const handle = req.params.handle
    try {
        const [currentNewsItem] = await News.aggregate([
            {
                $match: {
                    // _id: new mongoose.Types.ObjectId(articleId) // Convert ID string to MongoDB ObjectId
                    handle: handle,
                    isActive: true
                }
            },
            {
                $lookup: {
                    from: 'categories', // Assuming your categories collection name is 'categories'
                    localField: 'categoryId',
                    foreignField: '_id',
                    as: 'categoryData'
                }
            },
            {
                $lookup: {
                    from: 'authors', // Assuming your authors collection name is 'authors'
                    localField: 'authorId', // Field in the News collection
                    foreignField: '_id', // Field in the Author collection
                    as: 'authorData'
                }
            },
            {
                $addFields: {
                    category: {
                        $cond: [
                            { $eq: [lang, 'en'] },
                            { $arrayElemAt: ['$categoryData.category', 0] }, // English category
                            { $arrayElemAt: ['$categoryData.categoryPa', 0] }, // Punjabi category

                        ]
                    },
                    categoryHandle: {
                        $arrayElemAt: ['$categoryData.handle', 0]
                    },
                    author: {
                        $cond: [
                            { $eq: [lang, 'en'] },
                            { $arrayElemAt: ['$authorData.name', 0] }, // English author name
                            { $arrayElemAt: ['$authorData.namePa', 0] } // Punjabi author name
                        ]
                    },
                    about: {
                        $cond: [
                            { $eq: [lang, 'en'] },
                            { $arrayElemAt: ['$authorData.about', 0] }, // English author about
                            { $arrayElemAt: ['$authorData.aboutPa', 0] } // Punjabi author about
                        ]
                    },
                    authorImg: {
                        $arrayElemAt: ['$authorData.profileImage', 0] // Author image URL
                    },
                    socialLink: {
                        $arrayElemAt: ['$authorData.socialLink', 0] // Author social link
                    }
                }
            },
            {
                $project: {
                    title: {
                        $cond: [
                            { $eq: [lang, 'en'] },
                            '$title',
                            '$titlePa'
                        ]
                    },
                    description: {
                        $cond: [
                            { $eq: [lang, 'en'] },
                            '$description',
                            '$descriptionPa'
                        ]
                    },
                    img: 1,
                    videoUrl: 1,
                    createdAt: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                    category: 1,
                    author: 1,
                    about: 1,
                    categoryHandle: 1,
                    socialLink: 1,
                    authorImg: 1,
                    handle: 1
                }
            }
        ]);

        // if (!newsItem || newsItem.length === 0) {
        //     return res.status(404).json({ error: 'News item not found' });
        // }
        // console.log('Current news item:', currentNewsItem);
        if (!currentNewsItem) {
            return res.status(404).json({ error: 'News item not found' });
        }

        const currentId = currentNewsItem._id; // Return the first item (assuming the ID is unique)
        // console.log(">>>",currentId)
        const previousNewsItem = await News.findOne({
            _id: { $lt: new mongoose.Types.ObjectId(currentId) }, // Find articles with IDs less than the current ID
            isActive: true
            // Add any other criteria if necessary (e.g., language, category, etc.)
        })
            .sort({ _id: -1 }) // Sort in descending order to get the nearest previous item
        // console.log(">>",previousNewsItem)


        const nextNewsItem = await News.findOne({
            _id: { $gt: new mongoose.Types.ObjectId(currentId) }, // Find articles with IDs greater than the current ID
            isActive: true
            // Add any other criteria if necessary (e.g., language, category, etc.)
        })
            .sort({ _id: 1 })

            ;
        // console.log(">>>", nextNewsItem)
        // // Construct the response object
        const response = {
            current: currentNewsItem,
            previousId: previousNewsItem ? (previousNewsItem.handle ? previousNewsItem.handle : null) : null,
            nextId: nextNewsItem ? (nextNewsItem.handle ? nextNewsItem.handle : null) : null
        };


        res.json(response);
    } catch (error) {
        console.error('Error fetching news by ID and language:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getNewsByIdPress = async (req, res) => {
    const lang = req.params.lang.toLowerCase()
    // const articleId = req.params.id 
    const handle = req.params.handle
    try {
        const [currentNewsItem] = await News.aggregate([
            {
                $match: {
                    // _id: new mongoose.Types.ObjectId(articleId) // Convert ID string to MongoDB ObjectId
                    handle: handle,
                    isActive: true
                }
            },
            {
                $lookup: {
                    from: 'categories', // Assuming your categories collection name is 'categories'
                    localField: 'categoryId',
                    foreignField: '_id',
                    as: 'categoryData'
                }
            },
            {
                $lookup: {
                    from: 'authors', // Assuming your authors collection name is 'authors'
                    localField: 'authorId', // Field in the News collection
                    foreignField: '_id', // Field in the Author collection
                    as: 'authorData'
                }
            },
            {
                $addFields: {
                    category: {
                        $cond: [
                            { $eq: [lang, 'en'] },
                            { $arrayElemAt: ['$categoryData.category', 0] }, // English category
                            { $arrayElemAt: ['$categoryData.categoryPa', 0] }, // Punjabi category

                        ]
                    },
                    categoryHandle: {
                        $arrayElemAt: ['$categoryData.handle', 0]
                    },
                    author: {
                        $cond: [
                            { $eq: [lang, 'en'] },
                            { $arrayElemAt: ['$authorData.name', 0] }, // English author name
                            { $arrayElemAt: ['$authorData.namePa', 0] } // Punjabi author name
                        ]
                    },
                    about: {
                        $cond: [
                            { $eq: [lang, 'en'] },
                            { $arrayElemAt: ['$authorData.about', 0] }, // English author about
                            { $arrayElemAt: ['$authorData.aboutPa', 0] } // Punjabi author about
                        ]
                    },
                    authorImg: {
                        $arrayElemAt: ['$authorData.profileImage', 0] // Author image URL
                    },
                    socialLink: {
                        $arrayElemAt: ['$authorData.socialLink', 0] // Author social link
                    }
                }
            },
            {
                $project: {
                    title: {
                        $cond: [
                            { $eq: [lang, 'en'] },
                            '$title',
                            '$titlePa'
                        ]
                    },
                    description: {
                        $cond: [
                            { $eq: [lang, 'en'] },
                            '$description',
                            '$descriptionPa'
                        ]
                    },
                    img: 1,
                    videoUrl: 1,
                    createdAt: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                    category: 1,
                    author: 1,
                    about: 1,
                    categoryHandle: 1,
                    socialLink: 1,
                    authorImg: 1,
                    handle: 1
                }
            }
        ]);

        // if (!newsItem || newsItem.length === 0) {
        //     return res.status(404).json({ error: 'News item not found' });
        // }
        // console.log('Current news item:', currentNewsItem);
        if (!currentNewsItem) {
            return res.status(404).json({ error: 'News item not found' });
        }

        const currentId = currentNewsItem._id; // Return the first item (assuming the ID is unique)
        // console.log(">>>",currentId)
        const previousNewsItem = await News.findOne({
            _id: { $lt: new mongoose.Types.ObjectId(currentId) }, // Find articles with IDs less than the current ID
            isActive: true
            // Add any other criteria if necessary (e.g., language, category, etc.)
        })
            .sort({ _id: -1 }) // Sort in descending order to get the nearest previous item
        // console.log(">>",previousNewsItem)


        const nextNewsItem = await News.findOne({
            _id: { $gt: new mongoose.Types.ObjectId(currentId) }, // Find articles with IDs greater than the current ID
            isActive: true
            // Add any other criteria if necessary (e.g., language, category, etc.)
        })
            .sort({ _id: 1 })

            ;
        // console.log(">>>", nextNewsItem)
        // // Construct the response object
        const response = {
            current: currentNewsItem,
            previousId: previousNewsItem ? (previousNewsItem.handle ? previousNewsItem.handle : null) : null,
            nextId: nextNewsItem ? (nextNewsItem.handle ? nextNewsItem.handle : null) : null
        };


        res.json(response);
    } catch (error) {
        console.error('Error fetching news by ID and language:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


const getAllCategoriesWithNews = async (req, res) => {
    const { lang } = req.params; // Destructure language from request parameters
    const page = parseInt(req.query.page) || 1;
    const pageSize = 8;
    try {
        // Aggregate to retrieve all categories with their respective news items
        const categoriesWithNews = await Category.aggregate([
            {
                $match: { isDeleted: false } // Match only categories that are not deleted
            },
            {
                $lookup: {
                    from: 'news', // Assuming your news collection name is 'news'
                    localField: '_id', // Field in the Category collection
                    foreignField: 'categoryId', // Field in the News collection
                    as: 'newsItems'
                }
            },
            {
                $addFields: {
                    // Include only the necessary fields based on the language
                    category: {
                        $cond: [
                            { $eq: [lang, 'en'] },
                            '$category', // English category
                            '$categoryPa' // Punjabi category
                        ]
                    },
                    categoryHandle: "$handle",
                    newsItems: {
                        $slice: ['$newsItems', (page - 1) * pageSize, pageSize] // Paginate news items
                    }
                }
            },
            {
                $unwind: "$newsItems" // Unwind to work with individual news items
            },
            {
                $match: { 'newsItems.isActive': true, 'newsItems.type': "news" } // Filter news items by isActive: true
            },
            {
                $sort: { "newsItems.createdAt": -1 } // Sort news items by createdAt in descending order
            },
            {
                $group: {
                    _id: "$_id",
                    categoryHandle: { $first: "$categoryHandle" },
                    category: { $first: "$category" }, // Group back by category
                    newsItems: { $push: "$newsItems" }, // Push news items back into an array
                }
            },
            {
                $project: {
                    _id: 1,
                    category: 1,
                    categoryHandle: 1,
                    newsItems: {
                        $map: {
                            input: '$newsItems',
                            as: 'item',
                            in: {
                                _id: '$$item._id', // Include news ID
                                title: {
                                    $cond: [
                                        { $eq: [lang, 'en'] },
                                        '$$item.title',
                                        '$$item.titlePa'
                                    ]
                                },
                                description: {
                                    $cond: [
                                        { $eq: [lang, 'en'] },
                                        '$$item.description',
                                        '$$item.descriptionPa'
                                    ]
                                },
                                img: '$$item.img',
                                videoUrl: '$$item.videoUrl',
                                handle: '$$item.handle',
                                createdAt: { $dateToString: { format: "%Y-%m-%d", date: "$$item.createdAt" } },
                            }
                        }
                    }
                }
            },
            {
                $sort: { "_id": 1 } // Sort categories by _id in ascending order
            }
        ]);

        if (!categoriesWithNews || categoriesWithNews.length === 0) {
            return res.status(404).json({ error: 'No categories with news items found' });
        }

        res.json(categoriesWithNews);
    } catch (error) {
        console.error('Error fetching categories with news items:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const getAllNewsWithCategory = async (req, res) => {
    const { lang } = req.params; // Destructure language from request parameters
    try {
        // Aggregate to retrieve all categories with their respective news items
        const categoriesWithNews = await Category.aggregate([
            {
                $match: { isDeleted: false } // Match only categories that are not deleted
            },
            {
                $lookup: {
                    from: 'news', // Assuming your news collection name is 'news'
                    localField: '_id', // Field in the Category collection
                    foreignField: 'categoryId', // Field in the News collection
                    as: 'newsItems'
                }
            },
            {
                $unwind: "$newsItems" // Unwind to work with individual news items
            },
            {
                $match: { 'newsItems.isActive': true } // Filter news items by isActive: true
            },
            {
                $addFields: {
                    // Include only the necessary fields based on the language
                    category: {
                        $cond: [
                            { $eq: [lang, 'en'] },
                            '$category', // English category
                            '$categoryPa', // Punjabi category
                        ]
                    },
                    categoryHandle: "$handle"
                }
            },
            {
                $sort: { "newsItems.createdAt": -1 } // Sort news items by createdAt in descending order
            },
            {
                $group: {
                    _id: "$_id",
                    categoryHandle: { $first: "$handle" },
                    category: { $first: "$category" }, // Group back by category
                    newsItems: { $push: "$newsItems" }, // Push all news items back into an array
                }
            },
            {
                $project: {
                    _id: 1,
                    category: 1,
                    categoryHandle: 1,
                    newsItems: {
                        $map: {
                            input: '$newsItems',
                            as: 'item',
                            in: {
                                _id: '$$item._id', // Include news ID
                                title: {
                                    $cond: [
                                        { $eq: [lang, 'en'] },
                                        '$$item.title',
                                        '$$item.titlePa'
                                    ]
                                },
                                description: {
                                    $cond: [
                                        { $eq: [lang, 'en'] },
                                        '$$item.description',
                                        '$$item.descriptionPa'
                                    ]
                                },
                                img: '$$item.img',
                                handle: "$$item.handle",
                                videoUrl: '$$item.videoUrl',
                                createdAt: { $dateToString: { format: "%Y-%m-%d", date: "$$item.createdAt" } },
                            }
                        }
                    }
                }
            },
            {
                $sort: { "_id": 1 } // Sort categories by _id in ascending order
            }
        ]);

        if (!categoriesWithNews || categoriesWithNews.length === 0) {
            return res.status(404).json({ error: 'No categories with news items found' });
        }

        res.json(categoriesWithNews);
    } catch (error) {
        console.error('Error fetching categories with news items:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { getNewsByLanguage, getNewsByLanguagePress, getNewsById, getNewsByIdPress, getAllCategoriesWithNews, getAllNewsWithCategory };
