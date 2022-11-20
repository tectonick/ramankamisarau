
import Config from "../Config/config"

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
        let result = await fetch(`${Config.Api.Base}/${resource}`);
        let json = await result.json();
        return json.data?.map((resource) => resource.attributes);
    },
    async getSingleResource(resource){
        let result = await fetch(`${Config.Api.Base}/${resource}`);
        let json = await result.json();
        return json.data?.attributes;
    },
    async getNearConcert() {
        let concerts = await this.getConcerts();
        let sortedConcerts = concerts?.sort((a,b) => Date.parse(a.Date) - Date.parse(b.Date));
        let todayDate = Date.now();
        return sortedConcerts.find((concert)=> Date.parse(concert.Date) > todayDate)
    },
    async getLastArticle() {
        let articles = await this.getArticles();
        return articles?.sort((a,b) => b.Date - a.Date)[0];
    },
}

export default Api;