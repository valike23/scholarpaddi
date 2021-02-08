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
    
}

export interface Ispecification {
    id?: number;
    name?: string;
    description?: string;
    certificate?: string
}