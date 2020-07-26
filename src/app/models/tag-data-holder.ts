

export interface TagDataHolder{
    tag: string;
    subTags: Array<TagDataHolder>;
    type: TagType;
}


export enum TagType{
    TITLE,
    SUB_TITLE
}