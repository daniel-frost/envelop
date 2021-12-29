module.exports = {
    distDir: "../../dist/client",
    trailingSlash: true,
    exportPathMap: async function () {
        const paths = {
            '/': { page: '/' }
        };

        return paths;
    }
};