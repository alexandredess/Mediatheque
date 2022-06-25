//ceci est donc l'import du product model
import Product from "./product.model";

//création du model film qui sera une interface qui étend donc de product
export default interface Film extends Product{
    real:string;
    synopsis:string;
}