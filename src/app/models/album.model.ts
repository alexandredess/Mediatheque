//ceci est donc l'import du product model
import Product from "./product.model";

//création du model album qui sera une interface qui étend donc de product
export default interface Album extends Product{
    artiste:string
}