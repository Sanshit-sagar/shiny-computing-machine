import rehypeHighlightCode from './rehype-highlight-code';
import rehypeMetaAttribute from './rehype-meta-attribute';

bundleMDX(source, {
    xdmOptions(input, options) {
        options.rehypePlugins = [
            ...(options.rehypePlugins ?? []),
            rehypeMetaAttribute,
            rehypeHighlightCode,
        ];
        return options;
    },
});