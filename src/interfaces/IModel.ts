import { Model } from "mongoose";

export interface IModel<attrType> extends Model<any> {
  build(attr: attrType): any;
}
