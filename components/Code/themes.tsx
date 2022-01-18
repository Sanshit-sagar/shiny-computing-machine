import type { PrismTheme } from 'prism-react-renderer'
import { MenuDatum } from '../Menu/interfaces'

import { StarIcon } from '@radix-ui/react-icons'
import { amberDark, orangeDark, blackA, violetDark } from '@radix-ui/colors'

export type PrismThemeName = 
    | 'shadesOfPurple' 
    | 'synthwave84'  
    | 'ultramin'
    | 'nightOwl'
    | 'nightOwlLight'
    | 'duotoneLight'
    | 'duotoneDark'
    | 'vsLight'
    | 'vsDark'
    | 'oceanicNext'
    | 'okaidia' 
    | 'palenight'
    | 'dracula'
    | 'customTheme1'

export const customTheme1: PrismTheme = {
    plain: {
        background: amberDark.amber1,
        backgroundColor: `linear-gradient(to bottom, ${amberDark.amber1} 75%, ${amberDark.amber10})`,
        backgroundImage: 'red',
        color: violetDark.violet11
      },
    
      styles: [
        {
          types: ["comment", "block-comment", "prolog", "doctype", "cdata"],
          style: {
            color: violetDark.violet8,
            fontStyle: "italic",
          },
        },
        {
          types: ["punctuation"],
          style: {
            color: amberDark.amber11,
          },
        },
        {
          types: [
            "tag",
            "attr-name",
            "namespace",
            "number",
            "unit",
            "hexcode",
            "deleted",
          ],
          style: {
            color: violetDark.violet12,
          },
        },
        {
          types: ["property", "selector"],
          style: {
            color: amberDark.amber8,
          },
        },
        {
          types: ["function-name"],
          style: {
            color: violetDark.violet12,
          },
        },
        {
          types: ["boolean", "selector-id", "function"],
          style: {
            color: "#fdfdfd",
          },
        },
        {
          types: ["class-name", "maybe-class-name", "builtin"],
          style: {
            color: "#fff5f6",
            textShadow:
              `0 0 2px #000, 0 0 10px , 0 0 5px ${orangeDark.orange9}, 0 0 25px ${orangeDark.orange9}`,
          },
        },
        {
          types: ["constant", "symbol"],
          style: {
            color: violetDark.violet12,
          },
        },
        {
          types: ["important", "atrule", "keyword", "selector-class"],
          style: {
            color: "#f4eee4",
          },
        },
        {
          types: ["string", "char", "attr-value", "regex", "variable"],
          style: {
            color: amberDark.amber11,
          },
        },
        {
          types: ["parameter"],
          style: {
            fontStyle: "italic",
          },
        },
        {
          types: ["entity", "url"],
          style: {
            color: amberDark.amber10,
          },
        },
        {
          types: ["operator"],
          style: {
            color: "ffffffee",
          },
        },
        {
          types: ["important", "bold"],
          style: {
            fontWeight: "bold",
          },
        },
        {
          types: ["italic"],
          style: {
            fontStyle: "italic",
          },
        },
        {
          types: ["entity"],
          style: {
            cursor: "help",
          },
        },
        {
          types: ["inserted"],
          style: {
            color: "green",
          },
        },
      ],
}

const synthwave84: PrismTheme = {
  plain: {
    background: "#2a2139",
    backgroundColor: "linear-gradient(to bottom, #2a2139 75%, #34294f)",
    backgroundImage: "#34294f",
    color: "#f92aad",
    textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3",
  },

  styles: [
    {
      types: ["comment", "block-comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#495495",
        fontStyle: "italic",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#ccc",
      },
    },
    {
      types: [
        "tag",
        "attr-name",
        "namespace",
        "number",
        "unit",
        "hexcode",
        "deleted",
      ],
      style: {
        color: "#e2777a",
      },
    },
    {
      types: ["property", "selector"],
      style: {
        color: "#72f1b8",
        textShadow: "0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475",
      },
    },
    {
      types: ["function-name"],
      style: {
        color: "#6196cc",
      },
    },
    {
      types: ["boolean", "selector-id", "function"],
      style: {
        color: "#fdfdfd",
        textShadow:
          "0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975",
      },
    },
    {
      types: ["class-name", "maybe-class-name", "builtin"],
      style: {
        color: "#fff5f6",
        textShadow:
          "0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75",
      },
    },
    {
      types: ["constant", "symbol"],
      style: {
        color: "#f92aad",
        textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3",
      },
    },
    {
      types: ["important", "atrule", "keyword", "selector-class"],
      style: {
        color: "#f4eee4",
        textShadow: "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575",
      },
    },
    {
      types: ["string", "char", "attr-value", "regex", "variable"],
      style: {
        color: "#f87c32",
      },
    },
    {
      types: ["parameter"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["entity", "url"],
      style: {
        color: "#67cdcc",
      },
    },
    {
      types: ["operator"],
      style: {
        color: "ffffffee",
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["entity"],
      style: {
        cursor: "help",
      },
    },
    {
      types: ["inserted"],
      style: {
        color: "green",
      },
    },
  ],
};

const ultramin: PrismTheme = {
  plain: {
    color: "#282a2e",
    backgroundColor: "#ffffff",
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "rgb(197, 200, 198)",
      },
    },
    {
      types: ["string", "number", "builtin", "variable"],
      style: {
        color: "rgb(150, 152, 150)",
      },
    },
    {
      types: ["class-name", "function", "tag", "attr-name"],
      style: {
        color: "rgb(40, 42, 46)",
      },
    },
  ],
};

const shadesOfPurple: PrismTheme = {
    plain: {
    color: "#9EFEFF",
    backgroundColor: "#2D2A55",
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(255, 238, 128)",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "rgba(239, 83, 80, 0.56)",
      },
    },
    {
      types: ["inserted"],
      style: {
        color: "rgb(173, 219, 103)",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(179, 98, 255)",
        fontStyle: "italic",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "rgb(255, 255, 255)",
      },
    },
    {
      types: ["constant"],
      style: {
        color: "rgb(255, 98, 140)",
      },
    },
    {
      types: ["string", "url"],
      style: {
        color: "rgb(165, 255, 144)",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(255, 238, 128)",
      },
    },
    {
      types: ["number", "boolean"],
      style: {
        color: "rgb(255, 98, 140)",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "rgb(255, 180, 84)",
      },
    },
    {
      types: [
        "keyword",
        "operator",
        "property",
        "namespace",
        "tag",
        "selector",
        "doctype",
      ],
      style: {
        color: "rgb(255, 157, 0)",
      },
    },
    {
      types: ["builtin", "char", "constant", "function", "class-name"],
      style: {
        color: "rgb(250, 208, 0)",
      },
    },
  ],
};

const nightOwl: PrismTheme = {
  plain: {
    color: "#d6deeb",
    backgroundColor: "#011627",
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
        fontStyle: "italic",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "rgba(239, 83, 80, 0.56)",
        fontStyle: "italic",
      },
    },
    {
      types: ["inserted", "attr-name"],
      style: {
        color: "rgb(173, 219, 103)",
        fontStyle: "italic",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(99, 119, 119)",
        fontStyle: "italic",
      },
    },
    {
      types: ["string", "url"],
      style: {
        color: "rgb(173, 219, 103)",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(214, 222, 235)",
      },
    },
    {
      types: ["number"],
      style: {
        color: "rgb(247, 140, 108)",
      },
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: "rgb(130, 170, 255)",
      },
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ["punctuation"],
      style: {
        color: "rgb(199, 146, 234)",
      },
    },
    {
      types: ["selector", "doctype"],
      style: {
        color: "rgb(199, 146, 234)",
        fontStyle: "italic",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(255, 203, 139)",
      },
    },
    {
      types: ["tag", "operator", "keyword"],
      style: {
        color: "rgb(127, 219, 202)",
      },
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(255, 88, 116)",
      },
    },
    {
      types: ["property"],
      style: {
        color: "rgb(128, 203, 196)",
      },
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)",
      },
    },
  ],
};

const duotoneDark: PrismTheme = {
    plain: {
        backgroundColor: "#2a2734",
        color: "#9a86fd",
    },
    styles: [
        {
          types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
          style: {
            color: "#6c6783",
          },
    },
    {
          types: ["namespace"],
          style: {
            opacity: 0.7,
          },
        },
        {
          types: ["tag", "operator", "number"],
          style: {
            color: "#e09142",
          },
        },
        {
          types: ["property", "function"],
          style: {
            color: "#9a86fd",
          },
        },
        {
          types: ["tag-id", "selector", "atrule-id"],
          style: {
            color: "#eeebff",
          },
        },
        {
          types: ["attr-name"],
          style: {
            color: "#c4b9fe",
          },
        },
        {
          types: [
            "boolean",
            "string",
            "entity",
            "url",
            "attr-value",
            "keyword",
            "control",
            "directive",
            "unit",
            "statement",
            "regex",
            "at-rule",
            "placeholder",
            "variable",
          ],
          style: {
            color: "#ffcc99",
          },
        },
        {
          types: ["deleted"],
          style: {
            textDecorationLine: "line-through",
          },
        },
        {
          types: ["inserted"],
          style: {
            textDecorationLine: "underline",
          },
        },
        {
          types: ["italic"],
          style: {
            fontStyle: "italic",
          },
        },
        {
          types: ["important", "bold"],
          style: {
            fontWeight: "bold",
          },
        },
        {
          types: ["important"],
          style: {
            color: "#c4b9fe",
          },
        },
    ],
}

const duotoneLight: PrismTheme = {
    plain: {
        backgroundColor: "#faf8f5",
        color: "#728fcb",
    },
    styles: [
        {
          types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
          style: {
            color: "#b6ad9a",
          },
        },
        {
          types: ["namespace"],
          style: {
            opacity: 0.7,
          },
        },
        {
          types: ["tag", "operator", "number"],
          style: {
            color: "#063289",
          },
        },
        {
          types: ["property", "function"],
          style: {
            color: "#b29762",
          },
        },
        {
          types: ["tag-id", "selector", "atrule-id"],
          style: {
            color: "#2d2006",
          },
        },
        {
          types: ["attr-name"],
          style: {
            color: "#896724",
          },
        },
        {
          types: [
            "boolean",
            "string",
            "entity",
            "url",
            "attr-value",
            "keyword",
            "control",
            "directive",
            "unit",
            "statement",
            "regex",
            "at-rule",
          ],
          style: {
            color: "#728fcb",
          },
        },
        {
          types: ["placeholder", "variable"],
          style: {
            color: "#93abdc",
          },
        },
        {
          types: ["deleted"],
          style: {
            textDecorationLine: "line-through",
          },
        },
        {
          types: ["inserted"],
          style: {
            textDecorationLine: "underline",
          },
        },
        {
          types: ["italic"],
          style: {
            fontStyle: "italic",
          },
        },
        {
          types: ["important", "bold"],
          style: {
            fontWeight: "bold",
          },
        },
        {
          types: ["important"],
          style: {
            color: "#896724",
          },
        },
    ],
};

const github: PrismTheme = {
    plain: {
      color: "#393A34",
      backgroundColor: "#f6f8fa",
    },
    styles: [
      {
        types: ["comment", "prolog", "doctype", "cdata"],
        style: {
          color: "#999988",
          fontStyle: "italic",
        },
      },
      {
        types: ["namespace"],
        style: {
          opacity: 0.7,
        },
      },
      {
        types: ["string", "attr-value"],
        style: {
          color: "#e3116c",
        },
      },
      {
        types: ["punctuation", "operator"],
        style: {
          color: "#393A34",
        },
      },
      {
        types: [
          "entity",
          "url",
          "symbol",
          "number",
          "boolean",
          "variable",
          "constant",
          "property",
          "regex",
          "inserted",
        ],
        style: {
          color: "#36acaa",
        },
      },
      {
        types: ["atrule", "keyword", "attr-name", "selector"],
        style: {
          color: "#00a4db",
        },
      },
      {
        types: ["function", "deleted", "tag"],
        style: {
          color: "#d73a49",
        },
      },
      {
        types: ["function-variable"],
        style: {
          color: "#6f42c1",
        },
      },
      {
        types: ["tag", "selector", "keyword"],
        style: {
          color: "#00009f",
        },
      },
    ],
};

const vsLight: PrismTheme = {
    plain: {
        color: "#000000",
        backgroundColor: "#ffffff",
    },
    styles: [
        {
          types: ["comment"],
          style: {
            color: "rgb(0, 128, 0)",
          },
        },
        {
          types: ["builtin"],
          style: {
            color: "rgb(0, 112, 193)",
          },
        },
        {
          types: ["number", "variable", "inserted"],
          style: {
            color: "rgb(9, 134, 88)",
          },
        },
        {
          types: ["operator"],
          style: {
            color: "rgb(0, 0, 0)",
          },
        },
        {
          types: ["constant", "char"],
          style: {
            color: "rgb(129, 31, 63)",
          },
        },
        {
          types: ["tag"],
          style: {
            color: "rgb(128, 0, 0)",
          },
        },
        {
          types: ["attr-name"],
          style: {
            color: "rgb(255, 0, 0)",
          },
        },
        {
          types: ["deleted", "string"],
          style: {
            color: "rgb(163, 21, 21)",
          },
        },
        {
          types: ["changed", "punctuation"],
          style: {
            color: "rgb(4, 81, 165)",
          },
        },
        {
          types: ["function", "keyword"],
          style: {
            color: "rgb(0, 0, 255)",
          },
        },
        {
          types: ["class-name"],
          style: {
            color: "rgb(38, 127, 153)",
          },
        },
    ],
}; 

const vsDark: PrismTheme = {
    plain: {
        color: "#9CDCFE",
        backgroundColor: "#1E1E1E",
      },
      styles: [
        {
          types: ["prolog"],
          style: {
            color: "rgb(0, 0, 128)",
          },
        },
        {
          types: ["comment"],
          style: {
            color: "rgb(106, 153, 85)",
          },
        },
        {
          types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
          style: {
            color: "rgb(86, 156, 214)",
          },
        },
        {
          types: ["number", "inserted"],
          style: {
            color: "rgb(181, 206, 168)",
          },
        },
        {
          types: ["constant"],
          style: {
            color: "rgb(100, 102, 149)",
          },
        },
        {
          types: ["attr-name", "variable"],
          style: {
            color: "rgb(156, 220, 254)",
          },
        },
        {
          types: ["deleted", "string", "attr-value", "template-punctuation"],
          style: {
            color: "rgb(206, 145, 120)",
          },
        },
        {
          types: ["selector"],
          style: {
            color: "rgb(215, 186, 125)",
          },
        },
        {
          // Fix tag color
          types: ["tag"],
          style: {
            color: "rgb(78, 201, 176)",
          },
        },
        {
          // Fix tag color for HTML
          types: ["tag"],
          languages: ["markup"],
          style: {
            color: "rgb(86, 156, 214)",
          },
        },
        {
          types: ["punctuation", "operator"],
          style: {
            color: "rgb(212, 212, 212)",
          },
        },
        {
          // Fix punctuation color for HTML
          types: ["punctuation"],
          languages: ["markup"],
          style: {
            color: "#808080",
          },
        },
        {
          types: ["function"],
          style: {
            color: "rgb(220, 220, 170)",
          },
        },
        {
          types: ["class-name"],
          style: {
            color: "rgb(78, 201, 176)",
          },
        },
        {
          types: ["char"],
          style: {
            color: "rgb(209, 105, 105)",
          },
        },
    ],
}

const nightOwlLight: PrismTheme = {
    plain: {
        color: "#403f53",
        backgroundColor: "#FBFBFB",
      },
      styles: [
        {
          types: ["changed"],
          style: {
            color: "rgb(162, 191, 252)",
            fontStyle: "italic",
          },
        },
        {
          types: ["deleted"],
          style: {
            color: "rgba(239, 83, 80, 0.56)",
            fontStyle: "italic",
          },
        },
        {
          types: ["inserted", "attr-name"],
          style: {
            color: "rgb(72, 118, 214)",
            fontStyle: "italic",
          },
        },
        {
          types: ["comment"],
          style: {
            color: "rgb(152, 159, 177)",
            fontStyle: "italic",
          },
        },
        {
          types: ["string", "builtin", "char", "constant", "url"],
          style: {
            color: "rgb(72, 118, 214)",
          },
        },
        {
          types: ["variable"],
          style: {
            color: "rgb(201, 103, 101)",
          },
        },
        {
          types: ["number"],
          style: {
            color: "rgb(170, 9, 130)",
          },
        },
        {
          // This was manually added after the auto-generation
          // so that punctuations are not italicised
          types: ["punctuation"],
          style: {
            color: "rgb(153, 76, 195)",
          },
        },
        {
          types: ["function", "selector", "doctype"],
          style: {
            color: "rgb(153, 76, 195)",
            fontStyle: "italic",
          },
        },
        {
          types: ["class-name"],
          style: {
            color: "rgb(17, 17, 17)",
          },
        },
        {
          types: ["tag"],
          style: {
            color: "rgb(153, 76, 195)",
          },
        },
        {
          types: ["operator", "property", "keyword", "namespace"],
          style: {
            color: "rgb(12, 150, 155)",
          },
        },
        {
          types: ["boolean"],
          style: {
            color: "rgb(188, 84, 84)",
          },
        },
      ],
}

const oceanicNextColors = {
  char: "#D8DEE9",
  comment: "#999999",
  keyword: "#c5a5c5",
  primitive: "#5a9bcf",
  string: "#8dc891",
  variable: "#d7deea",
  boolean: "#ff8b50",
  punctuation: "#5FB3B3",
  tag: "#fc929e",
  function: "#79b6f2",
  className: "#FAC863",
  method: "#6699CC",
  operator: "#fc929e",
};

const oceanicNext: PrismTheme = {
    plain: {
        backgroundColor: "#282c34",
        color: "#ffffff",
    },
    styles: [{
          types: ["attr-name"],
          style: {
            color: oceanicNextColors.keyword,
          },
        },
        {
          types: ["attr-value"],
          style: {
            color: oceanicNextColors.string,
          },
        },
        {
          types: [
            "comment",
            "block-comment",
            "prolog",
            "doctype",
            "cdata",
            "shebang",
          ],
          style: {
            color: oceanicNextColors.comment,
          },
        },
        {
          types: [
            "property",
            "number",
            "function-name",
            "constant",
            "symbol",
            "deleted",
          ],
          style: {
            color: oceanicNextColors.primitive,
          },
        },
        {
          types: ["boolean"],
          style: {
            color: oceanicNextColors.boolean,
          },
        },
        {
          types: ["tag"],
          style: {
            color: oceanicNextColors.tag,
          },
        },
        {
          types: ["string"],
          style: {
            color: oceanicNextColors.string,
          },
        },
        {
          types: ["punctuation"],
          style: {
            color: oceanicNextColors.string,
          },
        },
        {
          types: ["selector", "char", "builtin", "inserted"],
          style: {
            color: oceanicNextColors.char,
          },
        },
        {
          types: ["function"],
          style: {
            color: oceanicNextColors.function,
          },
        },
        {
          types: ["operator", "entity", "url", "variable"],
          style: {
            color: oceanicNextColors.variable,
          },
        },
        {
          types: ["keyword"],
          style: {
            color: oceanicNextColors.keyword,
          },
        },
        {
          types: ["at-rule", "class-name"],
          style: {
            color: oceanicNextColors.className,
          },
        },
        {
          types: ["important"],
          style: {
            fontWeight: "400",
          },
        },
        {
          types: ["bold"],
          style: {
            fontWeight: "bold",
          },
        },
        {
          types: ["italic"],
          style: {
            fontStyle: "italic",
          },
        },
        {
            types: ["namespace"],
            style: {
                opacity: 0.7,
            },
        },
    ],
}

const okaidia: PrismTheme = {
    plain: {
        color: "#f8f8f2",
        backgroundColor: "#272822",
      },
      styles: [
        {
          types: ["changed"],
          style: {
            color: "rgb(162, 191, 252)",
            fontStyle: "italic",
          },
        },
        {
          types: ["deleted"],
          style: {
            color: "#f92672",
            fontStyle: "italic",
          },
        },
        {
          types: ["inserted"],
          style: {
            color: "rgb(173, 219, 103)",
            fontStyle: "italic",
          },
        },
        {
          types: ["comment"],
          style: {
            color: "#8292a2",
            fontStyle: "italic",
          },
        },
        {
          types: ["string", "url"],
          style: {
            color: "#a6e22e",
          },
        },
        {
          types: ["variable"],
          style: {
            color: "#f8f8f2",
          },
        },
        {
          types: ["number"],
          style: {
            color: "#ae81ff",
          },
        },
        {
          types: ["builtin", "char", "constant", "function", "class-name"],
          style: {
            color: "#e6db74",
          },
        },
        {
          types: ["punctuation"],
          style: {
            color: "#f8f8f2",
          },
        },
        {
          types: ["selector", "doctype"],
          style: {
            color: "#a6e22e",
            fontStyle: "italic",
          },
        },
        {
          types: ["tag", "operator", "keyword"],
          style: {
            color: "#66d9ef",
          },
        },
        {
          types: ["boolean"],
          style: {
            color: "#ae81ff",
          },
        },
        {
          types: ["namespace"],
          style: {
            color: "rgb(178, 204, 214)",
            opacity: 0.7,
          },
        },
        {
          types: ["tag", "property"],
          style: {
            color: "#f92672",
          },
        },
        {
          types: ["attr-name"],
          style: {
            color: "#a6e22e !important",
          },
        },
        {
          types: ["doctype"],
          style: {
            color: "#8292a2",
          },
        },
        {
          types: ["rule"],
          style: {
            color: "#e6db74",
          },
        },
    ],
};

const palenight: PrismTheme = {
    plain: {
        color: "#bfc7d5",
        backgroundColor: "#292d3e",
      },
      styles: [
        {
          types: ["comment"],
          style: {
            color: "rgb(105, 112, 152)",
            fontStyle: "italic",
          },
        },
        {
          types: ["string", "inserted"],
          style: {
            color: "rgb(195, 232, 141)",
          },
        },
        {
          types: ["number"],
          style: {
            color: "rgb(247, 140, 108)",
          },
        },
        {
          types: ["builtin", "char", "constant", "function"],
          style: {
            color: "rgb(130, 170, 255)",
          },
        },
        {
          types: ["punctuation", "selector"],
          style: {
            color: "rgb(199, 146, 234)",
          },
        },
        {
          types: ["variable"],
          style: {
            color: "rgb(191, 199, 213)",
          },
        },
        {
          types: ["class-name", "attr-name"],
          style: {
            color: "rgb(255, 203, 107)",
          },
        },
        {
          types: ["tag", "deleted"],
          style: {
            color: "rgb(255, 85, 114)",
          },
        },
        {
          types: ["operator"],
          style: {
            color: "rgb(137, 221, 255)",
          },
        },
        {
          types: ["boolean"],
          style: {
            color: "rgb(255, 88, 116)",
          },
        },
        {
          types: ["keyword"],
          style: {
            fontStyle: "italic",
          },
        },
        {
          types: ["doctype"],
          style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic",
          },
        },
        {
          types: ["namespace"],
          style: {
            color: "rgb(178, 204, 214)",
          },
        },
        {
          types: ["url"],
          style: {
            color: "rgb(221, 221, 221)",
          },
        },
      ],
};

const dracula: PrismTheme = {
    plain: {
        color: "#F8F8F2",
        backgroundColor: "#282A36",
      },
      styles: [
        {
          types: ["prolog", "constant", "builtin"],
          style: {
            color: "rgb(189, 147, 249)",
          },
        },
        {
          types: ["inserted", "function"],
          style: {
            color: "rgb(80, 250, 123)",
          },
        },
        {
          types: ["deleted"],
          style: {
            color: "rgb(255, 85, 85)",
          },
        },
        {
          types: ["changed"],
          style: {
            color: "rgb(255, 184, 108)",
          },
        },
        {
          types: ["punctuation", "symbol"],
          style: {
            color: "rgb(248, 248, 242)",
          },
        },
        {
          types: ["string", "char", "tag", "selector"],
          style: {
            color: "rgb(255, 121, 198)",
          },
        },
        {
          types: ["keyword", "variable"],
          style: {
            color: "rgb(189, 147, 249)",
            fontStyle: "italic",
          },
        },
        {
          types: ["comment"],
          style: {
            color: "rgb(98, 114, 164)",
          },
        },
        {
          types: ["attr-name"],
          style: {
            color: "rgb(241, 250, 140)",
          },
        },
      ],
};

export const themes = [
    oceanicNext,
    okaidia,
    palenight,
    vsDark,
    vsLight,
    nightOwl,
    nightOwlLight,
    duotoneDark,
    duotoneLight,
    github,
    dracula,
    ultramin, 
    shadesOfPurple, 
    synthwave84,
    customTheme1
]

export const themeIndicies = {
    'oceanicNext': 0,
    'okaidia': 1,
    'palenight': 2,
    'vsDark': 3,
    'vsLight': 4,
    'nightOwl': 5,
    'nightOwlLight': 6,
    'duotoneDark': 7,
    'duotoneLight': 8,
    'github': 9,
    'dracula': 10,
    'ultramin': 11,
    'shadesOfPurple': 12,
    'synthwave84': 13,
    'customTheme1': 14
} 


export const prismThemeSelections: MenuDatum[] = [
    { text: 'oceanicNext', id: 'Oceanic Next', kbd: <StarIcon />, isDisabled: false, leftSlot:  <StarIcon /> },
    { text: 'okaidia', id: 'Okaidia', kbd: '', disabled: false, leftSlot: <StarIcon />  },
    { text: 'palenight', id: 'Palenight', kbd: '', disabled: false, leftSlot:  <StarIcon /> },
    { text: 'vsDark', id: 'VS Dark', kbd: '', disabled: false, leftSlot: <StarIcon />  },
    { text: 'vsLight', id: 'VS Light', kbd: '', disabled: false, leftSlot: <StarIcon />  },
    { text: 'nightOwl', id: 'Nightowl', kbd: '', disabled: false, leftSlot:  <StarIcon /> }, 
    { text: 'nightOwlLight', id: 'Nightowl Light', kbd: '', disabled: false, leftSlot: <StarIcon />  }, 
    { text: 'duotoneDark', id: 'Duotone Dark', kbd: '', disabled: false, leftSlot: <StarIcon />  }, 
    { text: 'duotoneLight', id: 'Duotone Light', kbd: '', disabled: false, leftSlot:  <StarIcon /> }, 
    { text: 'github', id: 'GitHub', kbd: '', disabled: false, leftSlot: <StarIcon />  }, 
    { text: 'dracula', id: 'Dracula', kbd: '', disabled: false, leftSlot:  <StarIcon /> }, 
    { text: 'ultramin', id: 'Ultramin', kbd: '', disabled: false, leftSlot:  <StarIcon /> }, 
    { text: 'shadesOfPurple', id: 'Shades Of Purple', kbd: '', disabled: false, leftSlot:  <StarIcon />  }, 
    { text: 'synthwave84', id: 'Synthwave 84', kbd: '', disabled: false, leftSlot: <StarIcon /> }, 
    { text: 'customTheme1', id: 'Custom Theme 1', kbd: '', disabled: false, leftSlot: <StarIcon /> },
];


// function randomThemeGenerator() {
//     return prismThemes[Math.round(Math.random()*(prismThemes.length))]
// }

// const useThemeManager = ({ themeName }: { themeName: PrismThemeName }) => {
//     const [selected, setSelected] = useState<PrismThemeName>(themeName)

//     const getActiveThemeName = (): PrismThemeName => selected 
//     const setActiveThemeName = (themeName: PrismThemeName): void => setSelected(themeName); 
//     const getActiveThemeClass = (): PrismTheme => themeMap[getActiveThemeName()]

//     const randomizeTheme = () => {
//         let nextTheme: PrismThemeName | undefined = undefined
//         while(!nextTheme || nextTheme===selected) {
//             nextTheme = randomThemeGenerator()
//         } 
//         setSelected(nextTheme)
//     }

//     return {
//         getActiveThemeName,
//         setActiveThemeName,
//         getActiveThemeClass,
//         randomizeTheme
//     }
// }