import type { Post } from "../types/Post";

export const PostsData: Post[] = [
    {
        id: 1,
        date: "Sunday , 1 Jan 2023",
        title: "Bill Walsh leadership lessons",
        name: "Orlando Diggs •",
        mainImgSrc: "/Task6/images/posts/post5/main.png",
        desc: [
            "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        ],
        category: [
            {
                name: "Leadership",
                color: "text-[#6941C6]",
                bgColor: "bg-[#F9F5FF]"
            },
            {
                name: "Management",
                color: "text-[#363F72]",
                bgColor: "bg-[#F8F9FC]"
            }
        ],
        sections: [
            {
                ImgSrc: "/Task6/images/posts/post4/1.png",
                detailsAboutImg: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                paragraphs: [
                    {
                        type: "p",
                        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                    },
                    {
                        type: "p",
                        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                    },
                    {
                        type: "p",
                        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing."
                    },
                    {
                        type: "p",
                        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid."

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Breaking Down the Grid",
                ImgSrc: "/Task6/images/posts/post4/2.png",
                detailsAboutImg: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                    },
                    {
                        type: "p",
                        text: "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                        span: "Columns: ",
                        spanStyle: "bold"

                    },
                    {
                        type: "p",
                        text: "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
                        span: "Gutters:",
                        spanStyle: "bold"

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Examples of Grids in Use",
                subTitle: "Example 1: Hierarchical Grid",
                ImgSrc: "/Task6/images/posts/post4/3.png",
                detailsAboutImg: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                        span: "The New York Times",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 2: Column Grid",
                ImgSrc: "/Task6/images/posts/post4/4.png",
                detailsAboutImg: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                        span: "Ritual.com",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 3: Modular Grid",
                ImgSrc: "/Task6/images/posts/post4/5.png",
                detailsAboutImg: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                        span: "Behance",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 4: Breaking the Grid",
                ImgSrc: "/Task6/images/posts/post4/6.png",
                detailsAboutImg: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                        span: "Shrine from Google’s Material Studies",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Benefits of the Grid",
                ImgSrc: "/Task6/images/posts/post4/7.png",
                detailsAboutImg: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
                    {
                        type: "p",
                        text: " Using a grid benefits both end users and the designers alike:"
                    },
                    {
                        type: "list",
                        text: [
                            "Designers can quickly put together well-aligned interfaces.",
                            "Users can easily scan predictable grid-based interfaces.",
                            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
                        ],
                        span: "responsive web design",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {
                title: "Choosing and Setting Up Your Grid",
                ImgSrc: "/Task6/images/posts/post4/8.png",
                detailsAboutImg: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                paragraphs: [
                    {
                        type: "p",
                        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",


                    },
                    {
                        type: "p",
                        text: "Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
                        span: "Choose the right grid for your needs.",
                        spanStyle: "bold"
                    },
                    {
                        type: "p",
                        text: "Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
                        span: "Spend time setting up your grid.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {

                ImgSrc: "/Task6/images/posts/post4/9.png",
                detailsAboutImg: "Content or elements should be placed within and across columns, not gutters.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
                        span: "Always place content within columns, not gutters.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                ]
            },
            {
                title: "Conclusion",
                paragraphs: [
                    {
                        type: "p",
                        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                    }
                ],
                paragraphToo: [
                ]
            }
        ]
    },{
        id: 2,
        date: "Sunday , 1 Jan 2023",
        title: "PM mental models",
        name: "Drew Cano • ",
        mainImgSrc: "/Task6/images/posts/post6/main.png",
        desc: [
            "Mental models are simple expressions of complex processes or relationships.",
        ],
        category: [
            {
                name: "Product",
                color: "text-[#026AA2]",
                bgColor: "bg-[#F0F9FF]"
            },
            {
                name: "Research",
                color: "text-[#3538CD]",
                bgColor: "bg-[#EEF4FF]"
            },
            {
                name: "Frameworks",
                color: "text-[#C4320A]",
                bgColor: "bg-[#FFF6ED]"
            }
        ],
        sections: [
            {
                ImgSrc: "/Task6/images/posts/post4/1.png",
                detailsAboutImg: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                paragraphs: [
                    {
                        type: "p",
                        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                    },
                    {
                        type: "p",
                        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                    },
                    {
                        type: "p",
                        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing."
                    },
                    {
                        type: "p",
                        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid."

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Breaking Down the Grid",
                ImgSrc: "/Task6/images/posts/post4/2.png",
                detailsAboutImg: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                    },
                    {
                        type: "p",
                        text: "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                        span: "Columns: ",
                        spanStyle: "bold"

                    },
                    {
                        type: "p",
                        text: "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
                        span: "Gutters:",
                        spanStyle: "bold"

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Examples of Grids in Use",
                subTitle: "Example 1: Hierarchical Grid",
                ImgSrc: "/Task6/images/posts/post4/3.png",
                detailsAboutImg: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                        span: "The New York Times",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 2: Column Grid",
                ImgSrc: "/Task6/images/posts/post4/4.png",
                detailsAboutImg: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                        span: "Ritual.com",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 3: Modular Grid",
                ImgSrc: "/Task6/images/posts/post4/5.png",
                detailsAboutImg: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                        span: "Behance",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 4: Breaking the Grid",
                ImgSrc: "/Task6/images/posts/post4/6.png",
                detailsAboutImg: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                        span: "Shrine from Google’s Material Studies",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Benefits of the Grid",
                ImgSrc: "/Task6/images/posts/post4/7.png",
                detailsAboutImg: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
                    {
                        type: "p",
                        text: " Using a grid benefits both end users and the designers alike:"
                    },
                    {
                        type: "list",
                        text: [
                            "Designers can quickly put together well-aligned interfaces.",
                            "Users can easily scan predictable grid-based interfaces.",
                            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
                        ],
                        span: "responsive web design",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {
                title: "Choosing and Setting Up Your Grid",
                ImgSrc: "/Task6/images/posts/post4/8.png",
                detailsAboutImg: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                paragraphs: [
                    {
                        type: "p",
                        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",


                    },
                    {
                        type: "p",
                        text: "Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
                        span: "Choose the right grid for your needs.",
                        spanStyle: "bold"
                    },
                    {
                        type: "p",
                        text: "Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
                        span: "Spend time setting up your grid.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {

                ImgSrc: "/Task6/images/posts/post4/9.png",
                detailsAboutImg: "Content or elements should be placed within and across columns, not gutters.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
                        span: "Always place content within columns, not gutters.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                ]
            },
            {
                title: "Conclusion",
                paragraphs: [
                    {
                        type: "p",
                        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                    }
                ],
                paragraphToo: [
                ]
            }
        ]
    },{
        id: 3,
        date: "Sunday , 1 Jan 2023",
        title: "What is Wireframing?",
        name: "Natali Craig •",
        mainImgSrc: "/Task6/images/posts/post7/main.png",
        desc: [
            "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        ],
        category: [
            {
                name: "Design",
                color: "text-[#6941C6]",
                bgColor: "bg-[#F9F5FF]"
            },
            {
                name: "Research",
                color: "text-[#3538CD]",
                bgColor: "bg-[#EEF4FF]"
            },
            {
                name: "Presentation",
                color: "text-[#C11574]",
                bgColor: "bg-[#FDF2FA]"
            }
        ],
        sections: [
            {
                ImgSrc: "/Task6/images/posts/post4/1.png",
                detailsAboutImg: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                paragraphs: [
                    {
                        type: "p",
                        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                    },
                    {
                        type: "p",
                        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                    },
                    {
                        type: "p",
                        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing."
                    },
                    {
                        type: "p",
                        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid."

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Breaking Down the Grid",
                ImgSrc: "/Task6/images/posts/post4/2.png",
                detailsAboutImg: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                    },
                    {
                        type: "p",
                        text: "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                        span: "Columns: ",
                        spanStyle: "bold"

                    },
                    {
                        type: "p",
                        text: "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
                        span: "Gutters:",
                        spanStyle: "bold"

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Examples of Grids in Use",
                subTitle: "Example 1: Hierarchical Grid",
                ImgSrc: "/Task6/images/posts/post4/3.png",
                detailsAboutImg: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                        span: "The New York Times",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 2: Column Grid",
                ImgSrc: "/Task6/images/posts/post4/4.png",
                detailsAboutImg: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                        span: "Ritual.com",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 3: Modular Grid",
                ImgSrc: "/Task6/images/posts/post4/5.png",
                detailsAboutImg: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                        span: "Behance",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 4: Breaking the Grid",
                ImgSrc: "/Task6/images/posts/post4/6.png",
                detailsAboutImg: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                        span: "Shrine from Google’s Material Studies",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Benefits of the Grid",
                ImgSrc: "/Task6/images/posts/post4/7.png",
                detailsAboutImg: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
                    {
                        type: "p",
                        text: " Using a grid benefits both end users and the designers alike:"
                    },
                    {
                        type: "list",
                        text: [
                            "Designers can quickly put together well-aligned interfaces.",
                            "Users can easily scan predictable grid-based interfaces.",
                            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
                        ],
                        span: "responsive web design",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {
                title: "Choosing and Setting Up Your Grid",
                ImgSrc: "/Task6/images/posts/post4/8.png",
                detailsAboutImg: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                paragraphs: [
                    {
                        type: "p",
                        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",


                    },
                    {
                        type: "p",
                        text: "Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
                        span: "Choose the right grid for your needs.",
                        spanStyle: "bold"
                    },
                    {
                        type: "p",
                        text: "Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
                        span: "Spend time setting up your grid.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {

                ImgSrc: "/Task6/images/posts/post4/9.png",
                detailsAboutImg: "Content or elements should be placed within and across columns, not gutters.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
                        span: "Always place content within columns, not gutters.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                ]
            },
            {
                title: "Conclusion",
                paragraphs: [
                    {
                        type: "p",
                        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                    }
                ],
                paragraphToo: [
                ]
            }
        ]
    },{
        id: 4,
        date: "Sunday , 1 Jan 2023",
        title: "How collaboration makes us better designers",
        name: "Candice Wu •",
        mainImgSrc: "/Task6/images/posts/post8/main.png",
        desc: [
            "Collaboration can make our teams stronger, and our individual designs better.",
        ],
        category: [
            {
                name: "Design",
                color: "text-[#6941C6]",
                bgColor: "bg-[#F9F5FF]"
            },
            {
                name: "Research",
                color: "text-[#3538CD]",
                bgColor: "bg-[#EEF4FF]"
            },
            {
                name: "Presentation",
                color: "text-[#C11574]",
                bgColor: "bg-[#FDF2FA]"
            }
        ],
        sections: [
            {
                ImgSrc: "/Task6/images/posts/post4/1.png",
                detailsAboutImg: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                paragraphs: [
                    {
                        type: "p",
                        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                    },
                    {
                        type: "p",
                        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                    },
                    {
                        type: "p",
                        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing."
                    },
                    {
                        type: "p",
                        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid."

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Breaking Down the Grid",
                ImgSrc: "/Task6/images/posts/post4/2.png",
                detailsAboutImg: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                    },
                    {
                        type: "p",
                        text: "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                        span: "Columns: ",
                        spanStyle: "bold"

                    },
                    {
                        type: "p",
                        text: "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
                        span: "Gutters:",
                        spanStyle: "bold"

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Examples of Grids in Use",
                subTitle: "Example 1: Hierarchical Grid",
                ImgSrc: "/Task6/images/posts/post4/3.png",
                detailsAboutImg: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                        span: "The New York Times",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 2: Column Grid",
                ImgSrc: "/Task6/images/posts/post4/4.png",
                detailsAboutImg: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                        span: "Ritual.com",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 3: Modular Grid",
                ImgSrc: "/Task6/images/posts/post4/5.png",
                detailsAboutImg: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                        span: "Behance",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 4: Breaking the Grid",
                ImgSrc: "/Task6/images/posts/post4/6.png",
                detailsAboutImg: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                        span: "Shrine from Google’s Material Studies",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Benefits of the Grid",
                ImgSrc: "/Task6/images/posts/post4/7.png",
                detailsAboutImg: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
                    {
                        type: "p",
                        text: " Using a grid benefits both end users and the designers alike:"
                    },
                    {
                        type: "list",
                        text: [
                            "Designers can quickly put together well-aligned interfaces.",
                            "Users can easily scan predictable grid-based interfaces.",
                            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
                        ],
                        span: "responsive web design",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {
                title: "Choosing and Setting Up Your Grid",
                ImgSrc: "/Task6/images/posts/post4/8.png",
                detailsAboutImg: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                paragraphs: [
                    {
                        type: "p",
                        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",


                    },
                    {
                        type: "p",
                        text: "Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
                        span: "Choose the right grid for your needs.",
                        spanStyle: "bold"
                    },
                    {
                        type: "p",
                        text: "Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
                        span: "Spend time setting up your grid.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {

                ImgSrc: "/Task6/images/posts/post4/9.png",
                detailsAboutImg: "Content or elements should be placed within and across columns, not gutters.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
                        span: "Always place content within columns, not gutters.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                ]
            },
            {
                title: "Conclusion",
                paragraphs: [
                    {
                        type: "p",
                        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                    }
                ],
                paragraphToo: [
                ]
            }
        ]
    },{
        id: 5,
        date: "Sunday , 1 Jan 2023",
        title: "Grid system for better Design User Interface",
        name: "Orlando Diggs •",
        mainImgSrc: "/Task6/images/posts/post4/main.png",
        desc: [
            "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
            "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go."
        ],
        category: [
            {
                name: "Design",
                color: "text-[#6941C6]",
                bgColor: "bg-[#F9F5FF]"
            },
            {
                name: "Interface",
                color: "text-[#C11574]",
                bgColor: "bg-[#FDF2FA]"
            }
        ],
        sections: [
            {
                ImgSrc: "/Task6/images/posts/post4/1.png",
                detailsAboutImg: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                paragraphs: [

                ],
                paragraphToo: [
                    "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
                    "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
                    "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
                    "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid."
                ]
            },
            {
                title: "Breaking Down the Grid",
                ImgSrc: "/Task6/images/posts/post4/2.png",
                detailsAboutImg: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                    },
                    {
                        type: "p",
                        text: "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                        span: "Columns: ",
                        spanStyle: "bold"

                    },
                    {
                        type: "p",
                        text: "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
                        span: "Gutters:",
                        spanStyle: "bold"

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Examples of Grids in Use",
                subTitle: "Example 1: Hierarchical Grid",
                ImgSrc: "/Task6/images/posts/post4/3.png",
                detailsAboutImg: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                        span: "The New York Times",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 2: Column Grid",
                ImgSrc: "/Task6/images/posts/post4/4.png",
                detailsAboutImg: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                        span: "Ritual.com",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 3: Modular Grid",
                ImgSrc: "/Task6/images/posts/post4/5.png",
                detailsAboutImg: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                        span: "Behance",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 4: Breaking the Grid",
                ImgSrc: "/Task6/images/posts/post4/6.png",
                detailsAboutImg: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                        span: "Shrine from Google’s Material Studies",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Benefits of the Grid",
                ImgSrc: "/Task6/images/posts/post4/7.png",
                detailsAboutImg: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
                    {
                        type: "p",
                        text: " Using a grid benefits both end users and the designers alike:"
                    },
                    {
                        type: "list",
                        text: [
                            "Designers can quickly put together well-aligned interfaces.",
                            "Users can easily scan predictable grid-based interfaces.",
                            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
                        ],
                        span: "responsive web design",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {
                title: "Choosing and Setting Up Your Grid",
                ImgSrc: "/Task6/images/posts/post4/8.png",
                detailsAboutImg: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                paragraphs: [
                    {
                        type: "p",
                        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",


                    },
                    {
                        type: "p",
                        text: "Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
                        span: "Choose the right grid for your needs.",
                        spanStyle: "bold"
                    },
                    {
                        type: "p",
                        text: "Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
                        span: "Spend time setting up your grid.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {

                ImgSrc: "/Task6/images/posts/post4/9.png",
                detailsAboutImg: "Content or elements should be placed within and across columns, not gutters.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
                        span: "Always place content within columns, not gutters.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                ]
            },
            {
                title: "Conclusion",
                paragraphs: [
                    {
                        type: "p",
                        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                    }
                ],
                paragraphToo: [
                ]
            }
        ]
    },{
        id: 6,
        date: "Sunday , 1 Jan 2023",
        title: "Migrating to Linear 101s",
        name: "Alec Whitten • ",
        mainImgSrc: "/Task6/images/posts/post2/main.png",
        desc: [
            "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
        ],
        category: [
            {
                name: "Design",
                color: "text-[#026AA2]",
                bgColor: "bg-[#F0F9FF]"
            },
            {
                name: "Research",
                color: "text-[#C11574]",
                bgColor: "bg-[#FDF2FA]"
            },
        ],
        sections: [
            {
                ImgSrc: "/Task6/images/posts/post4/1.png",
                detailsAboutImg: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                paragraphs: [
                    {
                        type: "p",
                        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                    },
                    {
                        type: "p",
                        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                    },
                    {
                        type: "p",
                        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing."
                    },
                    {
                        type: "p",
                        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid."

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Breaking Down the Grid",
                ImgSrc: "/Task6/images/posts/post4/2.png",
                detailsAboutImg: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                    },
                    {
                        type: "p",
                        text: "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                        span: "Columns: ",
                        spanStyle: "bold"

                    },
                    {
                        type: "p",
                        text: "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
                        span: "Gutters:",
                        spanStyle: "bold"

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Examples of Grids in Use",
                subTitle: "Example 1: Hierarchical Grid",
                ImgSrc: "/Task6/images/posts/post4/3.png",
                detailsAboutImg: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                        span: "The New York Times",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 2: Column Grid",
                ImgSrc: "/Task6/images/posts/post4/4.png",
                detailsAboutImg: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                        span: "Ritual.com",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 3: Modular Grid",
                ImgSrc: "/Task6/images/posts/post4/5.png",
                detailsAboutImg: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                        span: "Behance",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 4: Breaking the Grid",
                ImgSrc: "/Task6/images/posts/post4/6.png",
                detailsAboutImg: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                        span: "Shrine from Google’s Material Studies",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Benefits of the Grid",
                ImgSrc: "/Task6/images/posts/post4/7.png",
                detailsAboutImg: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
                    {
                        type: "p",
                        text: " Using a grid benefits both end users and the designers alike:"
                    },
                    {
                        type: "list",
                        text: [
                            "Designers can quickly put together well-aligned interfaces.",
                            "Users can easily scan predictable grid-based interfaces.",
                            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
                        ],
                        span: "responsive web design",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {
                title: "Choosing and Setting Up Your Grid",
                ImgSrc: "/Task6/images/posts/post4/8.png",
                detailsAboutImg: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                paragraphs: [
                    {
                        type: "p",
                        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",


                    },
                    {
                        type: "p",
                        text: "Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
                        span: "Choose the right grid for your needs.",
                        spanStyle: "bold"
                    },
                    {
                        type: "p",
                        text: "Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
                        span: "Spend time setting up your grid.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {

                ImgSrc: "/Task6/images/posts/post4/9.png",
                detailsAboutImg: "Content or elements should be placed within and across columns, not gutters.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
                        span: "Always place content within columns, not gutters.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                ]
            },
            {
                title: "Conclusion",
                paragraphs: [
                    {
                        type: "p",
                        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                    }
                ],
                paragraphToo: [
                ]
            }
        ]
    },{
        id: 7,
        date: "Sunday , 1 Jan 2023",
        title: "Building your API Stack",
        name: "Orlando Diggs •",
        mainImgSrc: "/Task6/images/posts/post3/main.png",
        desc: [
            "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
        ],
        category: [
            {
                name: "Design",
                color: "text-[#027A48]",
                bgColor: "bg-[#ECFDF3]"
            },
            {
                name: "Research",
                color: "text-[#C11574]",
                bgColor: "bg-[#FDF2FA]"
            }
        ],
        sections: [
            {
                ImgSrc: "/Task6/images/posts/post4/1.png",
                detailsAboutImg: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                paragraphs: [
                    {
                        type: "p",
                        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                    },
                    {
                        type: "p",
                        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                    },
                    {
                        type: "p",
                        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing."
                    },
                    {
                        type: "p",
                        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid."

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Breaking Down the Grid",
                ImgSrc: "/Task6/images/posts/post4/2.png",
                detailsAboutImg: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                    },
                    {
                        type: "p",
                        text: "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                        span: "Columns: ",
                        spanStyle: "bold"

                    },
                    {
                        type: "p",
                        text: "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
                        span: "Gutters:",
                        spanStyle: "bold"

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Examples of Grids in Use",
                subTitle: "Example 1: Hierarchical Grid",
                ImgSrc: "/Task6/images/posts/post4/3.png",
                detailsAboutImg: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                        span: "The New York Times",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 2: Column Grid",
                ImgSrc: "/Task6/images/posts/post4/4.png",
                detailsAboutImg: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                        span: "Ritual.com",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 3: Modular Grid",
                ImgSrc: "/Task6/images/posts/post4/5.png",
                detailsAboutImg: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                        span: "Behance",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 4: Breaking the Grid",
                ImgSrc: "/Task6/images/posts/post4/6.png",
                detailsAboutImg: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                        span: "Shrine from Google’s Material Studies",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Benefits of the Grid",
                ImgSrc: "/Task6/images/posts/post4/7.png",
                detailsAboutImg: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
                    {
                        type: "p",
                        text: " Using a grid benefits both end users and the designers alike:"
                    },
                    {
                        type: "list",
                        text: [
                            "Designers can quickly put together well-aligned interfaces.",
                            "Users can easily scan predictable grid-based interfaces.",
                            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
                        ],
                        span: "responsive web design",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {
                title: "Choosing and Setting Up Your Grid",
                ImgSrc: "/Task6/images/posts/post4/8.png",
                detailsAboutImg: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                paragraphs: [
                    {
                        type: "p",
                        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",


                    },
                    {
                        type: "p",
                        text: "Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
                        span: "Choose the right grid for your needs.",
                        spanStyle: "bold"
                    },
                    {
                        type: "p",
                        text: "Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
                        span: "Spend time setting up your grid.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {

                ImgSrc: "/Task6/images/posts/post4/9.png",
                detailsAboutImg: "Content or elements should be placed within and across columns, not gutters.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
                        span: "Always place content within columns, not gutters.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                ]
            },
            {
                title: "Conclusion",
                paragraphs: [
                    {
                        type: "p",
                        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                    }
                ],
                paragraphToo: [
                ]
            }
        ]
    },{
        id: 8,
        date: "Sunday , 1 Jan 2023",
        title: "UX review presentations",
        name: "Orlando Diggs •",
        mainImgSrc: "/Task6/images/posts/post1/main.png",
        desc: [
            "How do you create compelling presentations that wow your colleagues and impress your managers?",
        ],
        category: [
            {
                name: "Design",
                color: "text-[#6941C6]",
                bgColor: "bg-[#F9F5FF]"
            },
            {
                name: "Research",
                color: "text-[#3538CD]",
                bgColor: "bg-[#EEF4FF]"
            },
            {
                name: "Presentation",
                color: "text-[#C11574]",
                bgColor: "bg-[#FDF2FA]"
            }
        ],
        sections: [
            {
                ImgSrc: "/Task6/images/posts/post4/1.png",
                detailsAboutImg: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                paragraphs: [
                    {
                        type: "p",
                        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                    },
                    {
                        type: "p",
                        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                    },
                    {
                        type: "p",
                        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing."
                    },
                    {
                        type: "p",
                        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid."

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Breaking Down the Grid",
                ImgSrc: "/Task6/images/posts/post4/2.png",
                detailsAboutImg: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                    },
                    {
                        type: "p",
                        text: "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                        span: "Columns: ",
                        spanStyle: "bold"

                    },
                    {
                        type: "p",
                        text: "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
                        span: "Gutters:",
                        spanStyle: "bold"

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Examples of Grids in Use",
                subTitle: "Example 1: Hierarchical Grid",
                ImgSrc: "/Task6/images/posts/post4/3.png",
                detailsAboutImg: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                        span: "The New York Times",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 2: Column Grid",
                ImgSrc: "/Task6/images/posts/post4/4.png",
                detailsAboutImg: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                        span: "Ritual.com",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 3: Modular Grid",
                ImgSrc: "/Task6/images/posts/post4/5.png",
                detailsAboutImg: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                        span: "Behance",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 4: Breaking the Grid",
                ImgSrc: "/Task6/images/posts/post4/6.png",
                detailsAboutImg: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                        span: "Shrine from Google’s Material Studies",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Benefits of the Grid",
                ImgSrc: "/Task6/images/posts/post4/7.png",
                detailsAboutImg: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
                    {
                        type: "p",
                        text: " Using a grid benefits both end users and the designers alike:"
                    },
                    {
                        type: "list",
                        text: [
                            "Designers can quickly put together well-aligned interfaces.",
                            "Users can easily scan predictable grid-based interfaces.",
                            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
                        ],
                        span: "responsive web design",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {
                title: "Choosing and Setting Up Your Grid",
                ImgSrc: "/Task6/images/posts/post4/8.png",
                detailsAboutImg: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                paragraphs: [
                    {
                        type: "p",
                        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",


                    },
                    {
                        type: "p",
                        text: "Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
                        span: "Choose the right grid for your needs.",
                        spanStyle: "bold"
                    },
                    {
                        type: "p",
                        text: "Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
                        span: "Spend time setting up your grid.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {

                ImgSrc: "/Task6/images/posts/post4/9.png",
                detailsAboutImg: "Content or elements should be placed within and across columns, not gutters.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
                        span: "Always place content within columns, not gutters.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                ]
            },
            {
                title: "Conclusion",
                paragraphs: [
                    {
                        type: "p",
                        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                    }
                ],
                paragraphToo: [
                ]
            }
        ]
    }, {
        id: 9,
        date: "Sunday , 1 Jan 2023",
        title: "Our top 10 Javascript frameworks to use",
        name: "Demi WIlkinson •",
        mainImgSrc: "/Task6/images/posts/post9/main.png",
        desc: [
            "JavaScript frameworks make development easy with extensive features and functionalities.",
        ],
        category: [
            {
                name: "Software Development",
                color: "text-[#027A48]",
                bgColor: "bg-[#ECFDF3]"
            },
            {
                name: "Tools",
                color: "text-[#C11574]",
                bgColor: "bg-[#FDF2FA]"
            },
            {
                name: "Saas",
                color: "text-[#C01048]",
                bgColor: "bg-[#FFF1F3]"
            }
        ],
        sections: [
            {
                ImgSrc: "/Task6/images/posts/post4/1.png",
                detailsAboutImg: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                paragraphs: [
                    {
                        type: "p",
                        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                    },
                    {
                        type: "p",
                        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                    },
                    {
                        type: "p",
                        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing."
                    },
                    {
                        type: "p",
                        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid."

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Breaking Down the Grid",
                ImgSrc: "/Task6/images/posts/post4/2.png",
                detailsAboutImg: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                    },
                    {
                        type: "p",
                        text: "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                        span: "Columns: ",
                        spanStyle: "bold"

                    },
                    {
                        type: "p",
                        text: "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
                        span: "Gutters:",
                        spanStyle: "bold"

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Examples of Grids in Use",
                subTitle: "Example 1: Hierarchical Grid",
                ImgSrc: "/Task6/images/posts/post4/3.png",
                detailsAboutImg: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                        span: "The New York Times",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 2: Column Grid",
                ImgSrc: "/Task6/images/posts/post4/4.png",
                detailsAboutImg: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                        span: "Ritual.com",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 3: Modular Grid",
                ImgSrc: "/Task6/images/posts/post4/5.png",
                detailsAboutImg: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                        span: "Behance",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 4: Breaking the Grid",
                ImgSrc: "/Task6/images/posts/post4/6.png",
                detailsAboutImg: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                        span: "Shrine from Google’s Material Studies",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Benefits of the Grid",
                ImgSrc: "/Task6/images/posts/post4/7.png",
                detailsAboutImg: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
                    {
                        type: "p",
                        text: " Using a grid benefits both end users and the designers alike:"
                    },
                    {
                        type: "list",
                        text: [
                            "Designers can quickly put together well-aligned interfaces.",
                            "Users can easily scan predictable grid-based interfaces.",
                            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
                        ],
                        span: "responsive web design",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {
                title: "Choosing and Setting Up Your Grid",
                ImgSrc: "/Task6/images/posts/post4/8.png",
                detailsAboutImg: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                paragraphs: [
                    {
                        type: "p",
                        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",


                    },
                    {
                        type: "p",
                        text: "Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
                        span: "Choose the right grid for your needs.",
                        spanStyle: "bold"
                    },
                    {
                        type: "p",
                        text: "Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
                        span: "Spend time setting up your grid.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {

                ImgSrc: "/Task6/images/posts/post4/9.png",
                detailsAboutImg: "Content or elements should be placed within and across columns, not gutters.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
                        span: "Always place content within columns, not gutters.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                ]
            },
            {
                title: "Conclusion",
                paragraphs: [
                    {
                        type: "p",
                        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                    }
                ],
                paragraphToo: [
                ]
            }
        ]
    }, {
        id: 10,
        date: "Sunday , 1 Jan 2023",
        title: "Podcast: Creating a better CX Community",
        name: "Orlando Diggs •",
        mainImgSrc: "/Task6/images/posts/post10/main.png",
        desc: [
            "Starting a community doesn’t need to be complicated, but how do you get started?",
        ],
        category: [
            {
                name: "Podcasts",
                color: "text-[#6941C6]",
                bgColor: "bg-[#F9F5FF]"
            },
            {
                name: "Customer Success",
                color: "text-[#363F72]",
                bgColor: "bg-[#F8F9FC]"
            },
            {
                name: "Presentation",
                color: "text-[#C11574]",
                bgColor: "bg-[#FDF2FA]"
            }
        ],
        sections: [
            {
                ImgSrc: "/Task6/images/posts/post4/1.png",
                detailsAboutImg: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                paragraphs: [
                    {
                        type: "p",
                        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                    },
                    {
                        type: "p",
                        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                    },
                    {
                        type: "p",
                        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing."
                    },
                    {
                        type: "p",
                        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid."

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Breaking Down the Grid",
                ImgSrc: "/Task6/images/posts/post4/2.png",
                detailsAboutImg: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                    },
                    {
                        type: "p",
                        text: "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                        span: "Columns: ",
                        spanStyle: "bold"

                    },
                    {
                        type: "p",
                        text: "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
                        span: "Gutters:",
                        spanStyle: "bold"

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Examples of Grids in Use",
                subTitle: "Example 1: Hierarchical Grid",
                ImgSrc: "/Task6/images/posts/post4/3.png",
                detailsAboutImg: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                        span: "The New York Times",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 2: Column Grid",
                ImgSrc: "/Task6/images/posts/post4/4.png",
                detailsAboutImg: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                        span: "Ritual.com",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 3: Modular Grid",
                ImgSrc: "/Task6/images/posts/post4/5.png",
                detailsAboutImg: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                        span: "Behance",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 4: Breaking the Grid",
                ImgSrc: "/Task6/images/posts/post4/6.png",
                detailsAboutImg: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                        span: "Shrine from Google’s Material Studies",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Benefits of the Grid",
                ImgSrc: "/Task6/images/posts/post4/7.png",
                detailsAboutImg: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
                    {
                        type: "p",
                        text: " Using a grid benefits both end users and the designers alike:"
                    },
                    {
                        type: "list",
                        text: [
                            "Designers can quickly put together well-aligned interfaces.",
                            "Users can easily scan predictable grid-based interfaces.",
                            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
                        ],
                        span: "responsive web design",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {
                title: "Choosing and Setting Up Your Grid",
                ImgSrc: "/Task6/images/posts/post4/8.png",
                detailsAboutImg: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                paragraphs: [
                    {
                        type: "p",
                        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",


                    },
                    {
                        type: "p",
                        text: "Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
                        span: "Choose the right grid for your needs.",
                        spanStyle: "bold"
                    },
                    {
                        type: "p",
                        text: "Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
                        span: "Spend time setting up your grid.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {

                ImgSrc: "/Task6/images/posts/post4/9.png",
                detailsAboutImg: "Content or elements should be placed within and across columns, not gutters.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
                        span: "Always place content within columns, not gutters.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                ]
            },
            {
                title: "Conclusion",
                paragraphs: [
                    {
                        type: "p",
                        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                    }
                ],
                paragraphToo: [
                ]
            }
        ]
    }, {
        id: 11,
        date: "Friday , 22 Nov 2024",
        title: "Disable distracting animations in diagrams",
        name: "Orlando Diggs •",
        mainImgSrc: "/Task6/images/posts/post11/main.gif",
        desc: [
            "Flow animations on connectors can make diagrams much easier to understand",
        ],
        category: [
            {
                name: "Diagram",
                color: "text-[#6941C6]",
                bgColor: "bg-[#F9F5FF]"
            },
            {
                name: "Flowchart",
                color: "text-[#C11574]",
                bgColor: "bg-[#FDF2FA]"
            }
        ],
        sections: [
            {
                ImgSrc: "/Task6/images/posts/post11/1.png",
                detailsAboutImg: "While animations are useful to explain a diagram in training material or documentation, they can be distracting when you are trying to draw and edit it.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Select View > Animations from the Classic draw.io menu or … > Settings > Animations from the toolbar if you are using the Simple Mode or Sketch editor theme."
                    },
                    {
                        type: "p",
                        text: "Note: This does not disable the flow animation style on the connectors, only the visual effect in your browser window.",
                        span: "Note:",
                        spanStyle: "bold"
                    },
                    {
                        type: "p",
                        text: "For example, if you export the diagram to a URL while you have disabled Animations via the menu, opening the exported link will animate all connectors that have the Flow Animation style."
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "More animated connector styles",
                ImgSrc: "/Task6/images/posts/post11/2.png",
                detailsAboutImg: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                paragraphs: [
                    {
                        type: "p",
                        text: "You can use animated connectors to illustrate and explain process flows, electrical circuits, sequence diagrams, infographics, and any other diagram that uses connectors to indicate a direction."
                    },
                    {
                        type: "p",
                        text: "Flow Animation: Select the connector(s) you want to animate and enable the Flow Animation checkbox in the Style tab of the format panel.",
                        span: "Flow Animation:",
                        spanStyle: "bold"

                    },
                    {
                        type: "p",
                        text: "Animation Pattern: Change the animation pattern by selecting a different one from the Pattern drop down list.",
                        span: "Animation Pattern:",
                        spanStyle: "bold"

                    },
                    {
                        type: "p",
                        text: "Animation Styles: Change the Flow Duration, Flow Timing and Flow Direction via the connector Properties at the bottom of the Style tab of the format panel.",
                        span: "Animation Styles: ",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Conclusion",
                paragraphs: [
                    {
                        type: "p",
                        text: "Flow animations on connectors can make diagrams much easier to understand - they can clearly show in which direction a process flows or how control/data moves through a system. "
                    },
                    {
                        type: "p",
                        text: "But such animations can distract you while you edit a diagram. You can now disable the visual animation via the draw.io menu, but keep the flow animation style on the connector."
                    }
                ],
                paragraphToo: [
                ]
            }
        ]
    }, {
        id: 12,
        date: "Friday , 27 Sep 2024",
        title: "Showing probabilities and risk in diagrams",
        name: "Orlando Diggs •",
        mainImgSrc: "/Task6/images/posts/post12/main.webp",
        desc: [
            "Risk management and knowing the probabilities of a success are important in any business, but much more so when human lives are on the line.",
        ],
        category: [
            {
                name: "Diagram",
                color: "text-[#6941C6]",
                bgColor: "bg-[#F9F5FF]"
            },
            {
                name: "Flowchart",
                color: "text-[#C11574]",
                bgColor: "bg-[#FDF2FA]"
            }
        ],
        sections: [
            {
                title: "Probability flows",
                ImgSrc: "/Task6/images/posts/post12/1.webp",
                detailsAboutImg: "However, political processes like this are still quite simple when compared to many engineering and production challenges.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Probability trees are limiting - they become unreadable when dealing with a highly complex processes with many different outcomes."
                    },
                    {
                        type: "p",
                        text: "You can indicate probabilities in readable ways on many different types of diagrams - not just trees.",

                    },
                    {
                        type: "p",
                        text: "During the Brexit turmoil, you may have seen Jon Worth’s popular “Where now” flowcharts with probabilities attached to each path. This is an excellent way to find out which outcome is most likely.",
                        span: "Jon Worth’s popular “Where now” flowcharts",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Risk overview of a complex project",
                ImgSrc: "/Task6/images/posts/post12/2.webp",
                detailsAboutImg: "Hover over the steps and notes in the diagram viewer to see the related reference material from NASA, science research papers and news organisations used as a basis for this diagram.",
                paragraphs: [
                    {
                        type: "p",
                        text: "In complex engineering projects, there are so many nested manufacturing processes with probabilities attached to each branch in each sub-process that a simpler overview diagram is needed to serve as a guiding roadmap and status report."
                    },
                    {
                        type: "p",
                        text: "Note that the more detailed probability flows are still required to manage those safety critical risks - these diagrams would be drawn by the teams managing those subprocesses. Each team would then share their probabilities and risks, and this will be shown with styles and notes on a risk overview diagram."
                    },
                    {
                        type: "p",
                        text: "The following example explores the status and current likelihood of success for each step toward establishing a lunar habitat. There are many complex manufacturing steps involved for each facet needed to support human life.",

                    }
                ],
                paragraphToo: [
                    "Animation Styles: Change the Flow Duration, Flow Timing and Flow Direction via the connector Properties at the bottom of the Style tab of the format panel.",
                    "Achieved: Some milestones have been reliably achieved (in green) - smaller rockets reliably ferry supplies and humans to and from the International Space Station (ISS).",
                    "In progress: Some components are being prototyped (in blue) - a couple of habitats are installed on the ISS, and the heavy-payload rockets are being tested, albeit often unsuccessfully. Food and water is being successfully supplied to the ISS, thus these necessary steps are drawn as in-progress."
                ]
            },
            {
                title: "Conclusion",
                paragraphs: [
                    {
                        type: "p",
                        text: "To use fractions or formulae in labels, make sure nothing is selected, then enable the Mathematical Typesetting checkbox in the Diagram tab of the format panel if you are using the Simple editor mode, or enable Extras > Mathematical Typesetting in classic mode.",
                        span: "use fractions or formulae in labels",
                        spanStyle: "bold"
                    },
                    {
                        type: "p",
                        text: "There are several different types of diagrams for modelling threats and risks in software - data flow diagrams, process flow diagrams and attack trees are used extensively in software and IT system threat modelling."
                    }
                ],
                paragraphToo: [
                ]
            }
        ]
    }, {
        id: 13,
        date: "Tuesday , 29 Oct 2024",
        title: "Updated Citrix shape library for clean infrastructure diagrams",
        name: "Orlando Diggs •",
        mainImgSrc: "/Task6/images/posts/post13/main.webp",
        desc: [
            "The new Citrix shape library helps you to draw Citrix diagrams of complex infrastructures that are easier to read. The older 3D shapes are still available in the Citrix (legacy) shape library.",
        ],
        category: [
            {
                name: "Diagram",
                color: "text-[#6941C6]",
                bgColor: "bg-[#F9F5FF]"
            },
            {
                name: "Flowchart",
                color: "text-[#C11574]",
                bgColor: "bg-[#FDF2FA]"
            }
        ],
        sections: [
            {
                title: "Enable the new Citrix shape library in draw.io",
                ImgSrc: "/Task6/images/posts/post13/1.webp",
                detailsAboutImg: "Citrix is a popular secure centralised platform for deploying applications, desktops and virtual solutions to devices in large enterprises with locations distributed worldwide, especially where high availability and scalability is required.",
                paragraphs: [
                    {
                        type: "list",
                        text: [
                            "Click on More Shapes at the bottom of the shapes panel in draw.io.",
                            "Enable the checkbox next to the SAP shape library in the Networking section and click Apply."
                        ]
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Citrix infrastructure diagram tips",
                ImgSrc: "/Task6/images/posts/post13/2.webp",
                detailsAboutImg: "You could also use collapsible container shapes or AWS groups.",
                paragraphs: [
                    {
                        type: "list",
                        text: [
                            "Use regions to visually group segments, security zones, and workloads. A simple rectangle placed behind a group of systems or services is the simplest option. You could also use collapsible container shapes or AWS groups.",
                            "Use shape fill colours and outline styles consistently to visually indicate regions, types and grouping of services or tools, or show which teams are responsible for maintaining those infrastructure areas.",
                            "Use application, device and platform logos where possible. Search for these by name in the top left of the shapes panel in draw.io. Hover over any shape to see a larger preview.",
                            "Add a legend if necessary. This is especially important when working with external parties, as they may not be familiar with all the components in your infrastructure.",
                            "Align shapes using the blue guidelines that appear as you move them around the drawing canvas.",
                            "To group shapes once you have drawn a subsystem and placed it in a region, drag a selection box around all the shapes, right-click and select Group from the context menu. Now you can move the group without losing its internal layout."
                        ]
                    }
                ],
                paragraphToo: []
            },
            {
                title: "Conclusion",
                paragraphs: [
                    {
                        type: "p",
                        text: "Additional examples are in the drawio-diagrams repository on GitHub. Check for cloud and network templates, and more detailed examples. You can import a diagram into draw.io as a template using its raw GitHub URL.",
                        span: "drawio-diagrams repository on GitHub",
                        spanStyle: "bold"
                    },
                    {
                        type: "p",
                        text: "Some platforms can automatically generate AWS, GCP or Azure diagrams of your implemented infrastructure. Cloudcraft and Cloudockit can export to the .drawio or .vsd formats. Select File > Import from or drag and drop this file onto the drawing canvas to import the diagram of that sub-infrastructure.",
                        span: "Cloudcraft and Cloudockit ",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                ]
            }
        ]
    }, {
        id: 14,
        date: "Wednesday, 09 Oct 2024",
        title: "Align connectors easily with a waypoint shape",
        name: "Orlando Diggs •",
        mainImgSrc: "/Task6/images/posts/post14/main.webp",
        desc: [
            "In any diagram with branches - trees and org charts, Ishikawa diagrams, wiring diagrams, and even some flow charts - you will have multiple overlapping connectors attached to the parent shape. Using a waypoint shape between connectors will prevent manual alignment frustration when you move the parent or child shapes.",
        ],
        category: [
            {
                name: "Diagram",
                color: "text-[#6941C6]",
                bgColor: "bg-[#F9F5FF]"
            },
            {
                name: "Flowchart",
                color: "text-[#C11574]",
                bgColor: "bg-[#FDF2FA]"
            }
        ],
        sections: [
            {
                title: "The waypoint shape",
                ImgSrc: "/Task6/images/posts/post14/1.gif",
                detailsAboutImg: "The Waypoint shape is in the Misc shape library, which is a subcategory in the General shape library.",
                paragraphs: [
                    {
                        type: "p",
                        text: "f you are going to use the waypoint shape or any other shape often, add it to the scratchpad so you can find it easily."
                    },
                    {
                        type: "list",
                        text: [
                            "Search for waypoint in the shape panel.",
                            "Add this Waypoint shape to the canvas.",
                            "Drag it back onto the Scratchpad in the shape panel - by putting in the Scratchpad, you won’t have to go search for it."
                        ]
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Faster and neater diagrams",
                ImgSrc: "/Task6/images/posts/post14/2.png",
                detailsAboutImg: "Then drag a connector from the parent shape to the waypoint shape.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Tree diagrams, org charts and flowcharts look great with neat orthogonal connectors - lines with aligned vertical and horizontal bends. These connections look best when ‘tied together’ where multiple connectors attach to a single parent shape, instead of overlapping.",
                        span: "orthogonal connectors",
                        spanStyle: "bold"
                    },
                    {
                        type: "p",
                        text: "Select one or more connectors and choose Orthogonal (or Vertical or Horizontal) from the Waypoints drop down list in the Style tab of the format panel."
                    },
                    {
                        type: "p",
                        text: "Place a waypoint shape in between the parent shape and the child shapes at the spot where the connectors would neatly separate. Then drag a connector from the parent shape to the waypoint shape. And drag connectors from the waypoint shape to each of the child shapes."
                    }
                ],
                paragraphToo: [
                    "Place a waypoint shape in between the parent shape and the child shapes at the spot where the connectors would neatly separate. Then drag a connector from the parent shape to the waypoint shape. And drag connectors from the waypoint shape to each of the child shapes."
                ]
            },
            {
                title: "Hide the waypoint shape",
                ImgSrc: "/Task6/images/posts/post14/3.png",
                detailsAboutImg: "The waypoint shape will become invisible but still exist.",
                paragraphs: [
                    {
                        type: "p",
                        text: "While it is useful to see the waypoint shape in some diagrams, such as electrical wiring diagrams, you may want to hide it in tree diagrams and org charts.",
                    },
                    {
                        type: "list",
                        text: [
                            "Select the waypoint shape.",
                            "In the Style tab of the format panel, deselect the Line checkbox."
                        ]
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Conclusion",
                paragraphs: [
                    {
                        type: "p",
                        text: "The waypoint shape will become invisible but still exist. The connectors will neatly line up and go through that point. "
                    },
                    {
                        type: "p",
                        text: "Click on that spot to select the invisible waypoint shape if you need to move it."
                    }
                ],
                paragraphToo: [
                ]
            }
        ]
    }, {
        id: 15,
        date: "Wednesday, 09 Oct 2024",
        title: "Draw.io UML diagram tool",
        name: "Orlando Diggs •",
        mainImgSrc: "/Task6/images/posts/post15/main.png",
        desc: [
            "There are a wide range of UML diagramming tools available, as standalone applications, as online-only cloud software, and embedded in various content platforms. Some take text input to generate diagrams, and others are specialised to draw just one type of UML diagram.",
            "Note: Whichever application you choose, it should be able to save your diagrams in a format that can be opened by other applications. SVG is the most widely supported diagramming format.",
        ],
        category: [
            {
                name: "Diagram",
                color: "text-[#6941C6]",
                bgColor: "bg-[#F9F5FF]"
            },
            {
                name: "Flowchart",
                color: "text-[#C11574]",
                bgColor: "bg-[#FDF2FA]"
            }
        ],
        sections: [
            {
                title: "Up-to-date UML shape libraries",
                ImgSrc: "/Task6/images/posts/post15/1.png",
                detailsAboutImg: "To diagram faster - search for a shape’s name to find it quickly. Add commonly used shapes and groups of shapes to the scratchpad.",
                paragraphs: [
                    {
                        type: "p",
                        text: "To be able to draw all the different types of UML diagrams, you’ll need a wide variety of shapes that are kept up-to-date with the UML specification.",
                        span: "UML specification.",
                        spanStyle: "bold"
                    },
                    {
                        type: "p",
                        text: "Click More Shapes at the bottom of the shape panel and enable both the UML 2.5 and UML shape libraries in Software section.",
                        span: "UML 2.5 and UML shape libraries",
                        spanStyle: "bold"
                    },
                    {
                        type: "p",
                        text: "draw.io includes 220 UML shapes for all types of UML diagrams, and many thousands of IT, general and cloud platform shapes for all types of technical diagrams. All these shape libraries are regularly updated and expanded.",
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "UML line styles - ends and labels",
                ImgSrc: "/Task6/images/posts/post15/2.webp",
                detailsAboutImg: "Then drag a connector from the parent shape to the waypoint shape.",
                paragraphs: [
                    {
                        type: "p",
                        text: "UML class diagrams in particular need a large variety of arrow ‘shapes’ (connector end styles) to indicate the associations between components of your system: inheritance (generalisation), aggregation, composition, and multiplicity.",
                        span: "UML class diagrams",
                        spanStyle: "bold"
                    },
                    {
                        type: "p",
                        text: "Use the connector end drop down lists in the Style tab of the format panel to show the association type."
                    },
                    {
                        type: "p",
                        text: "Again, UML class diagrams can require a lot of information to be attached to the connectors. Labels can go in the centre (usage), or at either end (aggregation/composition).",
                        span: "Labels",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Double click in the middle and at either end of a connector in your draw.io diagram to add three labels - these will move with the connector as you reposition their attached class shapes."
                ]
            },
            {
                title: "Conclusion",
                paragraphs: [
                    {
                        type: "p",
                        text: "Learn more about the many different types of UML diagrams and see a wide range of examples."
                    },
                    {
                        type: "p",
                        text: "Diagram confidentiality is a common requirement for IT development teams. Use the fully offline draw.io desktop app.",
                    },
                    {
                        type: "p",
                        text: "Alternatively, the data governance and lockdown options in draw.io can be configured to limit communication to between your browser and the platform you are storing your diagram files, whether that be Confluence or Jira Cloud, Google Drive, GitHub, or another integration.",
                    }
                ],
                paragraphToo: [
                ]
            }
        ]
    },
    {
        id: 16,
        date: "Sunday , 1 Jan 2023",
        title: "UX review presentations",
        name: "Orlando Diggs •",
        mainImgSrc: "/Task6/images/posts/post1/main.png",
        desc: [
            "How do you create compelling presentations that wow your colleagues and impress your managers?",
        ],
        category: [
            {
                name: "Design",
                color: "text-[#6941C6]",
                bgColor: "bg-[#F9F5FF]"
            },
            {
                name: "Research",
                color: "text-[#3538CD]",
                bgColor: "bg-[#EEF4FF]"
            },
            {
                name: "Presentation",
                color: "text-[#C11574]",
                bgColor: "bg-[#FDF2FA]"
            }
        ],
        sections: [
            {
                ImgSrc: "/Task6/images/posts/post4/1.png",
                detailsAboutImg: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                paragraphs: [
                    {
                        type: "p",
                        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                    },
                    {
                        type: "p",
                        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                    },
                    {
                        type: "p",
                        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing."
                    },
                    {
                        type: "p",
                        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid."

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Breaking Down the Grid",
                ImgSrc: "/Task6/images/posts/post4/2.png",
                detailsAboutImg: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                    },
                    {
                        type: "p",
                        text: "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                        span: "Columns: ",
                        spanStyle: "bold"

                    },
                    {
                        type: "p",
                        text: "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
                        span: "Gutters:",
                        spanStyle: "bold"

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Examples of Grids in Use",
                subTitle: "Example 1: Hierarchical Grid",
                ImgSrc: "/Task6/images/posts/post4/3.png",
                detailsAboutImg: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                        span: "The New York Times",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 2: Column Grid",
                ImgSrc: "/Task6/images/posts/post4/4.png",
                detailsAboutImg: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                        span: "Ritual.com",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 3: Modular Grid",
                ImgSrc: "/Task6/images/posts/post4/5.png",
                detailsAboutImg: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                        span: "Behance",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 4: Breaking the Grid",
                ImgSrc: "/Task6/images/posts/post4/6.png",
                detailsAboutImg: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                        span: "Shrine from Google’s Material Studies",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Benefits of the Grid",
                ImgSrc: "/Task6/images/posts/post4/7.png",
                detailsAboutImg: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
                    {
                        type: "p",
                        text: " Using a grid benefits both end users and the designers alike:"
                    },
                    {
                        type: "list",
                        text: [
                            "Designers can quickly put together well-aligned interfaces.",
                            "Users can easily scan predictable grid-based interfaces.",
                            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
                        ],
                        span: "responsive web design",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {
                title: "Choosing and Setting Up Your Grid",
                ImgSrc: "/Task6/images/posts/post4/8.png",
                detailsAboutImg: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                paragraphs: [
                    {
                        type: "p",
                        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",


                    },
                    {
                        type: "p",
                        text: "Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
                        span: "Choose the right grid for your needs.",
                        spanStyle: "bold"
                    },
                    {
                        type: "p",
                        text: "Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
                        span: "Spend time setting up your grid.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {

                ImgSrc: "/Task6/images/posts/post4/9.png",
                detailsAboutImg: "Content or elements should be placed within and across columns, not gutters.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
                        span: "Always place content within columns, not gutters.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                ]
            },
            {
                title: "Conclusion",
                paragraphs: [
                    {
                        type: "p",
                        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                    }
                ],
                paragraphToo: [
                ]
            }
        ]
    },
    {
        id: 17,
        date: "Sunday , 1 Jan 2023",
        title: "Grid system for better Design User Interface",
        name: "Orlando Diggs •",
        mainImgSrc: "/Task6/images/posts/post4/main.png",
        desc: [
            "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
            "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go."
        ],
        category: [
            {
                name: "Design",
                color: "text-[#6941C6]",
                bgColor: "bg-[#F9F5FF]"
            },
            {
                name: "Interface",
                color: "text-[#C11574]",
                bgColor: "bg-[#FDF2FA]"
            }
        ],
        sections: [
            {
                ImgSrc: "/Task6/images/posts/post4/1.png",
                detailsAboutImg: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                paragraphs: [

                ],
                paragraphToo: [
                    "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
                    "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
                    "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
                    "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid."
                ]
            },
            {
                title: "Breaking Down the Grid",
                ImgSrc: "/Task6/images/posts/post4/2.png",
                detailsAboutImg: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                    },
                    {
                        type: "p",
                        text: "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                        span: "Columns: ",
                        spanStyle: "bold"

                    },
                    {
                        type: "p",
                        text: "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
                        span: "Gutters:",
                        spanStyle: "bold"

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Examples of Grids in Use",
                subTitle: "Example 1: Hierarchical Grid",
                ImgSrc: "/Task6/images/posts/post4/3.png",
                detailsAboutImg: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                        span: "The New York Times",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 2: Column Grid",
                ImgSrc: "/Task6/images/posts/post4/4.png",
                detailsAboutImg: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                        span: "Ritual.com",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 3: Modular Grid",
                ImgSrc: "/Task6/images/posts/post4/5.png",
                detailsAboutImg: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                        span: "Behance",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 4: Breaking the Grid",
                ImgSrc: "/Task6/images/posts/post4/6.png",
                detailsAboutImg: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                        span: "Shrine from Google’s Material Studies",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Benefits of the Grid",
                ImgSrc: "/Task6/images/posts/post4/7.png",
                detailsAboutImg: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
                    {
                        type: "p",
                        text: " Using a grid benefits both end users and the designers alike:"
                    },
                    {
                        type: "list",
                        text: [
                            "Designers can quickly put together well-aligned interfaces.",
                            "Users can easily scan predictable grid-based interfaces.",
                            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
                        ],
                        span: "responsive web design",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {
                title: "Choosing and Setting Up Your Grid",
                ImgSrc: "/Task6/images/posts/post4/8.png",
                detailsAboutImg: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                paragraphs: [
                    {
                        type: "p",
                        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",


                    },
                    {
                        type: "p",
                        text: "Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
                        span: "Choose the right grid for your needs.",
                        spanStyle: "bold"
                    },
                    {
                        type: "p",
                        text: "Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
                        span: "Spend time setting up your grid.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {

                ImgSrc: "/Task6/images/posts/post4/9.png",
                detailsAboutImg: "Content or elements should be placed within and across columns, not gutters.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
                        span: "Always place content within columns, not gutters.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                ]
            },
            {
                title: "Conclusion",
                paragraphs: [
                    {
                        type: "p",
                        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                    }
                ],
                paragraphToo: [
                ]
            }
        ]
    },{
        id: 18,
        date: "Sunday , 1 Jan 2023",
        title: "Migrating to Linear 101s",
        name: "Alec Whitten • ",
        mainImgSrc: "/Task6/images/posts/post2/main.png",
        desc: [
            "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
        ],
        category: [
            {
                name: "Design",
                color: "text-[#026AA2]",
                bgColor: "bg-[#F0F9FF]"
            },
            {
                name: "Research",
                color: "text-[#C11574]",
                bgColor: "bg-[#FDF2FA]"
            },
        ],
        sections: [
            {
                ImgSrc: "/Task6/images/posts/post4/1.png",
                detailsAboutImg: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                paragraphs: [
                    {
                        type: "p",
                        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                    },
                    {
                        type: "p",
                        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                    },
                    {
                        type: "p",
                        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing."
                    },
                    {
                        type: "p",
                        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid."

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Breaking Down the Grid",
                ImgSrc: "/Task6/images/posts/post4/2.png",
                detailsAboutImg: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                    },
                    {
                        type: "p",
                        text: "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                        span: "Columns: ",
                        spanStyle: "bold"

                    },
                    {
                        type: "p",
                        text: "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
                        span: "Gutters:",
                        spanStyle: "bold"

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Examples of Grids in Use",
                subTitle: "Example 1: Hierarchical Grid",
                ImgSrc: "/Task6/images/posts/post4/3.png",
                detailsAboutImg: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                        span: "The New York Times",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 2: Column Grid",
                ImgSrc: "/Task6/images/posts/post4/4.png",
                detailsAboutImg: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                        span: "Ritual.com",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 3: Modular Grid",
                ImgSrc: "/Task6/images/posts/post4/5.png",
                detailsAboutImg: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                        span: "Behance",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 4: Breaking the Grid",
                ImgSrc: "/Task6/images/posts/post4/6.png",
                detailsAboutImg: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                        span: "Shrine from Google’s Material Studies",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Benefits of the Grid",
                ImgSrc: "/Task6/images/posts/post4/7.png",
                detailsAboutImg: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
                    {
                        type: "p",
                        text: " Using a grid benefits both end users and the designers alike:"
                    },
                    {
                        type: "list",
                        text: [
                            "Designers can quickly put together well-aligned interfaces.",
                            "Users can easily scan predictable grid-based interfaces.",
                            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
                        ],
                        span: "responsive web design",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {
                title: "Choosing and Setting Up Your Grid",
                ImgSrc: "/Task6/images/posts/post4/8.png",
                detailsAboutImg: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                paragraphs: [
                    {
                        type: "p",
                        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",


                    },
                    {
                        type: "p",
                        text: "Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
                        span: "Choose the right grid for your needs.",
                        spanStyle: "bold"
                    },
                    {
                        type: "p",
                        text: "Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
                        span: "Spend time setting up your grid.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {

                ImgSrc: "/Task6/images/posts/post4/9.png",
                detailsAboutImg: "Content or elements should be placed within and across columns, not gutters.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
                        span: "Always place content within columns, not gutters.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                ]
            },
            {
                title: "Conclusion",
                paragraphs: [
                    {
                        type: "p",
                        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                    }
                ],
                paragraphToo: [
                ]
            }
        ]
    },{
        id: 19,
        date: "Sunday , 1 Jan 2023",
        title: "Building your API Stack",
        name: "Orlando Diggs •",
        mainImgSrc: "/Task6/images/posts/post3/main.png",
        desc: [
            "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
        ],
        category: [
            {
                name: "Design",
                color: "text-[#027A48]",
                bgColor: "bg-[#ECFDF3]"
            },
            {
                name: "Research",
                color: "text-[#C11574]",
                bgColor: "bg-[#FDF2FA]"
            }
        ],
        sections: [
            {
                ImgSrc: "/Task6/images/posts/post4/1.png",
                detailsAboutImg: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                paragraphs: [
                    {
                        type: "p",
                        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                    },
                    {
                        type: "p",
                        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                    },
                    {
                        type: "p",
                        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing."
                    },
                    {
                        type: "p",
                        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid."

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Breaking Down the Grid",
                ImgSrc: "/Task6/images/posts/post4/2.png",
                detailsAboutImg: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                    },
                    {
                        type: "p",
                        text: "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                        span: "Columns: ",
                        spanStyle: "bold"

                    },
                    {
                        type: "p",
                        text: "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
                        span: "Gutters:",
                        spanStyle: "bold"

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Examples of Grids in Use",
                subTitle: "Example 1: Hierarchical Grid",
                ImgSrc: "/Task6/images/posts/post4/3.png",
                detailsAboutImg: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                        span: "The New York Times",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 2: Column Grid",
                ImgSrc: "/Task6/images/posts/post4/4.png",
                detailsAboutImg: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                        span: "Ritual.com",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 3: Modular Grid",
                ImgSrc: "/Task6/images/posts/post4/5.png",
                detailsAboutImg: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                        span: "Behance",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 4: Breaking the Grid",
                ImgSrc: "/Task6/images/posts/post4/6.png",
                detailsAboutImg: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                        span: "Shrine from Google’s Material Studies",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Benefits of the Grid",
                ImgSrc: "/Task6/images/posts/post4/7.png",
                detailsAboutImg: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
                    {
                        type: "p",
                        text: " Using a grid benefits both end users and the designers alike:"
                    },
                    {
                        type: "list",
                        text: [
                            "Designers can quickly put together well-aligned interfaces.",
                            "Users can easily scan predictable grid-based interfaces.",
                            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
                        ],
                        span: "responsive web design",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {
                title: "Choosing and Setting Up Your Grid",
                ImgSrc: "/Task6/images/posts/post4/8.png",
                detailsAboutImg: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                paragraphs: [
                    {
                        type: "p",
                        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",


                    },
                    {
                        type: "p",
                        text: "Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
                        span: "Choose the right grid for your needs.",
                        spanStyle: "bold"
                    },
                    {
                        type: "p",
                        text: "Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
                        span: "Spend time setting up your grid.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {

                ImgSrc: "/Task6/images/posts/post4/9.png",
                detailsAboutImg: "Content or elements should be placed within and across columns, not gutters.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
                        span: "Always place content within columns, not gutters.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                ]
            },
            {
                title: "Conclusion",
                paragraphs: [
                    {
                        type: "p",
                        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                    }
                ],
                paragraphToo: [
                ]
            }
        ]
    },{
        id: 20,
        date: "Sunday , 1 Jan 2023",
        title: "UX review presentations",
        name: "Orlando Diggs •",
        mainImgSrc: "/Task6/images/posts/post1/main.png",
        desc: [
            "How do you create compelling presentations that wow your colleagues and impress your managers?",
        ],
        category: [
            {
                name: "Design",
                color: "text-[#6941C6]",
                bgColor: "bg-[#F9F5FF]"
            },
            {
                name: "Research",
                color: "text-[#3538CD]",
                bgColor: "bg-[#EEF4FF]"
            },
            {
                name: "Presentation",
                color: "text-[#C11574]",
                bgColor: "bg-[#FDF2FA]"
            }
        ],
        sections: [
            {
                ImgSrc: "/Task6/images/posts/post4/1.png",
                detailsAboutImg: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                paragraphs: [
                    {
                        type: "p",
                        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                    },
                    {
                        type: "p",
                        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                    },
                    {
                        type: "p",
                        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing."
                    },
                    {
                        type: "p",
                        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid."

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Breaking Down the Grid",
                ImgSrc: "/Task6/images/posts/post4/2.png",
                detailsAboutImg: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                    },
                    {
                        type: "p",
                        text: "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                        span: "Columns: ",
                        spanStyle: "bold"

                    },
                    {
                        type: "p",
                        text: "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
                        span: "Gutters:",
                        spanStyle: "bold"

                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Examples of Grids in Use",
                subTitle: "Example 1: Hierarchical Grid",
                ImgSrc: "/Task6/images/posts/post4/3.png",
                detailsAboutImg: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                        span: "The New York Times",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 2: Column Grid",
                ImgSrc: "/Task6/images/posts/post4/4.png",
                detailsAboutImg: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                        span: "Ritual.com",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 3: Modular Grid",
                ImgSrc: "/Task6/images/posts/post4/5.png",
                detailsAboutImg: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                        span: "Behance",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Example 4: Breaking the Grid",
                ImgSrc: "/Task6/images/posts/post4/6.png",
                detailsAboutImg: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        type: "p",
                        text: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                        span: "Shrine from Google’s Material Studies",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [

                ]
            },
            {
                title: "Benefits of the Grid",
                ImgSrc: "/Task6/images/posts/post4/7.png",
                detailsAboutImg: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
                    {
                        type: "p",
                        text: " Using a grid benefits both end users and the designers alike:"
                    },
                    {
                        type: "list",
                        text: [
                            "Designers can quickly put together well-aligned interfaces.",
                            "Users can easily scan predictable grid-based interfaces.",
                            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
                        ],
                        span: "responsive web design",
                        spanStyle: "underline"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {
                title: "Choosing and Setting Up Your Grid",
                ImgSrc: "/Task6/images/posts/post4/8.png",
                detailsAboutImg: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                paragraphs: [
                    {
                        type: "p",
                        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",


                    },
                    {
                        type: "p",
                        text: "Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
                        span: "Choose the right grid for your needs.",
                        spanStyle: "bold"
                    },
                    {
                        type: "p",
                        text: "Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
                        span: "Spend time setting up your grid.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly."
                ]
            },
            {

                ImgSrc: "/Task6/images/posts/post4/9.png",
                detailsAboutImg: "Content or elements should be placed within and across columns, not gutters.",
                paragraphs: [
                    {
                        type: "p",
                        text: "Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
                        span: "Always place content within columns, not gutters.",
                        spanStyle: "bold"
                    }
                ],
                paragraphToo: [
                    "Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                ]
            },
            {
                title: "Conclusion",
                paragraphs: [
                    {
                        type: "p",
                        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                    }
                ],
                paragraphToo: [
                ]
            }
        ]
    }
]
