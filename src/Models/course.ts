export interface Icourse {
    id?: number;
    title?: string;
    created_date?: Date| string;
    description?: string;
    course_image?: string;
    public_id?: string;
    sub_category_id?: number;
    level_id?: number;
    is_free?: boolean;
    price?: number;
    language_id?: number;
    language?: string;
    level?: string;
    sub_category?: string;
    category: string;
    discount?: number;
    specification_id?: number;
    is_active?: boolean;
    what_to_learn?: string| Array<string>;
    weeks?: Array<Iweek>;
    author?: string;
    author_career?: string;
    author_bio?: string;
    author_pics?: string;
    
}

export interface Ispecification {
    id?: number;
    name?: string;
    description?: string;
    certificate?: string
}
 interface Iweek {
    id?: number;
    courseId?: number;
    name?: string;
    week_order?: string;
    items?: Array<Iitem>;
}
  interface Iitem {
     id?: number;
     name?: string;
     type?: string;
     content?: string;
     week_id?: number;
     preview?: boolean;
     item_order?: number;
 }
 export interface IstudentFeedBack {
     full_name?: string;
     ratings?: string;
     comment?: string;
     profile_pics?: string;
     created_date?: Date | string;
     ratingList?: Array<number>
 }