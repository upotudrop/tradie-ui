
export type Suburb = {
    id: number; 
    name: string; 
    postcode: string;
}

export type Category = {
    id: number;
    name: string;
    parent_category_id: number
}

export type Job = {
    id: number;
    status: string;
    contact_name: string;
    contact_email: string; 
    price: number; 
    description: string; 
    created_at: string;
    updated_at: string | null;
    category: Category;
    suburb: Suburb
}

export type JobOptionKeys = | 'Invited' | 'Accepted'
export type JobStatusKeys = | 'accepted' | 'declined';