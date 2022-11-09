import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const PALETTES = require('bootstrap-pretty/palettes.json');
const pkg = require('../package.json');
const DOCS_BOOTSTRAP_VERSION = '5.3';
export const SITE = {
    author: "Steph Hays",
    title: 'Bootstrap Pretty',
    description: '',
    url: 'https://bootstrappretty.dev',
    prettyUrl: 'bootstrappretty.dev',
    gitHubUrl: 'https://github.com/bootstrap-pretty/bootstrap-pretty-docs',
    cdnUrl: `https://cdn.jsdelivr.net/npm/bootstrap-pretty@${pkg.dependencies['bootstrap-pretty']}`,
    shikiTheme: 'dracula'
};

export const NAVIGATION_LINKS = [
    {
        title: SITE.title,
        description: SITE.description,
        slug: "home",
        showInNav: false,
        active: true,
        playwrightCategory: "standalone"
    },
    {
        title: "Palettes",
        description: "Bootstrap Pretty customized palettes for dark and light modes.",
        slug: "palettes",
        showInNav: true,
        active: true,
        playwrightCategory: "standalone"
    },
    {
        title: "Palette Tags",
        description: "Find Bootstrap Pretty palettes by tag.",
        slug: "palettes/tags",
        showInNav: false,
        active: true,
        playwrightCategory: "standalone"
    },
    {
        title: "Icons",
        description: "Used by Playwright to create specific share images and icons that are not relevant to page links.",
        slug: "icons",
        showInNav: false,
        active: true,
        playwrightCategory: "icons"
    },
];

export const COLORS= [
    {
        title: "Body",
        variants: [
            {
                title: "Body Color",
                class: "text-bg-body-color",
                variables: ["body-color", "body-color-rgb"]
            },
            {
                title: "Body Background",
                class: "text-bg-body-bg",
                variables: ["body-bg", "body-bg-rgb"]
            }
        ]
    },
    {
        title: "Secondary",
        variants: [
            {
                title: "Secondary Color",
                class: "text-bg-secondary-color",
                variables: ["secondary-color", "secondary-color-rgb"]
            },
            {
                title: "Secondary Background",
                class: "text-bg-secondary-bg",
                variables: ["secondary-bg", "secondary-bg-rgb"]
            }
        ]
    },
    {
        title: "Tertiary",
        variants: [
            {
                title: "Tertiary Color",
                class: "text-bg-tertiary-color",
                variables: ["tertiary-color", "tertiary-color-rgb"]
            },
            {
                title: "Tertiary Background",
                class: "text-bg-tertiary-bg",
                variables: ["tertiary-bg", "tertiary-bg-rgb"]
            }
        ]
    },
    {
        title: "Emphasis",
        variants: [
            {
                title: "Emphasis Color",
                class: "text-bg-emphasis-color",
                variables: ["emphasis-color", "emphasis-color-rgb"]
            }
        ]
    },
    {
        title: "Border",
        variants: [
            {
                title: "Border Color",
                class: "text-bg-border-color",
                variables: ["border-color", "border-color-rgb"]
            }
        ]
    },
    {
        title: "Primary",
        variants: [
            {
                title: "Primary",
                class: "text-bg-primary",
                variables: ["primary", "primary-rgb"]
            },
            {
                title: "Background Subtle",
                class: "text-bg-primary-bg-subtle",
                variables: ["primary-bg-subtle"]
            },
            {
                title: "Border Subtle",
                class: "text-bg-primary-border-subtle",
                variables: ["primary-border-subtle"]
            },
            {
                title: "Text",
                class: "text-bg-primary-text",
                variables: ["primary-text"]
            }
        ]
    },
    {
        title: "Success",
        variants: [
            {
                title: "Success",
                class: "text-bg-success",
                variables: ["success", "success-rgb"]
            },
            {
                title: "Background Subtle",
                class: "text-bg-success-bg-subtle",
                variables: ["success-bg-subtle"]
            },
            {
                title: "Border Subtle",
                class: "text-bg-success-border-subtle",
                variables: ["success-border-subtle"]
            },
            {
                title: "Text",
                class: "text-bg-success-text",
                variables: ["success-text"]
            }
        ]
    },
    {
        title: "Danger",
        variants: [
            {
                title: "Danger",
                class: "text-bg-danger",
                variables: ["danger", "danger-rgb"]
            },
            {
                title: "Background Subtle",
                class: "text-bg-danger-bg-subtle",
                variables: ["danger-bg-subtle"]
            },
            {
                title: "Border Subtle",
                class: "text-bg-danger-border-subtle",
                variables: ["danger-border-subtle"]
            },
            {
                title: "Text",
                class: "text-bg-danger-text",
                variables: ["danger-text"]
            }
        ]
    },
    {
        title: "Warning",
        variants: [
            {
                title: "Warning",
                class: "text-bg-warning",
                variables: ["warning", "warning-rgb"]
            },
            {
                title: "Background Subtle",
                class: "text-bg-warning-bg-subtle",
                variables: ["warning-bg-subtle"]
            },
            {
                title: "Border Subtle",
                class: "text-bg-warning-border-subtle",
                variables: ["warning-border-subtle"]
            },
            {
                title: "Text",
                class: "text-bg-warning-text",
                variables: ["warning-text"]
            }
        ]
    },
    {
        title: "Info",
        variants: [
            {
                title: "Info",
                class: "text-bg-info",
                variables: ["info", "info-rgb"]
            },
            {
                title: "Background Subtle",
                class: "text-bg-info-bg-subtle",
                variables: ["info-bg-subtle"]
            },
            {
                title: "Border Subtle",
                class: "text-bg-info-border-subtle",
                variables: ["info-border-subtle"]
            },
            {
                title: "Text",
                class: "text-bg-info-text",
                variables: ["info-text"]
            }
        ]
    },
    {
        title: "Light",
        variants: [
            {
                title: "Light",
                class: "text-bg-light",
                variables: ["light", "light-rgb"]
            },
            {
                title: "Background Subtle",
                class: "text-bg-light-bg-subtle",
                variables: ["light-bg-subtle"]
            },
            {
                title: "Border Subtle",
                class: "text-bg-light-border-subtle",
                variables: ["light-border-subtle"]
            },
            {
                title: "Text",
                class: "text-bg-light-text",
                variables: ["light-text"]
            }
        ]
    },
    {
        title: "Dark",
        variants: [
            {
                title: "Dark",
                class: "text-bg-dark",
                variables: ["dark", "dark-rgb"]
            },
            {
                title: "Background Subtle",
                class: "text-bg-dark-bg-subtle",
                variables: ["dark-bg-subtle"]
            },
            {
                title: "Border Subtle",
                class: "text-bg-dark-border-subtle",
                variables: ["dark-border-subtle"]
            },
            {
                title: "Text",
                class: "text-bg-dark-text",
                variables: ["dark-text"]
            }
        ]
    }
];

export const THEME_COLORS= [ "Primary", "Secondary", "Success", "Danger", "Warning", "Info", "Dark", "Light" ];

export const ALL_COLORS= [ "Blue", "Indigo", "Purple", "Pink", "Red", "Orange", "Yellow", "Green", "Teal", "Cyan", "Gray"];

export const THEME_SECTIONS = [ "Customize", "Contents", "Forms", "Components", "Helpers", "Utilities" ];

export const THEME_HEADINGS = [
    {
        title: "Color",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/customize/color/`,
        section: "Customize",
        contents: [
            {
                title: "Extended Colors", 
                bootstrapPretty: false
            },
            {
                title: "Theme Colors", 
                bootstrapPretty: false
            },
            {
                title: "All Colors", 
                bootstrapPretty: false
            },
        ]
    },
    {
        title: "SASS",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/customize/sass/`,
        section: "Customize",
        contents: [
            {
                title: "Importing", 
                bootstrapPretty: true
            }
        ]
    },
    {
        title: "Reboot",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/content/reboot/`,
        section: "Contents"
    },
    {
        title: "Typography",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/content/typography/`,
        section: "Contents",
        contents: [
            {
                title: "Headings",
                bootstrapPretty: false
            },
            {
                title: "Display Headings",
                bootstrapPretty: false
            },
            {
                title: "Lead",
                bootstrapPretty: false
            },
            {
                title: "Inline Text Elements",
                bootstrapPretty: false
            },
            {
                title: "Abbreviations",
                bootstrapPretty: false
            },
            {
                title: "Blockquotes",
                bootstrapPretty: false
            },
            {
                title:"Naming a Source",
                bootstrapPretty: false
            },
            {
                title: "Unstyled List",
                bootstrapPretty: false
            },
            {
                title:"Inline List",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Images",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/content/images/`,
        section: "Contents",
        contents: [
            {
                title: "Responsive Images",
                bootstrapPretty: false
            },
            {
                title: "Thumbnail Images",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Tables",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/content/tables/`,
        section: "Contents",
        contents: [
            {
                title: "Table Overview",
                bootstrapPretty: false
            },
            {
                title: "Striped Rows",
                bootstrapPretty: false
            },
            {
                title: "Striped Columns",
                bootstrapPretty: false
            },
            {
                title: "Table Variants",
                bootstrapPretty: false
            },
            {
                title: "Colored Border",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Figures",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/content/figures/`,
        section: "Contents",
        contents: [
            {
                title: "Figure Overview",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Basic Form",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/forms/overview/`,
        section: "Forms",
        contents: [
            {
                title: "Basic Form Overview",
                bootstrapPretty: false
            }
        ]

    },
    {
        title: "Disabled Form",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/forms/overview/#disabled-forms`,
        section: "Forms",
        contents: [
            {
                title: "Disabled Form Overview",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Input Sizing",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/forms/form-control/#sizing`,
        section: "Forms",
        contents: [
            {
                title: "Input Sizing Overview",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Input Group",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/forms/input-group/`,
        section: "Forms",
        contents: [
            {
                title: "Input Group Overview",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Floating Labels",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/forms/floating-labels/`,
        section: "Forms",
        contents: [
            {
                title: "Floating Labels Overview",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Validation",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/forms/validation/`,
        section: "Forms",
        contents: [
            {
                title: "Validation Custom Styles",
                bootstrapPretty: false
            },
            {
                title: "Validation Browser Defaults",
                bootstrapPretty: false
            },
            {
                title: "Validation Server Side",
                bootstrapPretty: false
            },
            {
                title: "Validation Tooltips",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Accordion",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/components/accordion/`,
        section: "Components",
        contents: [
            {
                title: "Accordion Tooltips",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Alerts",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/components/alerts/`,
        section: "Components",
        contents: [
            {
                title: "Alert Variants",
                bootstrapPretty: false
            },
            {
                title: "Dismissible Alert",
                bootstrapPretty: false
            },
            {
                title: "Alert with Content",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Badge",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/components/badge/`,
        section: "Components",
        contents: [
            {
                title: "Basic Badge",
                bootstrapPretty: false
            },
            {
                title: "Rounded Pill",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Breadcrumb",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/components/breadcrumb/`,
        section: "Components",
        contents: [
            {
                title: "Breadcrumb Overview",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Buttons",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/components/buttons/`,
        section: "Components",
        contents: [
            {
                title: "Solid Buttons",
                bootstrapPretty: false
            },
            {
                title: "Outline Buttons",
                bootstrapPretty: false
            },
            {
                title:  "Button Sizing",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Button Group",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/components/button-group/`,
        section: "Components",
        contents: [
            {
                title: "Basic Button Group",
                bootstrapPretty: false
            },
            {
                title: "Mixed Button Group",
                bootstrapPretty: false
            },
            {
                title: "Outlined Button Group",
                bootstrapPretty: false
            },
            {
                title: "Button Group Toolbar",
                bootstrapPretty: false
            },
            {
                title: "Vertical Button Group",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Card",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/components/card/`,
        section: "Components",
        contents: [
            {
                title: "Image Cap",
                bootstrapPretty: false
            },
            {
                title: "Header and Footer",
                bootstrapPretty: false
            },
            {
                title: "Card List Group",
                bootstrapPretty: false
            },
            {
                title: "Horizontal Image",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Carousel",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/components/carousel/`,
        section: "Components",
        contents: [
            {
                title: "Carousel Overview",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Copy Code Snippet",
        bootstrapPretty: true,
        section: "Components",
        contents: [
            {
                title: "Copy Code Snippet Overview",
                bootstrapPretty: true
            },
            {
                title: "Copy Code Snippet Sizing",
                bootstrapPretty: true
            },
            {
                title: "Copy Code Snippet CSS Variables",
                bootstrapPretty: true
            },
            {
                title: "Copy Code Snippet SASS Variables",
                bootstrapPretty: true
            }
        ]
    },
    {
        title: "Dropdowns",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/components/dropdowns/`,
        section: "Components",
        contents: [
            {
                title: "Dropdown Button Sizing",
                bootstrapPretty: false
            },
            {
                title: "Split Button",
                bootstrapPretty: false
            },
            {
                title: "Dropdown Directions",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "List Group",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/components/list-group/`,
        section: "Components",
        contents: [
            {
                title: "List Group States",
                bootstrapPretty: false
            },
            {
                title: "List Group Flush",
                bootstrapPretty: false
            },
            {
                title: "List Group Variants",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Modal",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/components/modal/`,
        section: "Components",
        contents: [
            {
                title: "Modal Overview",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Navbar",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/components/navbar/`,
        section: "Components",
        contents: [
            {
                title: "Navbar with Inputs",
                bootstrapPretty: false
            },
            {
                title: "Navbar with Image",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Navs and Tabs",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/components/navs-tabs/`,
        section: "Components",
        contents: [
            {
                title: "Base Nav",
                bootstrapPretty: false
            },
            {
                title: "Nav Tabs",
                bootstrapPretty: false
            },
            {
                title: "Nav Pills",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Pagination",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/components/pagination/`,
        section: "Components",
        contents: [
            {
                title: "Basic Pagination",
                bootstrapPretty: false
            },
            {
                title: "Pagination with Icons",
                bootstrapPretty: false
            },
            {
                title: "Pagination Sizing",
                bootstrapPretty: false
            },
            {
                title: "Pagination States",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Popovers",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/components/popovers/`,
        section: "Components",
        contents: [
            {
                title: "Popover Directions",
                bootstrapPretty: false
            },
            {
                title: "Dismissible Popover",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Progress",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/components/progress/`,
        section: "Components",
        contents: [
            {
                title: "Basic Progress Bar",
                bootstrapPretty: false
            },
            {
                title: "Progress Bar with Labels",
                bootstrapPretty: false
            },
            {
                title: "Progress Bar Variants",
                bootstrapPretty: false
            },
            {
                title: "Multiple Bars",
                bootstrapPretty: false
            },
            {
                title: "Striped Progress Bar",
                bootstrapPretty: false
            },
            {
                title: "Animated Stripes",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Scrollspy",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/components/scrollspy/`,
        section: "Components",
        contents: [
            {
                title: "Scrollspy Overview",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Spinners",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/components/spinners/`,
        section: "Components",
        contents: [
            {
                title: "Border Spinners",
                bootstrapPretty: false
            },
            {
                title: "Growing Spinners",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Toast",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/components/toasts/`,
        section: "Components",
        contents: [
            {
                title: "Toast Overview",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Tooltips",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/components/tooltips/`,
        section: "Components",
        contents: [
            {
                title: "Tooltips Overview",
                bootstrapPretty: false
            }
        ]
    },
    {
        title: "Bootstrap",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/helpers/clearfix/`,
        section: "Helpers"
    },
    {
        title: "Bootstrap",
        bootstrapPretty: false,
        bootstrapDocs: `https://getbootstrap.com/docs/${DOCS_BOOTSTRAP_VERSION}/components/tooltips/`,
        section: "Utilities"
    }
];

const titleCaseAndRemoveSpaces = (input: string) => {
    let words = input.split(" ");
    let titleCasedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return titleCasedWords.join("");
}

export const cheatsheetHeadings = {};
THEME_HEADINGS.filter(heading => heading.contents).map(heading => {
    const titleKey = titleCaseAndRemoveSpaces(heading.title);

    cheatsheetHeadings[titleKey] = heading.title;

    let i = 1;

    heading.contents.forEach(content => {
        const contentKey = `${titleKey}${i}`;
        cheatsheetHeadings[contentKey] = content;
        i++;
    });
});

export const PALETTE_TAGS = [...new Set(PALETTES.map((palette: { tags: string[]; }) => palette.tags).flat())];

export const PALETTE_TAG_LINKS = PALETTE_TAGS.map(tag => ({
    title: `Palette Tag: ${tag}`,
    description: 'replace', 
    slug: `palettes/tags/${tag}`,
    playwrightCategory: "palette tags"
}));

export const PALETTES_ROOT = PALETTES.map((palette: { slug: string; }) => {
    const newSlug = palette.slug.replace('palettes/', '')

    return { ...palette, slug: newSlug }
}); 

export const ALL_SLUGS = [...PALETTES, ...NAVIGATION_LINKS, ...PALETTE_TAG_LINKS];

export const getPropertyBySlug = (array: any[], slug: string, property: string) => {
    // Find the object in the array that has a slug property with the specified value
    const obj = array.find(o => o.slug === slug);
    // Return the title property of the object, or undefined if the object was not found
    return obj ? obj[property] : SITE.title;
};

export const removeSpaceToLowercase = (inputString: string) => {
    return inputString.replaceAll(' ', '').toLowerCase();
};
