import { Model } from "mongoose";

export interface IModel<AttrType, DocumentType> extends Model<any> {
  build(attr: AttrType): DocumentType;
}
