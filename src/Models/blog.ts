export interface  Iblog{
    _id?: any;
    title?: string;
    content?: string;
    tags?: Array<Itag>;
    keywords?: Array<string>;
    dateCreated?: string;
    author?: string;
    authorBio?: string;
    authorPics?: string;
    editDate?: string;
    pics?: string;
    authorId?: number;

}

export interface Itag {
    title?: string;
    class?: string;
}

export interface Icomment {
    _id?: any;
    comment?: string;
    createdDate?: string;
    //indicates the date when the comment was last editted would also be 
    //used to indicate if a comment has been editted or not
    editDate?: string;
    username?: string;
    profilePics?: string;
    blogId: any;
    replies: Array<Ireply>

}

export interface Ireply {
    comment?: string;
    createdDate?: string;
    editDate?: string; 
    username?: string;
    profilePics?: string;
    //refer to the username of the person the comment is replying
    //it will be prefixed with an @sign on the comment page
    replying: string;
}
