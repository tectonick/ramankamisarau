
const PORT = 1337;
const HOST = "127.0.0.1";

const Api =  {
    async getConcerts() {
        return await this.getResourcesCollection("concerts")
    },
    async getArticles() {
        return await this.getResourcesCollection("articles")
    },
    async getBioText() {
        return (await this.getSingleResource("bio"))?.Text;
    },
    async getContactData() {
        return await this.getSingleResource("contact")
    },
    async getGalleryImages() {
        let images = await this.getResourcesCollection("gallery-images");
        return images?.map(image => image.Src);
    },
    async getResourcesCollection(resource){
        let result = await fetch(`http://${HOST}:${PORT}/api/${resource}`);
        let json = await result.json();
        return json.data?.map((resource) => resource.attributes);
    },
    async getSingleResource(resource){
        let result = await fetch(`http://${HOST}:${PORT}/api/${resource}`);
        let json = await result.json();
        return json.data?.attributes;
    },
    async getLastConcert() {
        let concerts = await this.getConcerts();
        return concerts?.sort((a,b) => b.Date - a.Date)[0];
    },
    async getLastArticle() {
        let articles = await this.getArticles();
        return articles?.sort((a,b) => b.Date - a.Date)[0];
    },
}

export default Api;